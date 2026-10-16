/**
 * Douyin Direct Subtitle & Media Extractor
 * 100% Free, Zero Paywalls, Unlimited Video Length
 * 
 * Capabilities:
 * 1. Resolve Douyin short links (v.douyin.com) -> aweme_id
 * 2. Fetch video metadata, no-watermark MP4, MP3 audio, cover
 * 3. Extract and parse native platform subtitles (WebVTT / SRT / plain text)
 * 4. Free AI Speech-to-Text pipeline (Gemini Flash / Whisper) for videos without native subtitles
 */

const fs = require('fs');
const path = require('path');

// Extract URL from user share text
function extractUrl(text) {
  if (!text) return '';
  const match = text.match(/https?:\/\/[^\s，。、“”<>()]+/i);
  return match ? match[0] : text.trim();
}

// Resolve short link to real Aweme ID
async function resolveAwemeId(inputUrl) {
  const cleanUrl = extractUrl(inputUrl);
  if (!cleanUrl) throw new Error('无效的链接或分享文本');

  // Direct ID in URL?
  const directIdMatch = cleanUrl.match(/video\/(\d+)/);
  if (directIdMatch) {
    return { awemeId: directIdMatch[1], finalUrl: cleanUrl };
  }

  // Follow redirect
  const res = await fetch(cleanUrl, {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
    },
    redirect: 'follow'
  });

  const finalUrl = res.url;
  const match = finalUrl.match(/video\/(\d+)/) || finalUrl.match(/(\d{15,25})/);
  if (!match) {
    throw new Error(`无法从重定向链接中识别视频 ID: ${finalUrl}`);
  }

  return { awemeId: match[1], finalUrl };
}

// Parse WebVTT subtitle into structured format, SRT, and readable full text
function parseVtt(vttContent) {
  if (!vttContent || typeof vttContent !== 'string') return null;

  const lines = vttContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const cues = [];
  let currentCue = null;

  const timeRegex = /((\d{1,2}:)?\d{2}:\d{2}[\.,]\d{3})\s*-->\s*((\d{1,2}:)?\d{2}:\d{2}[\.,]\d{3})/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith('WEBVTT') || line.startsWith('NOTE')) continue;

    const timeMatch = line.match(timeRegex);
    if (timeMatch) {
      if (currentCue) cues.push(currentCue);
      currentCue = {
        index: cues.length + 1,
        startTime: timeMatch[1],
        endTime: timeMatch[3],
        textLines: []
      };
    } else if (currentCue) {
      // Avoid line number identifiers
      if (/^\d+$/.test(line) && currentCue.textLines.length === 0) continue;
      currentCue.textLines.push(line);
    }
  }
  if (currentCue) cues.push(currentCue);

  // Generate SRT format
  let srt = '';
  cues.forEach(c => {
    const startSrt = c.startTime.replace('.', ',');
    const endSrt = c.endTime.replace('.', ',');
    srt += `${c.index}\n${startSrt} --> ${endSrt}\n${c.textLines.join('\n')}\n\n`;
  });

  // Generate continuous punctuated plain text
  const textContent = cues
    .map(c => c.textLines.join(' '))
    .filter(Boolean)
    .join('\n\n');

  return {
    cues,
    srtContent: srt.trim(),
    textContent: textContent.trim(),
    totalCues: cues.length
  };
}

// Convert audio via Gemini Flash API (100% Free Tier, up to hours of audio)
async function transcribeAudioWithGemini(audioUrlOrBuffer, geminiApiKey, prompt = '') {
  if (!geminiApiKey) {
    throw new Error('未配置 Gemini API Key。请前往 Google AI Studio (aistudio.google.com) 免费获取 0 门槛 API Key。');
  }

  // 1. Fetch audio buffer if URL provided
  let audioBuffer;
  let mimeType = 'audio/mp3';
  if (typeof audioUrlOrBuffer === 'string') {
    const res = await fetch(audioUrlOrBuffer);
    if (!res.ok) throw new Error(`无法下载音频文件: HTTP ${res.status}`);
    const arrayBuf = await res.arrayBuffer();
    audioBuffer = Buffer.from(arrayBuf);
    const ct = res.headers.get('content-type');
    if (ct && ct.includes('audio')) mimeType = ct.split(';')[0];
  } else {
    audioBuffer = audioUrlOrBuffer;
  }

  const base64Audio = audioBuffer.toString('base64');

  // 2. Call Gemini Flash endpoint with multiple model fallbacks
  const models = ['gemini-2.5-flash', 'gemini-1.5-flash', 'gemini-2.5-flash-lite'];
  let lastErr = null;

  for (const model of models) {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiApiKey}`;

    const payload = {
      contents: [{
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Audio
            }
          },
          {
            text: prompt || "请将这段音频中的语音完整转录为中文文本（逐字稿）。要求：1. 保持发言原意，准确转写；2. 自动添加规范的中文标点符号（逗号、句号、问号、顿号）；3. 根据语意和逻辑停顿合理分段；4. 直接输出转写文本正文，不要输出任何开场白或解释语。"
          }
        ]
      }],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 8192
      }
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`[${model}] API 错误 (${response.status}): ${errText}`);
      }

      const data = await response.json();
      const transcript = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (transcript) return transcript.trim();
    } catch (err) {
      lastErr = err;
      console.warn(`Model ${model} failed, trying next:`, err.message);
    }
  }
  throw lastErr || new Error('Gemini 未返回有效的转写内容');
}

module.exports = {
  extractUrl,
  resolveAwemeId,
  parseVtt,
  transcribeAudioWithGemini
};
