/**
 * Douyin Direct Extractor - Cloudflare Worker Backend
 * 100% Free Serverless Video & Subtitle Extractor
 * Compatible with Cloudflare Workers (100,000 free requests/day)
 */

export default {
  async fetch(request, env, ctx) {
    // 1. Handle CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      });
    }

    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');

    if (!targetUrl) {
      return new Response(JSON.stringify({
        code: 400,
        message: 'Missing url parameter. Usage: /?url=https://v.douyin.com/xxxx/'
      }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    try {
      // 2. Resolve short URL redirect
      const cleanUrl = targetUrl.match(/https?:\/\/[^\s，。、“”<>()]+/i)?.[0] || targetUrl;
      const redirectRes = await fetch(cleanUrl, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
        },
        redirect: 'follow'
      });

      const finalUrl = redirectRes.url;
      const awemeIdMatch = finalUrl.match(/video\/(\d+)/) || finalUrl.match(/(\d{15,25})/);
      const awemeId = awemeIdMatch ? awemeIdMatch[1] : null;

      // 3. Fetch HTML content with Samsung mobile UA
      const pageRes = await fetch(finalUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      });
      const html = await pageRes.text();

      // Extract metadata
      const descMatch = html.match(/"desc":\s*"([^"]+)"/) || html.match(/<title>(.*?)<\/title>/);
      const title = descMatch ? descMatch[1].replace(/ - 抖音$/, '') : '抖音视频作品';

      const coverMatch = html.match(/"cover":\s*\{[^}]*?"url_list":\s*\["([^"]+)"/);
      const cover = coverMatch ? coverMatch[1].replace(/\\u002F/g, '/') : '';

      // Check for video URI
      const videoUriMatch = html.match(/"video":\{"play_addr":\{"uri":"([a-z0-9]+)"/);
      let videoUrl = '';
      if (videoUriMatch && videoUriMatch[1]) {
        videoUrl = `https://www.iesdouyin.com/aweme/v1/play/?video_id=${videoUriMatch[1]}&ratio=1080p&line=0`;
      }

      // Check for subtitles / captions
      let captions = [];
      const captionMatch = html.match(/"caption_infos":\s*(\[[^\]]+\])/);
      if (captionMatch) {
        try {
          captions = JSON.parse(captionMatch[1]);
        } catch (e) {}
      }

      return new Response(JSON.stringify({
        code: 200,
        data: {
          awemeId,
          title,
          cover,
          videoUrl,
          captions,
          hasNativeSubtitles: captions.length > 0,
          originalUrl: cleanUrl,
          finalUrl
        }
      }), {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });

    } catch (err) {
      return new Response(JSON.stringify({
        code: 500,
        message: 'Extraction failed: ' + err.message
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
};
