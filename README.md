# 抖音/全网视频文案提取器 (100% 永久免费开源版)

> 🚀 **零门槛、零付费套路、无视频时长限制** 的短视频文案与素材提取神器。
> 支持一键部署到 **GitHub Pages** 或 **Cloudflare**，全网用户均可通过浏览器一键使用！

支持 **抖音 (Douyin)、TikTok、小红书 (RedNote)、哔哩哔哩 (Bilibili)、YouTube、快手** 等 20+ 主流短视频平台的一键文案提取、音视频素材下载与 AI 爆款二次创作。

---

## 🌟 为什么比其他在线工具更好？

市面上多数所谓的“免费转写工具”（如商业 SaaS）通常设有隐藏的 **300 秒（5分钟）限制**，长视频动辄弹出“可用时长权益不足，请升级会员”。

本项目采用 **双轨混合架构 (Hybrid Pipeline)**：
1. **原生字幕直取 (Direct Subtitles)**：直接解析平台自带的 closed caption 官方字幕轨道，0 秒瞬时提取，无任何时长上限。
2. **免付费长视频引擎 (Free Long-Video Engine)**：针对超过 5 分钟的超长视频（10分钟、30分钟演讲、大课），提取独立原声后直接调用 Google Gemini 2.0 Flash 永久免费接口，秒级生成带标点的高精度逐字稿。
3. **100% 零付费 · 零套路**：不设任何 VIP 门槛、不限使用次数。

---

## ⚡ 核心功能

1. **一键视频文案提取（语音转文字）**
   - 自动清洗多余分享口令
   - AI 高精度语音识别生成逐字稿，自动添加标点与段落拆解
   - 一键复制全文、字数统计与朗读时长预估
2. **多格式导出**
   - 导出 TXT 纯文本
   - 导出 Markdown 笔记格式
   - 导出带时间轴的 SRT 字幕文件（直接导入剪映/Premiere）
3. **全套高清素材下载**
   - 提取无水印原画视频 (MP4)
   - 提取高保真独立原声音频 (MP3)
   - 下载超清视频封面 (JPG)
4. **AI 爆款自媒体创作工坊**
   - ⚡ 爆款结构拆解（Hook 黄金前三秒 - 痛点导入 - 干货价值 - 转化 CTA）
   - 🎯 5 种爆款黄金开头 Hook 重写（反常识式、痛点式、避坑式、清单式等）
   - ✍️ 同款短视频爆款脚本仿写（干货教学风、带货口播风、幽默风等）

---

## 🚀 使用与在线部署

### 方式 1：GitHub Pages 在线访问（单文件零安装）
只需将本项目推送到你的 GitHub 仓库，在仓库设置中开启 **GitHub Pages**（Deploy from branch -> `main` -> `/root`），即可生成属于你自己的专属网址，随时随地在任何设备（手机、平板、电脑）上一键打开使用！

### 方式 2：本地双击直接打开
双击打开项目根目录下的 `index.html`，无需安装任何开发依赖，直接在浏览器中使用。

### 方式 3：本地启动 Web 服务
```bash
node server.js
```
启动后在浏览器打开：[http://localhost:3000](http://localhost:3000)

### 方式 4：命令行直接提取 (CLI)
```bash
# 提取短视频文案并自动保存为本地 txt 文件
node cli.js "https://v.douyin.com/GkqOrmqWLRs/"

# 针对 10 分钟以上超长视频，可结合免费环境变量实现无限制转写：
# Windows PowerShell:
$env:GEMINI_API_KEY="AIzaSy..." ; node cli.js "https://v.douyin.com/xxxxxx/"
```

### 方式 5：Cloudflare Worker 无服务器后端 (可选)
如果需要自定义免跨域解析节点，直接将本项目根目录下的 `worker.js` 复制粘贴到 Cloudflare Workers（每日免费提供 100,000 次请求额度）。

---

## 🛠️ 技术架构

- **前端架构**：单文件原生响应式 UI，集成自适应双栏（左侧操作区、右侧多标签结果区），支持深夜 Midnight / 日间 Cerulean 主题切换。
- **离线安全加密**：内置打包离线 AES 加解密引擎。
- **直通核心**：[douyin_extractor.js](file:///d:/xinjie/Desktop/Antigravity%20Projects/Douyin%20transcribe/douyin_extractor.js) 与 [worker.js](file:///d:/xinjie/Desktop/Antigravity%20Projects/Douyin%20transcribe/worker.js)。
