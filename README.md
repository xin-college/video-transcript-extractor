# 抖音视频文案提取器 (同款 TranscriptGenerate)

> 1:1 还原 [ruanyf/weekly Issue #9485](https://github.com/ruanyf/weekly/issues/9485) 推荐的 **TranscriptGenerate** 视频转文案工具。

支持 **抖音 (Douyin)、TikTok、小红书 (RedNote)、哔哩哔哩 (Bilibili)、YouTube、快手** 等 20+ 主流短视频平台的一键文案提取、音视频素材下载与 AI 爆款创作。

---

## 🌟 核心功能

1. **一键视频文案提取（语音转文字）**
   - 粘贴分享链接，自动清洗多余文本
   - AI 高精度语音识别生成逐字稿，自动标点与智能分段
   - 一键复制全文、字数统计与朗读时长预估
2. **多格式导出**
   - 导出 TXT 纯文本
   - 导出 Markdown 笔记格式
   - 导出带时间轴的 SRT 字幕文件（直接导入剪映）
3. **全套素材下载**
   - 提取无水印原画视频 (MP4)
   - 提取高保真独立音频 (MP3)
   - 下载高清视频封面 (JPG)
4. **AI 爆款自媒体创作工坊**
   - ⚡ 爆款结构拆解（Hook 黄金钩子 - 痛点导入 - 干货价值 - 转化 CTA）
   - 🎯 5 种爆款黄金开头 Hook 重写（反常识式、痛点式、避坑式、清单式等）
   - ✍️ 同款短视频爆款脚本仿写（干货教学风、带货口播风、幽默风等）

---

## 🚀 使用方式

### 方式 1：直接双击或在浏览器打开
直接双击打开项目根目录下的 `index.html`，无需安装任何依赖，即可在浏览器中永久使用！

### 方式 2：本地 Web 服务运行
```bash
node server.js
```
启动后在浏览器打开：[http://localhost:3000](http://localhost:3000)

### 方式 3：命令行直接提取 (CLI)
```bash
# 提取文案并自动保存为本地 txt 文件
node cli.js "https://v.douyin.com/xxxxxx/"
```

---

## 🛠️ 技术原理

- 采用同款 AES-128-CBC (ZeroPadding) 动态双向加密通信协议。
- 智能短链接自动重定向与防盗链直链解析。
- 单文件零外部依赖，内置打包离线加解密引擎与 Tailwind CSS 渲染。
