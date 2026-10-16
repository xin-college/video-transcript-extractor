#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');

const KEY = CryptoJS.enc.Utf8.parse('aaDJL2d9DfhLZO0z');
const IV = CryptoJS.enc.Utf8.parse('412ADDSSFA342442');
const API_BASE = 'https://www.transcriptgenerate.com/prod-api';

function encrypt(plain) {
  const str = typeof plain === 'object' ? JSON.stringify(plain) : String(plain);
  const encrypted = CryptoJS.AES.encrypt(str, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

function decrypt(cipherB64) {
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(cipherB64)
  });
  const decrypted = CryptoJS.AES.decrypt(cipherParams, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  const str = decrypted.toString(CryptoJS.enc.Utf8);
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

function extractUrl(text) {
  const match = text.match(/https?:\/\/[^\s"'`\u4e00-\u9fa5]+/);
  return match ? match[0] : text.trim();
}

async function getSessionToken() {
  const email = `usr_${Date.now()}_${Math.random().toString(36).slice(2, 7)}@fastpass.io`;
  const pwd = `Pass_${Date.now()}!`;
  try {
    await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept-Language': 'zh-CN' },
      body: JSON.stringify(encrypt({ username: email, password: pwd, email }))
    });
    const res = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept-Language': 'zh-CN' },
      body: JSON.stringify(encrypt({ username: email, password: pwd }))
    });
    const data = decrypt((await res.text()).replace(/^"|"$/g, ''));
    return data?.token || data?.data?.token || null;
  } catch (e) {
    return null;
  }
}

async function extractTranscript(inputUrl, targetLang = 'auto') {
  const cleanUrl = extractUrl(inputUrl);
  console.log(`\n🚀 开始提取: ${cleanUrl}`);

  console.log(`🔑 自动获取高速通道鉴权 Token...`);
  const token = await getSessionToken();

  const encBody = JSON.stringify(encrypt({
    appType: 'transcript',
    workUrl: cleanUrl,
    type: 'text',
    targetLanguage: targetLang
  }));

  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'zh-CN'
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}/transcript/createTask`, {
    method: 'POST',
    headers: headers,
    body: encBody
  });

  const rawText = await res.text();
  const resData = decrypt(rawText.replace(/^"|"$/g, ''));

  if (!resData || !resData.data || !resData.data.taskId) {
    console.error('❌ 任务创建失败:', resData?.msg || '未知错误');
    return;
  }

  const taskId = resData.data.taskId;
  console.log(`📌 任务创建成功, Task ID: ${taskId}`);
  console.log(`⏳ AI 正在识别语音生成逐字稿，请稍候...`);

  let attempts = 0;
  const timer = setInterval(async () => {
    attempts++;
    process.stdout.write(`\r⌛ 等待中... [${attempts * 2}s]`);

    try {
      const qRes = await fetch(`${API_BASE}/transcript/queryTask?taskId=${encodeURIComponent(taskId)}`, {
        headers: headers
      });
      const qText = await qRes.text();
      const task = decrypt(qText.replace(/^"|"$/g, ''));

      if (task && task.data) {
        const item = task.data;
        if (item.status === 'SUCCESS') {
          clearInterval(timer);
          process.stdout.write('\r');
          console.log('\n\n🎉 提取成功！\n' + '='.repeat(60));
          console.log(`📌 视频标题: ${item.title || '抖音短视频作品'}`);
          console.log(`⏱️ 视频时长: ${item.duration || 0} 秒`);
          console.log(`📱 平台来源: ${item.platform || 'douyin'}`);
          console.log('='.repeat(60));
          console.log('\n📝 【逐字文案】:\n');
          console.log(item.textContent || '(未提取到文字)');
          console.log('\n' + '='.repeat(60));

          if (item.videoUrl) console.log(`🎬 无水印视频: ${item.videoUrl}`);
          if (item.audioUrl) console.log(`🎵 独立音频: ${item.audioUrl}`);
          if (item.cover) console.log(`🖼️ 封面链接: ${item.cover}`);

          // Save to local file
          const safeTitle = (item.title || 'douyin_transcript').replace(/[\\/:*?"<>|]/g, '_').slice(0, 30);
          const outFile = path.join(process.cwd(), `${safeTitle}_文案.txt`);
          fs.writeFileSync(outFile, item.textContent || '', 'utf8');
          console.log(`\n💾 文案已自动保存至: ${outFile}\n`);
          process.exit(0);
        } else if (item.status === 'FAILURE') {
          clearInterval(timer);
          console.error(`\n❌ 提取失败: ${item.errorMessage || '任务处理失败'}`);
          process.exit(1);
        }
      }
    } catch (err) {
      console.warn('\n查询出错，正在重试...', err.message);
    }

    if (attempts >= 45) {
      clearInterval(timer);
      console.error('\n❌ 处理超时，请稍后检查链接或重试。');
      process.exit(1);
    }
  }, 2000);
}

const input = process.argv[2];
if (!input) {
  console.log('用法: node cli.js <视频链接或分享文本> [目标语言]');
  console.log('示例: node cli.js "https://v.douyin.com/GkqOrmqWLRs/"');
  process.exit(0);
}

extractTranscript(input, process.argv[3] || 'auto').catch(console.error);
