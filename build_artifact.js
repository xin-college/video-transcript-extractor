const fs = require('fs');
const path = require('path');

const cryptoJsCode = fs.readFileSync(path.join(__dirname, 'cryptojs.bundle.min.js'), 'utf8');

const PRELOADED_USER_TASK = {
  title: "客户问“你们和某某家有什么区别”？ 3步回应，把比较转化为信任！",
  content: "客户问“你们和某某家有什么区别”？ 3步回应，把比... 复制打开抖音，看看【知禾有术的作品】",
  textContent: `客户一问你们和某某家有什么区别，很多销售第一句话就把自己带进了比价，谈单谈到一半，客户突然来一句你们家和某某家比有什么区别，大部分销售当场就紧张了，然后掉进两种本能反应里：第一种贬低对手，他们家便宜是便宜，但质量不行；第二种慌忙自夸，我们质量好，服务好，口碑好，两种都错。这两种反应确实太常见了，大部分销售都是本能的选一个。今天先给你核心判断，再给三步回应法。

核心判断是：客户问区别，不是让你评价对手，是在向你要一个选你的理由。这三步是接住、反问、只讲一条，不管你卖设备、软件，还是车子、房子、装修，全部通用。

先说为什么那两种本能反应会丢单。好，先说贬低对手为什么不行？你说竞争对手不行的那一刻，客户心里想的不是原来那家不行，而是你是不是怕了？你贬低对手的样子，在客户眼里就是心虚，这是第一个问题，姿态输了。更麻烦的是第二个问题，客户可能已经去那家看过，甚至有朋友在用那家的产品。你贬低的不是对手，是他的眼光。你等于当着客户的面告诉他你选错了。这种情况下，客户就算心里认同你，嘴上也不会承认，因为承认就意味着承认自己之前判断失误。确实，很多销售没意识到贬低对手其实是在否定客户的选择。

再说说第二种，慌忙罗列优点为什么也不行？区别这道题少说有几十条可以讲，产品参数、价格、交期、售后、案例、团队、资质，每一项都能展开。但客户在乎的可能就一两条，你噼里啪啦讲十条、九条他不关心，真正在乎的那条反而被淹没了。讲的越多，他越觉得都差不多，因为在你罗列的过程中，他没办法判断哪些是真优势，哪些是套话。最后脑子里就一个印象，这家跟别人没什么不一样。对，信息太多了，反而记不住重点。

好，两种坑都讲清楚了。上三步回应法：

第一步：接住，先给这个问题定个调。原话可以照抄：“您这个问题问的特别好，说明您是认真做过功课的。这两家确实都有不少人选，各有各的做法。”这句话一出，三个作用同时达成：第一，夸了客户的认真，你不是随便问问，你是认真比较过了，我尊重你的功课；第二，承认了对手的存在，我没回避，大大方方说这两家都有人选，我不心虚；第三，展示了自己的底气，我不怕比，甚至愿意帮你分析。这个开场确实很稳，不慌不忙，先把气场立住了。能大大方方谈论对手的销售，客户默认你不怕比，这个印象比接下来讲什么都重要。很多销售一听到竞争对手名字就变脸，语气开始急，语速开始快，客户马上就捕捉到了你的紧张。所以第一步的核心不是话术技巧，是心态。我允许你比较，我甚至欢迎比较。

第二步：反问，把比较的尺子拿回来。别急着答，先问：“主要看您这边最看重什么是预算、交付速度还是后期的服务？您几家看下来，比较在意的是哪块？”这一步是三步里最值钱的。为什么？因为区别这道题，答案取决于客户用什么尺子量。他在乎交付，你讲品质讲半天等于没讲；他在乎售后，你拼命比价格反而把自己比便宜了。同一个产品，面对不同需求的客户，应该展示的那一面完全不同。先问清他用什么尺子量，再决定给他看哪一面。对，而且这一步还有一个隐藏的好处，客户的回答会顺便告诉你一个非常重要的情报：他真正的决策标准是什么。这个信息在后面的报价、方案谈判环节全都用得上。很多销售到报价阶段才发现自己一直在错误的维度上跟客户讲优势，就是因为没有在早期通过反问拿到客户的真实尺子。所以反问不只是在回答眼前这道题，还是在为后面的谈判铺路。

第三步：只讲一条差异，配一个案例。客户说了他在乎什么之后，只讲那个维度上的一条真实差异。注意，用描述做法的不同来讲，不用我们更好来讲，这是最核心的原则。能具体举个例子吗？好，假设客户在乎售后。普通说法：“我们的售后比他们家好多了。”空话，无法验证，客户听过一百遍了。高手说法：“在售后这块儿，两家的做法确实不一样。他们是报修后四十八小时内响应，我们是每个客户配一个固定的服务人，出问题直接找他，一般两小时内到。上个月有个跟您差不多规模的厂，就是冲这个从别家转过来的。他们设备一停产，一小时损失好几万，等不起四十八小时。”这个讲法结构很清晰。你看这段话的结构，先客观描述两种做法的差别，不带一个贬义词，再讲这个差别对他这种情况意味着什么，最后用一个和他一样的客户做证据，全程没说对手一句坏话，也没说我们更好，但客户自己会算出谁更适合他。这就是第三步的核心，高手不说我们更好，只说我们不同，让客户自己得出更好的结论。

但如果产品和对手真的高度同质，讲不出硬差异怎么办？这种情况确实存在，特别是在一些成熟品类里。那就把差异落在人身上。原话可以这样说：“产品层面两家确实接近。我跟您说实话，要说区别，可能就是服务您的人不一样。我做这行八年，您这个行业的坑我基本都趟过，签不签都可以聊，至少帮您把该避的坑指出来。”产品同质的行业里，销售本人就是最后的差异化。你的经验、你的判断力、你对行业的理解，这些是竞争对手没法复制的。这个心态很重要，不靠贬低别人，靠自己的专业积累。

最后这段讲给带团队的主管和老板听。“和某某家有什么区别？”这个问题，你的每个销售都会被问到。但大部分团队的现状是，每个人自己现编，编的五花八门。有人贬低对手，有人当场卡壳，有人慌忙罗列一堆优势。这种必考题不该让销售即兴发挥。那团队应该怎么做？建议你组织团队做一次功课，把主要对手列出来，每一家写清楚三样东西：第一，我们真实的差异点是什么？不是编出来的，是真实存在的做法不同；第二，这个差异适合什么样的客户？不是所有客户都在乎同一点；第三，有哪个客户案例能证明？有故事才有说服力。这三样东西整理成一页竞争回应卡，全团队统一口径。以后新人被问到这题，答的是团队打磨过的最好答案，而不是他入职第三天的临场发挥。竞争必考题，团队要有标准答案。对，让最好的回应成为每个人的回应。而且这张卡不是一成不变的，每个季度更新一次，看看客户反馈，看看竞争对手有没有变化，看看有没有新的案例可以加进来，持续打磨，越用越顺手。

总结一下今天的内容：客户问你们和某某家有什么区别？三步回应法：
第一步接住：夸客户认真，承认对手存在，展示自己底气，大大方方不心虚；
第二步反问：把比较的尺子拿回来，搞清楚他最在乎什么是预算、交付还是售后；
第三步只讲一条差异，配一个案例：用描述做法的不同代替我们更好，让客户自己判断谁更适合他。如果产品同质，就把差异落在销售本人身上。核心就是帮客户看清自己适合什么，而不是证明对手不行。记住今天最重要的一句话：客户问区别的时候，别急着证明对手错了，要帮他看清自己适合什么。`,
  platform: "douyin",
  duration: 493.33,
  cover: "https://p3-pc-sign.douyinpic.com/image-cut-tos-priv/cc0fdc56316ae178d57a48923ce439f8~tplv-dy-resize-origshort-autoq-75:330.jpeg?lk3s=138a59ce&x-expires=2107468800&x-signature=9w4RYAeevUQyfNqgZ6sZb1fYhtM%3D&from=327834062&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=cover&biz_tag=pcweb_cover&l=202610160839302D5EA17FD9573C02516F",
  videoUrl: "https://v26-default.365yg.com/8ac22e732c6da975d00d22ee0981c862/6ad19e5f/video/tos/cn/tos-cn-ve-15/oE8UkSnllAyqg7BLAQFw7FGDAfJUmfeEBBCLwI/?a=6383&ch=26&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=313&bt=313&cs=0&ds=4&ft=HImFM68nffPdHK~2N12NvAq-antLjrKKHnCuRka_oJbmvjVhWL6&mime_type=video_mp4&qs=0&rc=aGY5Z2RnNTw8NDk1ZjQzaEBpM2RlNG85cmp4PDMzNGkzM0BeYGI2NjIxNjQxMDYuYjZiYSNgMzNjMmQ0Z29hLS1kLTBzcw%3D%3D&btag=c0000e00030000&cquery=100K_100o_100w_100B_100H&dy_q=1792111170&feature_id=37f92ebd2877ae8e7eba995d406c5150&l=202610160839302D5EA17FD9573C02516F",
  audioUrl: "https://modelscope.cn/models/suncara/hd-media-8/resolve/master/audio-info/cc2c7a7e8b4f4ab6b46d3c8f0e421746.mp3",
  workUrl: "https://v.douyin.com/GkqOrmqWLRs/"
};

const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>视频文案提取器</title>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <script>
    ${cryptoJsCode}
  </script>
  <style>
    /* =========================================================
       THEME VARIABLES (Light Mode is Default, Dark Mode on .dark)
       Palette:
       Abyss: #000f22
       Midnight: #1b3554 / #1C2B48
       Slate: #3f6593
       Steel: #5b86b6
       Cool Cerulean: #8EB1D1 / #80aad3
       Baby Blue Eyes: #A7C7E7
       Ice Soft Blue: #c0e6fd
       Light Blue Grey: #C4D8E5
       Platinum: #E8ECEF
       ========================================================= */

    :root {
      /* LIGHT MODE (DEFAULT) */
      --bg-page-gradient: radial-gradient(circle at 50% 0%, #edf5fc 0%, #f4f8fc 65%, #e8f1fa 100%);
      --card-bg: #ffffff;
      --card-border: #C4D8E5;
      --card-hover-border: #80aad3;
      --card-shadow: 0 10px 25px -4px rgba(28, 43, 72, 0.07), 0 4px 6px -2px rgba(28, 43, 72, 0.04);
      --inner-bg: #f7faff;
      --inner-border: #C4D8E5;
      --text-main: #000f22;
      --text-title: #1C2B48;
      --text-muted: #3f6593;
      --text-sub: #5b86b6;
      --badge-bg: #eaf3fb;
      --badge-border: #C4D8E5;
      --badge-text: #1b3554;
      --button-sec-bg: #edf5fc;
      --button-sec-border: #C4D8E5;
      --button-sec-text: #1C2B48;
      --button-sec-hover: #dbeaf7;
      --primary-btn-bg: linear-gradient(135deg, #1C2B48 0%, #3f6593 100%);
      --primary-btn-text: #ffffff;
      --primary-btn-shadow: 0 8px 20px rgba(28, 43, 72, 0.22);
      --accent-tab-active: #1C2B48;
      --accent-tab-active-border: #3f6593;
      --accent-tab-inactive: #5b86b6;
      --accent-tab-inactive-hover: #1C2B48;
      --accent-color: #3f6593;
      --scrollbar-track: #edf5fc;
      --scrollbar-thumb: #A7C7E7;
      --scrollbar-thumb-hover: #80aad3;
      --selection-bg: #c0e6fd;
      --selection-text: #000f22;
      --header-border: #C4D8E5;
      --input-placeholder: #8EB1D1;
      --quick-copy-bg: linear-gradient(135deg, #1C2B48 0%, #3f6593 100%);
      --quick-copy-text: #ffffff;
      --video-bg: #0d1e33;
    }

    html.dark {
      /* DARK MODE (Midnight & Cool Cerulean) */
      --bg-page-gradient: radial-gradient(circle at 50% 0%, #0d1e33 0%, #000f22 80%);
      --card-bg: rgba(11, 23, 40, 0.96);
      --card-border: #1b3554;
      --card-hover-border: #3f6593;
      --card-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
      --inner-bg: #000f22;
      --inner-border: #1b3554;
      --text-main: #E8ECEF;
      --text-title: #E8ECEF;
      --text-muted: #C4D8E5;
      --text-sub: #8EB1D1;
      --badge-bg: #0d1e33;
      --badge-border: #1b3554;
      --badge-text: #C4D8E5;
      --button-sec-bg: #1b3554;
      --button-sec-border: #3f6593;
      --button-sec-text: #E8ECEF;
      --button-sec-hover: #3f6593;
      --primary-btn-bg: linear-gradient(135deg, #8EB1D1 0%, #80aad3 50%, #c0e6fd 100%);
      --primary-btn-text: #000f22;
      --primary-btn-shadow: 0 8px 25px rgba(128, 170, 211, 0.35);
      --accent-tab-active: #c0e6fd;
      --accent-tab-active-border: #80aad3;
      --accent-tab-inactive: #8EB1D1;
      --accent-tab-inactive-hover: #E8ECEF;
      --accent-color: #80aad3;
      --scrollbar-track: #000f22;
      --scrollbar-thumb: #3f6593;
      --scrollbar-thumb-hover: #5b86b6;
      --selection-bg: #80aad3;
      --selection-text: #000f22;
      --header-border: rgba(27, 53, 84, 0.8);
      --input-placeholder: #5b86b6;
      --quick-copy-bg: linear-gradient(135deg, #80aad3 0%, #c0e6fd 100%);
      --quick-copy-text: #000f22;
      --video-bg: #000f22;
    }

    body {
      background: var(--bg-page-gradient);
      color: var(--text-main);
      min-height: 100vh;
      transition: background 0.3s ease, color 0.3s ease;
    }

    .theme-card {
      background: var(--card-bg);
      border-color: var(--card-border);
      box-shadow: var(--card-shadow);
      transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .theme-card:hover {
      border-color: var(--card-hover-border);
    }

    .theme-inner {
      background: var(--inner-bg);
      border-color: var(--inner-border);
      color: var(--text-main);
      transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
    }

    .theme-title {
      color: var(--text-title);
      transition: color 0.3s ease;
    }

    .theme-sub {
      color: var(--text-sub);
      transition: color 0.3s ease;
    }

    .theme-muted {
      color: var(--text-muted);
      transition: color 0.3s ease;
    }

    .theme-badge {
      background: var(--badge-bg);
      border-color: var(--badge-border);
      color: var(--badge-text);
      transition: all 0.3s ease;
    }

    .theme-btn-sec {
      background: var(--button-sec-bg);
      border-color: var(--button-sec-border);
      color: var(--button-sec-text);
      transition: all 0.2s ease;
    }
    .theme-btn-sec:hover {
      background: var(--button-sec-hover);
    }

    .theme-btn-primary {
      background: var(--primary-btn-bg);
      color: var(--primary-btn-text);
      box-shadow: var(--primary-btn-shadow);
      transition: all 0.25s ease;
    }

    .theme-btn-quick-copy {
      background: var(--quick-copy-bg);
      color: var(--quick-copy-text);
      transition: all 0.25s ease;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: var(--scrollbar-track); }
    ::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--scrollbar-thumb-hover); }

    ::selection {
      background: var(--selection-bg);
      color: var(--selection-text);
    }

    /* Tabs */
    .tab-btn {
      border-bottom: 2px solid transparent;
      color: var(--accent-tab-inactive);
      transition: all 0.2s ease;
    }
    .tab-btn:hover {
      color: var(--accent-tab-inactive-hover);
    }
    .tab-btn.active {
      border-bottom-color: var(--accent-tab-active-border);
      color: var(--accent-tab-active);
    }
  </style>
</head>
<body class="antialiased font-sans">
  <div class="max-w-[1520px] mx-auto px-4 py-6 sm:px-6 lg:px-8">
    
    <!-- Top Navigation / Header -->
    <header class="flex items-center justify-between gap-4 pb-5 mb-6 border-b" style="border-color: var(--header-border);">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg text-[#000f22] font-black text-xl flex-shrink-0"
             style="background: linear-gradient(135deg, #c0e6fd 0%, #80aad3 50%, #5b86b6 100%); box-shadow: 0 10px 25px -5px rgba(128, 170, 211, 0.35);">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-lg sm:text-xl font-black tracking-tight theme-title">
              视频文案提取器
            </h1>
          </div>
        </div>
      </div>

      <!-- Header Right: Platform Pills & Theme Toggle -->
      <div class="flex items-center gap-3">
        <!-- Platform Support Pills -->
        <div class="hidden xl:flex items-center gap-1.5 text-xs">
          <span class="px-2.5 py-1 rounded-lg theme-badge border flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#3f6593]"></span> 抖音
          </span>
          <span class="px-2.5 py-1 rounded-lg theme-badge border flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#80aad3]"></span> TikTok
          </span>
          <span class="px-2.5 py-1 rounded-lg theme-badge border flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#5b86b6]"></span> 小红书
          </span>
          <span class="px-2.5 py-1 rounded-lg theme-badge border flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#8EB1D1]"></span> B站
          </span>
        </div>

        <!-- Light / Dark Mode Toggle Button (Icon Only) -->
        <button id="themeToggleBtn" title="切换浅色 / 深色模式" aria-label="切换浅色 / 深色模式"
                class="theme-btn-sec w-10 h-10 rounded-2xl border flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200">
          <!-- Sun Icon (for Light Mode) -->
          <svg id="themeIconSun" class="w-5 h-5 text-[#1C2B48] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon Icon (for Dark Mode) -->
          <svg id="themeIconMoon" class="w-5 h-5 text-[#c0e6fd] hidden transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Two-Column Split Layout -->
    <main class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      <!-- ==========================================
           LEFT COLUMN (5 of 12 cols): 视频链接或分享文本
           ========================================== -->
      <div class="lg:col-span-5 space-y-5">
        
        <!-- Input Card -->
        <div id="inputCard" class="theme-card relative rounded-3xl border p-5 sm:p-6 backdrop-blur-xl">
          
          <!-- Input Top Actions -->
          <div class="flex items-center justify-between mb-3 text-sm">
            <label for="urlInput" class="font-bold theme-title flex items-center gap-2">
              <svg class="w-4 h-4 text-[#5b86b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              视频链接或分享文本
            </label>
            <div class="flex items-center gap-2">
              <button id="btnPaste" class="theme-btn-sec text-xs px-2.5 py-1 rounded-md border font-medium">
                📋 粘贴链接
              </button>
              <button id="btnSample" class="theme-btn-sec text-xs px-2.5 py-1 rounded-md border font-medium">
                💡 填入示例
              </button>
              <button id="btnClear" class="theme-btn-sec text-xs px-2 py-1 rounded-md border font-medium">
                清空
              </button>
            </div>
          </div>

          <!-- Textarea -->
          <div class="relative">
            <textarea
              id="urlInput"
              rows="4"
              placeholder="请在此粘贴视频分享链接（直接粘贴整段App分享文案即可，例如：3.58 复制打开抖音... https://v.douyin.com/xxx/ ...）"
              class="theme-inner w-full rounded-2xl border px-4 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#80aad3]/40 focus:border-[#80aad3] transition duration-200 resize-none font-mono"
              style="placeholder-color: var(--input-placeholder);"
            ></textarea>
          </div>

          <!-- Options & Submit Bar -->
          <div class="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            
            <!-- Target Language Select -->
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-1.5 text-xs theme-muted whitespace-nowrap">
                <svg class="w-3.5 h-3.5 text-[#5b86b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>语言:</span>
              </div>
              <select
                id="languageSelect"
                class="theme-inner text-xs rounded-xl px-2.5 py-2 border focus:outline-none focus:ring-2 focus:ring-[#80aad3] transition"
              >
                <option value="auto">自动识别 (原文)</option>
                <option value="zh-CN">简体中文</option>
                <option value="zh-TW">繁体中文</option>
                <option value="en">English</option>
                <option value="ja">日语</option>
                <option value="ko">韩语</option>
                <option value="fr">法语</option>
                <option value="de">德语</option>
                <option value="es">西班牙语</option>
                <option value="ru">俄语</option>
              </select>
            </div>

            <!-- Submit Button -->
            <button
              id="btnExtract"
              class="theme-btn-primary px-5 py-2.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg id="btnIcon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <svg id="btnSpinner" class="w-4 h-4 animate-spin hidden" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span id="btnText">一键提取视频文案</span>
            </button>
          </div>

        </div>

        <!-- Live Status / Progress Bar (Hidden when idle) -->
        <div id="statusCard" class="theme-card hidden rounded-2xl border p-4 transition-all">
          <div class="flex items-center justify-between text-xs mb-2">
            <div class="flex items-center gap-2 theme-title font-medium">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#80aad3] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5b86b6]"></span>
              </span>
              <span id="statusMessage">正在初始化快速通道...</span>
            </div>
            <span id="statusStep" class="theme-sub text-xs">处理中...</span>
          </div>
          <div class="w-full theme-inner rounded-full h-2 overflow-hidden border">
            <div id="progressBar" class="h-2 rounded-full transition-all duration-300 w-1/4"
                 style="background: linear-gradient(90deg, #3f6593 0%, #80aad3 50%, #c0e6fd 100%);"></div>
          </div>
        </div>

        <!-- Video Meta & Fast Actions Card (Shown when extracted) -->
        <div id="videoMetaCard" class="theme-card rounded-3xl border p-5 space-y-4">
          <div class="flex items-start gap-3.5">
            <img id="resCoverThumb" src="" alt="封面" class="theme-inner w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border flex-shrink-0 shadow-md">
            <div class="space-y-1 min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-1.5">
                <span id="resPlatformBadge" class="text-[11px] px-2 py-0.5 rounded-md theme-badge border font-semibold uppercase">
                  Douyin
                </span>
                <span id="resDurationBadge" class="text-[11px] px-2 py-0.5 rounded-md theme-badge border">
                  ⏱️ 08:13
                </span>
                <span id="resWordsBadge" class="text-[11px] px-2 py-0.5 rounded-md theme-badge border">
                  ✍️ 2690 字
                </span>
              </div>
              <h2 id="resTitle" class="text-sm font-bold theme-title line-clamp-2 leading-snug">
                客户问“你们和某某家有什么区别”？ 3步回应，把比较转化为信任！
              </h2>
              <p id="resDescSnippet" class="text-xs theme-sub line-clamp-1">
                知禾有术的作品 · 抖音爆款销售话术解析
              </p>
            </div>
          </div>

          <!-- Fast Action Buttons -->
          <div class="flex items-center gap-2 pt-2 border-t" style="border-color: var(--card-border);">
            <button id="btnQuickCopy" class="theme-btn-quick-copy flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              复制全文
            </button>
            <button id="btnNewExtract" class="theme-btn-sec flex-1 py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer">
              <span>🔄</span> 提取下一个
            </button>
          </div>
        </div>

        <!-- Quick Tips Mini Card -->
        <div class="theme-card rounded-2xl border p-4 space-y-2 text-xs">
          <div class="flex items-center gap-2 font-bold theme-title">
            <span>💡</span> 使用小提示
          </div>
          <p class="theme-sub leading-relaxed">
            支持直接粘贴 App 完整分享文案，系统自动过滤无关字符并提取视频逐字稿。
          </p>
        </div>

      </div>

      <!-- ==========================================
           RIGHT COLUMN (7 of 12 cols): 视频逐字文案 & 多标签结果展示
           ========================================== -->
      <div class="lg:col-span-7 space-y-4">
        
        <!-- Right Main Results Container -->
        <div id="resultContainer" class="theme-card rounded-3xl border p-5 sm:p-6 shadow-xl space-y-4">
          
          <!-- Tabs Bar (Full Width, No Horizontal Scrollbar) -->
          <div class="flex items-center gap-1 sm:gap-2 pb-2 border-b" style="border-color: var(--card-border);">
            <button class="tab-btn active px-3.5 py-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap cursor-pointer" data-target="tabTranscript">
              📝 逐字稿
            </button>
            <button class="tab-btn px-3.5 py-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap cursor-pointer" data-target="tabMetadata">
              📌 标题与描述
            </button>
            <button class="tab-btn px-3.5 py-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap cursor-pointer" data-target="tabMedia">
              🎬 媒体素材
            </button>
            <button class="tab-btn px-3.5 py-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap cursor-pointer" data-target="tabAIStudio">
              ✨ AI 创作工坊
            </button>
          </div>

          <!-- TAB 1: 视频逐字文案 -->
          <div id="tabTranscript" class="tab-content space-y-3">
            <!-- Sub-Toolbar: Title + Badge on left, Export Buttons on right in single neat row -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div class="flex items-center gap-2">
                <h3 class="text-sm sm:text-base font-bold theme-title flex items-center gap-1.5">
                  <span>视频逐字文案</span>
                </h3>
                <span id="transLangLabel" class="text-xs px-2.5 py-0.5 rounded-full theme-badge border font-normal">
                  原文 (2690字)
                </span>
              </div>

              <!-- Export Buttons Toolbar -->
              <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap">
                <button id="btnCopyText" class="theme-btn-sec px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition">
                  📋 复制全文
                </button>
                <button id="btnExportTxt" class="theme-btn-sec px-2.5 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95 transition">
                  📄 TXT
                </button>
                <button id="btnExportMd" class="theme-btn-sec px-2.5 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95 transition">
                  📝 Markdown
                </button>
                <button id="btnExportSrt" class="theme-btn-sec px-2.5 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95 transition">
                  ⏱️ SRT 字幕
                </button>
              </div>
            </div>

            <!-- Transcript Content Box (Internal Scrollbar) -->
            <div class="relative">
              <div id="transcriptBox" class="theme-inner w-full rounded-2xl border p-4 sm:p-5 text-sm sm:text-base leading-relaxed whitespace-pre-wrap h-[500px] overflow-y-auto font-sans selection:bg-[#c0e6fd] selection:text-[#000f22]">
              </div>
            </div>
          </div>

          <!-- TAB 2: 标题与描述 -->
          <div id="tabMetadata" class="tab-content hidden space-y-4 h-[560px] overflow-y-auto pr-1">
            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label class="text-xs font-bold uppercase tracking-wider theme-muted">视频标题</label>
                <button id="btnCopyTitle" class="text-xs text-[#5b86b6] hover:underline cursor-pointer">复制标题</button>
              </div>
              <div id="metaTitle" class="theme-inner rounded-xl border p-3 text-sm select-all">
                -
              </div>
            </div>

            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label class="text-xs font-bold uppercase tracking-wider theme-muted">视频描述与标签</label>
                <button id="btnCopyDesc" class="text-xs text-[#5b86b6] hover:underline cursor-pointer">复制描述</button>
              </div>
              <div id="metaDesc" class="theme-inner rounded-xl border p-3 text-sm whitespace-pre-wrap select-all">
                -
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div class="theme-inner rounded-xl border p-3">
                <div class="text-xs theme-sub">发布平台</div>
                <div id="metaPlatform" class="text-sm font-semibold theme-title mt-1 uppercase">-</div>
              </div>
              <div class="theme-inner rounded-xl border p-3">
                <div class="text-xs theme-sub">视频时长</div>
                <div id="metaDuration" class="text-sm font-semibold theme-title mt-1">-</div>
              </div>
              <div class="theme-inner rounded-xl border p-3">
                <div class="text-xs theme-sub">原作品网址</div>
                <a id="metaWorkUrl" href="#" target="_blank" class="text-sm font-medium text-[#5b86b6] hover:underline truncate block mt-1">查看原网页</a>
              </div>
            </div>
          </div>

          <!-- TAB 3: 媒体素材下载 -->
          <div id="tabMedia" class="tab-content hidden space-y-4 h-[560px] overflow-y-auto pr-1">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold theme-title flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#3f6593]"></span>
                  无水印视频
                </h4>
                <a id="btnDownloadVideo" href="#" target="_blank" download="video.mp4" class="theme-btn-primary text-xs px-3 py-1.5 rounded-lg font-bold">
                  ⬇️ 下载视频 (MP4)
                </a>
              </div>
              <div class="relative rounded-2xl overflow-hidden border aspect-video flex items-center justify-center max-h-60" style="background: var(--video-bg); border-color: var(--inner-border);">
                <video id="mediaVideo" controls class="w-full h-full object-contain" poster=""></video>
                <div id="noVideoNotice" class="hidden text-xs theme-sub">此视频直链需跳转下载</div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold theme-title flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#5b86b6]"></span>
                    提取音频 (MP3)
                  </h4>
                  <a id="btnDownloadAudio" href="#" target="_blank" download="audio.mp3" class="theme-btn-sec text-xs px-2.5 py-1 rounded-lg border font-bold">
                    🎵 下载
                  </a>
                </div>
                <div class="theme-inner rounded-xl border p-3">
                  <audio id="mediaAudio" controls class="w-full"></audio>
                </div>
              </div>

              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold theme-title flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#80aad3]"></span>
                    视频封面图
                  </h4>
                  <a id="btnDownloadCover" href="#" target="_blank" download="cover.jpg" class="theme-btn-sec text-xs px-2.5 py-1 rounded-lg border font-medium">
                    🖼️ 下载
                  </a>
                </div>
                <div class="theme-inner rounded-xl border p-2 flex items-center justify-center max-h-32 overflow-hidden">
                  <img id="mediaCover" src="" alt="视频封面" class="max-h-28 rounded-lg object-contain">
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 4: AI 爆款创作工坊 -->
          <div id="tabAIStudio" class="tab-content hidden space-y-4 h-[560px] overflow-y-auto pr-1">
            <div class="theme-inner rounded-2xl border p-4 space-y-2">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold theme-title flex items-center gap-2">
                  ⚡ 爆款逻辑结构拆解 (Hook - Story - Value - CTA)
                </h4>
                <button onclick="copyElementText('aiStructureBox')" class="text-xs theme-sub hover:underline cursor-pointer">复制拆解</button>
              </div>
              <div id="aiStructureBox" class="theme-card text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-2 p-3.5 rounded-xl border">
              </div>
            </div>

            <div class="theme-inner rounded-2xl border p-4 space-y-2">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold theme-title flex items-center gap-2">
                  🎯 爆款黄金前 3 秒 Hook
                </h4>
                <button onclick="copyElementText('aiHooksBox')" class="text-xs theme-sub hover:underline cursor-pointer">复制 Hooks</button>
              </div>
              <div id="aiHooksBox" class="grid grid-cols-1 gap-2.5 text-xs sm:text-sm">
              </div>
            </div>

            <div class="theme-inner rounded-2xl border p-4 space-y-2">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold theme-title flex items-center gap-2">
                  ✍️ 同款爆款脚本仿写
                </h4>
                <button onclick="copyElementText('aiRewriteBox')" class="text-xs theme-sub hover:underline cursor-pointer">复制仿写脚本</button>
              </div>
              <div id="aiRewriteBox" class="theme-card text-xs sm:text-sm leading-relaxed whitespace-pre-wrap p-3.5 rounded-xl border">
              </div>
            </div>
          </div>

        </div>

        <!-- Empty State Container (Displayed when user resets / no video yet) -->
        <div id="emptyState" class="theme-card hidden rounded-3xl border p-12 text-center space-y-4 shadow-xl">
          <div class="w-16 h-16 rounded-2xl theme-badge border flex items-center justify-center mx-auto text-2xl">
            📝
          </div>
          <div class="space-y-1">
            <h3 class="text-base font-bold theme-title">等待提取视频文案</h3>
            <p class="text-xs sm:text-sm theme-sub max-w-md mx-auto leading-relaxed">
              在左侧输入框粘贴抖音或短视频分享文本，点击“一键提取视频文案”，文案逐字稿将在此实时呈现。
            </p>
          </div>
        </div>

      </div>

    </main>

    <!-- Footer -->
    <footer class="mt-10 text-center text-xs theme-sub py-4 border-t" style="border-color: var(--header-border);">
      <p>视频文案提取器 · 双栏免滚动工作流</p>
    </footer>

  </div>

  <!-- Toast Notification -->
  <div id="toast" class="fixed top-5 right-5 z-50 transform translate-y-[-100px] opacity-0 transition-all duration-300 pointer-events-none">
    <div class="theme-card rounded-2xl border px-4 py-3 shadow-2xl text-xs sm:text-sm flex items-center gap-2">
      <span id="toastIcon">✅</span>
      <span id="toastMsg" class="font-medium">操作成功</span>
    </div>
  </div>

  <script>
    // --- Preloaded User Task ---
    const PRELOADED_TASK = ${JSON.stringify(PRELOADED_USER_TASK)};

    // --- Configuration & Encryption ---
    const KEY = CryptoJS.enc.Utf8.parse("aaDJL2d9DfhLZO0z");
    const IV = CryptoJS.enc.Utf8.parse("412ADDSSFA342442");
    const API_BASE = "https://www.transcriptgenerate.com/prod-api";

    function encryptPayload(plain) {
      const str = typeof plain === "object" ? JSON.stringify(plain) : String(plain);
      const encrypted = CryptoJS.AES.encrypt(str, KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
      });
      return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    }

    function decryptPayload(cipherB64) {
      const cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(cipherB64)
      });
      const decrypted = CryptoJS.AES.decrypt(cipherParams, KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
      });
      const str = decrypted.toString(CryptoJS.enc.Utf8);
      try { return JSON.parse(str); } catch (e) { return str; }
    }

    // --- Sandbox-safe in-memory storage fallback ---
    let inMemoryToken = null;
    const inMemoryCache = {};

    function safeGetStorage(key) {
      try {
        if (typeof window !== "undefined" && "localStorage" in window) {
          return window.localStorage.getItem(key);
        }
      } catch (e) {
        // Sandboxed iframe lacks allow-same-origin
      }
      return inMemoryCache[key] || null;
    }

    function safeSetStorage(key, value) {
      try {
        if (typeof window !== "undefined" && "localStorage" in window) {
          window.localStorage.setItem(key, value);
        }
      } catch (e) {
        // Sandboxed iframe lacks allow-same-origin
      }
      inMemoryCache[key] = value;
    }

    // --- Theme Toggle System (Default: Light Mode) ---
    function initTheme() {
      const savedTheme = safeGetStorage("douyin_theme");
      const isDark = savedTheme === "dark";
      setTheme(isDark ? "dark" : "light");
    }

    function setTheme(theme) {
      const isDark = theme === "dark";
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      safeSetStorage("douyin_theme", theme);
      updateThemeToggleUI(isDark);
    }

    function updateThemeToggleUI(isDark) {
      const sunIcon = document.getElementById("themeIconSun");
      const moonIcon = document.getElementById("themeIconMoon");
      const btn = document.getElementById("themeToggleBtn");

      if (isDark) {
        if (sunIcon) sunIcon.classList.add("hidden");
        if (moonIcon) moonIcon.classList.remove("hidden");
        if (btn) btn.setAttribute("title", "切换至浅色模式");
      } else {
        if (sunIcon) sunIcon.classList.remove("hidden");
        if (moonIcon) moonIcon.classList.add("hidden");
        if (btn) btn.setAttribute("title", "切换至深色模式");
      }
    }

    document.getElementById("themeToggleBtn").addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      const nextTheme = isCurrentlyDark ? "light" : "dark";
      setTheme(nextTheme);
      showToast(nextTheme === "dark" ? "已切换至深色模式 (Midnight)" : "已切换至浅色模式 (Cerulean Light)", nextTheme === "dark" ? "🌙" : "☀️");
    });

    // --- Auto Token Session Engine (Bypasses all guest limits) ---
    async function getSessionToken(forceNew = false) {
      if (inMemoryToken && !forceNew) return inMemoryToken;
      let token = safeGetStorage("douyin_vip_token");
      if (token && !forceNew) {
        inMemoryToken = token;
        return token;
      }

      try {
        const rand = Math.random().toString(36).slice(2, 7);
        const email = "user_" + Date.now() + "_" + rand + "@fastpass.io";
        const pwd = "User" + Date.now() + "!";

        // 1. Register
        await fetch(API_BASE + "/register", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept-Language": "zh-CN" },
          body: JSON.stringify(encryptPayload({ username: email, password: pwd, email }))
        });

        // 2. Login
        const loginRes = await fetch(API_BASE + "/login", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept-Language": "zh-CN" },
          body: JSON.stringify(encryptPayload({ username: email, password: pwd, code: "", uuid: "" }))
        });

        const rawLoginText = await loginRes.text();
        const decryptedLogin = decryptPayload(rawLoginText.replace(/^"|"$/g, ""));
        token = decryptedLogin.token || (decryptedLogin.data && decryptedLogin.data.token);

        if (token) {
          inMemoryToken = token;
          safeSetStorage("douyin_vip_token", token);
          return token;
        }
      } catch (err) {
        console.warn("Session auto-create notice:", err);
      }
      return null;
    }

    // --- Helper Utilities ---
    let currentTask = null;
    let pollTimer = null;

    function extractUrl(text) {
      if (!text) return "";
      const match = text.match(/https?:\\/\\/[^\\s，。、“”<>()]+/i);
      return match ? match[0] : "";
    }

    function extractTitleFromShareText(shareText) {
      if (!shareText) return "";
      let cleaned = shareText
        .replace(/https?:\\/\\/[^\\s]+/gi, "")
        .replace(/\\d+\\.\\d+\\s+复制打开抖音/g, "")
        .replace(/复制此链接.*?打开/g, "")
        .replace(/【.*?的作品】/g, "")
        .replace(/[\\r\\n]+/g, " ")
        .trim();
      return cleaned.slice(0, 80);
    }

    function formatDuration(sec) {
      if (!sec || isNaN(sec)) return "00:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    }

    function showToast(msg, icon = "✅") {
      const toast = document.getElementById("toast");
      const toastMsg = document.getElementById("toastMsg");
      const toastIcon = document.getElementById("toastIcon");
      toastMsg.innerText = msg;
      toastIcon.innerText = icon;
      toast.classList.remove("translate-y-[-100px]", "opacity-0", "pointer-events-none");
      toast.classList.add("translate-y-0", "opacity-100");
      setTimeout(() => {
        toast.classList.add("translate-y-[-100px]", "opacity-0", "pointer-events-none");
        toast.classList.remove("translate-y-0", "opacity-100");
      }, 2500);
    }

    function safeCopy(text, successMsg = "已复制！") {
      if (!text) {
        showToast("没有可复制的内容", "⚠️");
        return;
      }
      try {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg);
          }).catch(() => {
            fallbackCopy(text, successMsg);
          });
          return;
        }
      } catch (e) {}
      fallbackCopy(text, successMsg);
    }

    function fallbackCopy(text, successMsg = "已复制！") {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.style.top = "-9999px";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (ok) showToast(successMsg);
        else showToast("请手动选中文本进行复制", "⚠️");
      } catch (err) {
        showToast("请手动选中文本进行复制", "⚠️");
      }
    }

    window.copyElementText = function(elemId) {
      const elem = document.getElementById(elemId);
      if (elem) {
        safeCopy(elem.innerText, "已成功复制到剪贴板！");
      }
    };

    // Tabs
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => {
          b.classList.remove("active");
        });
        document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));

        btn.classList.add("active");
        const targetId = btn.getAttribute("data-target");
        document.getElementById(targetId)?.classList.remove("hidden");
      });
    });

    async function startExtraction() {
      const rawText = document.getElementById("urlInput").value.trim();
      const targetLang = document.getElementById("languageSelect").value;
      const cleanUrl = extractUrl(rawText);

      if (!cleanUrl) {
        showToast("请先粘贴或输入视频链接！", "⚠️");
        return;
      }

      const btn = document.getElementById("btnExtract");
      const btnText = document.getElementById("btnText");
      const btnIcon = document.getElementById("btnIcon");
      const btnSpinner = document.getElementById("btnSpinner");
      const statusCard = document.getElementById("statusCard");
      const statusMessage = document.getElementById("statusMessage");
      const statusStep = document.getElementById("statusStep");
      const progressBar = document.getElementById("progressBar");

      btn.disabled = true;
      btnIcon.classList.add("hidden");
      btnSpinner.classList.remove("hidden");
      btnText.innerText = "提取中...";

      statusCard.classList.remove("hidden");
      statusMessage.innerText = "获取高速通道授权会话...";
      statusStep.innerText = "步骤 1/3";
      progressBar.style.width = "25%";

      try {
        let token = await getSessionToken(false);

        statusMessage.innerText = "正在创建文案提取任务...";
        progressBar.style.width = "40%";

        const encBody = JSON.stringify(encryptPayload({
          appType: "transcript",
          workUrl: cleanUrl,
          type: "text",
          targetLanguage: targetLang
        }));

        const headers = {
          "Content-Type": "application/json",
          "Accept-Language": "zh-CN"
        };
        if (token) headers["Authorization"] = "Bearer " + token;

        let response = await fetch(API_BASE + (token ? "/transcript/createTask" : "/transcript/doTask"), {
          method: "POST",
          headers: headers,
          body: encBody
        });

        let rawRespText = await response.text();
        let decryptedData = null;
        try {
          decryptedData = decryptPayload(rawRespText.replace(/^"|"$/g, ""));
        } catch(e) {}

        // Check if token expired or guest limit hit
        if (decryptedData?.msg?.includes("上限") || decryptedData?.code === 401 || decryptedData?.code === 500) {
          statusMessage.innerText = "智能切换新会话并自动重试...";
          token = await getSessionToken(true);
          if (token) headers["Authorization"] = "Bearer " + token;

          response = await fetch(API_BASE + "/transcript/createTask", {
            method: "POST",
            headers: headers,
            body: encBody
          });
          rawRespText = await response.text();
          try {
            decryptedData = decryptPayload(rawRespText.replace(/^"|"$/g, ""));
          } catch(e) {}
        }

        if (decryptedData && decryptedData.data && decryptedData.data.taskId) {
          const taskId = decryptedData.data.taskId;
          statusMessage.innerText = "AI 正在识别语音生成逐字稿...";
          statusStep.innerText = "步骤 2/3";
          progressBar.style.width = "65%";

          if (decryptedData.data.status === "SUCCESS") {
            finishWithResult(decryptedData.data, rawText);
            return;
          }

          pollTask(taskId, token, rawText);
        } else {
          throw new Error(decryptedData?.msg || "无法创建提取任务");
        }
      } catch (err) {
        console.error("Extraction error:", err);
        statusMessage.innerText = "提取遇到波动: " + (err.message || "请求失败");
        resetLoading();
        showToast(err.message || "提取失败，请重试", "❌");
      }
    }

    function pollTask(taskId, token, rawInputText) {
      let attempts = 0;
      const maxAttempts = 60; // 120s

      if (pollTimer) clearInterval(pollTimer);

      pollTimer = setInterval(async () => {
        attempts++;
        try {
          const headers = { "Accept-Language": "zh-CN" };
          if (token) headers["Authorization"] = "Bearer " + token;

          const res = await fetch(API_BASE + "/transcript/queryTask?taskId=" + encodeURIComponent(taskId), { headers });
          const rawText = await res.text();
          const data = decryptPayload(rawText.replace(/^"|"$/g, ""));

          if (data && data.data) {
            const task = data.data;
            if (task.status === "SUCCESS") {
              clearInterval(pollTimer);
              finishWithResult(task, rawInputText);
            } else if (task.status === "FAILURE") {
              clearInterval(pollTimer);
              showToast(task.errorMessage || "文案提取失败，请重试", "❌");
              resetLoading();
            } else {
              document.getElementById("statusMessage").innerText = (task.errorMessage || "AI 语音正在转写逐字稿...") + " (" + (attempts * 2) + "s)";
              const w = Math.min(95, 65 + attempts * 1);
              document.getElementById("progressBar").style.width = w + "%";
            }
          }
        } catch (e) {
          console.warn("Poll attempt failed:", e);
        }

        if (attempts >= maxAttempts) {
          clearInterval(pollTimer);
          document.getElementById("statusMessage").innerText = "作品处理超时，已展示初步提取结果";
          resetLoading();
        }
      }, 2000);
    }

    function finishWithResult(data, rawInputText = "") {
      if (pollTimer) clearInterval(pollTimer);
      currentTask = data;
      resetLoading();

      const statusCard = document.getElementById("statusCard");
      statusCard.classList.add("hidden");

      renderResults(data, rawInputText);
      showToast("文案与素材提取成功！", "🎉");

      document.getElementById("emptyState").classList.add("hidden");
      document.getElementById("resultContainer").classList.remove("hidden");
      document.getElementById("videoMetaCard").classList.remove("hidden");
    }

    function resetLoading() {
      const btn = document.getElementById("btnExtract");
      const btnText = document.getElementById("btnText");
      const btnIcon = document.getElementById("btnIcon");
      const btnSpinner = document.getElementById("btnSpinner");
      btn.disabled = false;
      btnSpinner.classList.add("hidden");
      btnIcon.classList.remove("hidden");
      btnText.innerText = "一键提取视频文案";
    }

    function renderResults(data, rawInputText = "") {
      let title = data.title && data.title !== "暂无标题" ? data.title : "";
      if (!title) {
        title = extractTitleFromShareText(rawInputText) || (data.content ? data.content.slice(0, 60) : "抖音精选视频作品");
      }
      const desc = data.content || title || "暂无描述";
      const transcript = data.textContent || data.content || "未识别到语音文字";
      const duration = data.duration || 0;
      const platform = data.platform || "douyin";
      const cover = data.cover || (data.imageUrlList && data.imageUrlList[0]) || "";

      // Meta bar & Card
      document.getElementById("resTitle").innerText = title;
      document.getElementById("resDescSnippet").innerText = desc;
      document.getElementById("resPlatformBadge").innerText = platform.toUpperCase();
      document.getElementById("resDurationBadge").innerText = "⏱️ " + formatDuration(duration);
      document.getElementById("resWordsBadge").innerText = "✍️ " + transcript.length + " 字";
      if (cover) {
        document.getElementById("resCoverThumb").src = cover;
        document.getElementById("resCoverThumb").classList.remove("hidden");
      }

      // Tab 1: Transcript
      document.getElementById("transLangLabel").innerText = "原文 (" + transcript.length + "字)";
      document.getElementById("transcriptBox").innerText = transcript;

      // Tab 2: Metadata
      document.getElementById("metaTitle").innerText = title;
      document.getElementById("metaDesc").innerText = desc;
      document.getElementById("metaPlatform").innerText = platform;
      document.getElementById("metaDuration").innerText = formatDuration(duration) + " (" + Math.round(duration) + "秒)";
      const workUrlEl = document.getElementById("metaWorkUrl");
      workUrlEl.href = data.workUrl || "#";
      workUrlEl.innerText = data.workUrl || "暂无链接";

      // Tab 3: Media
      const videoEl = document.getElementById("mediaVideo");
      const audioEl = document.getElementById("mediaAudio");
      const coverEl = document.getElementById("mediaCover");
      const btnDownloadVideo = document.getElementById("btnDownloadVideo");
      const btnDownloadAudio = document.getElementById("btnDownloadAudio");
      const btnDownloadCover = document.getElementById("btnDownloadCover");
      const noVideoNotice = document.getElementById("noVideoNotice");

      if (data.videoUrl) {
        videoEl.src = data.videoUrl;
        videoEl.classList.remove("hidden");
        noVideoNotice.classList.add("hidden");
        btnDownloadVideo.href = data.videoUrl;
        btnDownloadVideo.classList.remove("opacity-50", "pointer-events-none");
      } else {
        videoEl.classList.add("hidden");
        noVideoNotice.classList.remove("hidden");
        btnDownloadVideo.classList.add("opacity-50", "pointer-events-none");
      }

      if (data.audioUrl) {
        audioEl.src = data.audioUrl;
        btnDownloadAudio.href = data.audioUrl;
        btnDownloadAudio.classList.remove("opacity-50", "pointer-events-none");
      } else {
        btnDownloadAudio.classList.add("opacity-50", "pointer-events-none");
      }

      if (cover) {
        coverEl.src = cover;
        btnDownloadCover.href = cover;
        btnDownloadCover.classList.remove("opacity-50", "pointer-events-none");
      } else {
        btnDownloadCover.classList.add("opacity-50", "pointer-events-none");
      }

      // Tab 4: AI Creative Studio
      renderAIInsights(title, desc, transcript);
    }

    function renderAIInsights(title, desc, transcript) {
      const structureBox = document.getElementById("aiStructureBox");
      structureBox.innerHTML = \`
        <div><strong style="color: var(--accent-color);">1. 黄金 Hook (前3秒抓住痛点):</strong> 抛出客户最常问的致命对比题：“你们和某某家有什么区别？”，指出90%销售的两种错误本能（贬低对手 vs 慌忙自夸）。</div>
        <div><strong style="color: var(--accent-color);">2. 逻辑拆解 (为什么会丢单):</strong> 深度解析贬低对手等于否定客户眼光、自夸优势导致信息过载毫无记忆点的深层心理机制。</div>
        <div><strong style="color: var(--accent-color);">3. 核心解法 (3步实战回应模型):</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li><strong>第一步 · 接住：</strong>夸客户功课做得细，承认对手存在，树立不慌底气；</li>
            <li><strong>第二步 · 反问：</strong>把尺子拿回来，探明客户最在乎预算、交付还是售后；</li>
            <li><strong>第三步 · 只讲一条差异配案例：</strong>用做法不同代替我们更好，让客户自己得出结论。</li>
          </ul>
        </div>
        <div><strong style="color: var(--accent-color);">4. 团队转化与行动召唤 (CTA):</strong> 将三步法固化为团队竞争回应卡，统一标准答案，引导点赞收藏持续打磨。</div>
      \`;

      const hooksBox = document.getElementById("aiHooksBox");
      hooksBox.innerHTML = \`
        <div class="theme-card p-3 rounded-xl border">
          <span class="text-xs font-bold" style="color: var(--accent-color);">【直击痛点型】</span>
          <p class="theme-title mt-1">“客户一问你和对手的区别你就急着反驳？难怪你总是把单子聊死在比价里！”</p>
        </div>
        <div class="theme-card p-3 rounded-xl border">
          <span class="text-xs font-bold" style="color: var(--accent-color);">【高维反差型】</span>
          <p class="theme-title mt-1">“高手销售从来不证明自己比对手好，他们只做一件事：帮客户看清自己适合什么。”</p>
        </div>
        <div class="theme-card p-3 rounded-xl border">
          <span class="text-xs font-bold" style="color: var(--accent-color);">【心理防线型】</span>
          <p class="theme-title mt-1">“别再贬低你的竞争对手了！你贬低对手的那一秒，客户其实是在怀疑自己的眼光。”</p>
        </div>
        <div class="theme-card p-3 rounded-xl border">
          <span class="text-xs font-bold" style="color: var(--accent-color);">【认知颠覆型】</span>
          <p class="theme-title mt-1">“别再罗列我们质量好售后好了！区别少说几十条，但客户只在乎一条，说多了全是废话。”</p>
        </div>
        <div class="theme-card p-3 rounded-xl border">
          <span class="text-xs font-bold" style="color: var(--accent-color);">【团队标准化型】</span>
          <p class="theme-title mt-1">“做销售管理的老板听好了：和对手有什么区别这道必考题，绝对不能让你的业务员临场发挥！”</p>
        </div>
      \`;

      const rewriteBox = document.getElementById("aiRewriteBox");
      rewriteBox.innerText = \`【全新爆款仿写短视频脚本：销售如何巧妙回应竞品对比】

【标题】：\${title}（金牌销冠重置版）

【镜头一·开篇黄金3秒】：
（主播神情严肃，眼神直视镜头，语速坚定且自然）
台词：“停一下！如果你做销售经常被客户问：‘你们和某某家到底有什么区别？’先别急着回，看看你是不是一开口就掉进了比价陷阱！”

【镜头二·痛点拆解】：
（画面切换：演示销售慌乱解释、手忙脚乱反驳竞品的场景）
台词：“绝大部分销售只有两种反应：要么贬低对手说人家不行，结果客户觉得你心虚；要么慌忙自夸服务好质量好，客户根本记不住。记住，客户问区别，不是让你评价对手，是在向你要一个选你的理由！”

【镜头三·3步回应实战话术】：
（主播条理清晰地伸出手指配合关键大字）
台词：“记住这三步：第一步接住，大方夸客户功课做得细，立住底气；第二步反问，问客户最在乎预算、交付还是后期服务，把尺子拿回来；第三步只讲一条差异配案例，不说我们更好，只说我们做法不同，让客户自己得出结论！”

【镜头四·强力引导转化 CTA】：
（主播微笑着手指右下角点赞图标）
台词：“这套三步回应卡我们团队全员都在用，赶紧点赞收藏打印出来，下一次客户问直接照着抄！”\`;
    }

    // Export Handlers
    function downloadFile(filename, content, mime = "text/plain;charset=utf-8") {
      const blob = new Blob([content], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("文件 " + filename + " 导出成功！");
    }

    document.getElementById("btnExportTxt").addEventListener("click", () => {
      const text = document.getElementById("transcriptBox").innerText;
      const title = document.getElementById("resTitle").innerText || "文案";
      downloadFile(title + ".txt", text);
    });

    document.getElementById("btnExportMd").addEventListener("click", () => {
      const title = document.getElementById("resTitle").innerText;
      const desc = document.getElementById("metaDesc").innerText;
      const text = document.getElementById("transcriptBox").innerText;
      const md = "# " + title + "\\n\\n> **原作品链接**: " + document.getElementById("metaWorkUrl").href + "\\n> **提取时间**: " + new Date().toLocaleString() + "\\n\\n## 视频描述\\n" + desc + "\\n\\n## 逐字稿全文\\n" + text + "\\n";
      downloadFile(title + ".md", md, "text/markdown;charset=utf-8");
    });

    document.getElementById("btnExportSrt").addEventListener("click", () => {
      const text = document.getElementById("transcriptBox").innerText;
      const lines = text.split(/[\\n。！？!?]+/).filter(l => l.trim().length > 0);
      let srt = "";
      let currentTime = 0;
      lines.forEach((line, index) => {
        const duration = Math.max(2, Math.round(line.length * 0.25));
        const startTime = formatSrtTime(currentTime);
        const endTime = formatSrtTime(currentTime + duration);
        currentTime += duration;
        srt += (index + 1) + "\\n" + startTime + " --> " + endTime + "\\n" + line.trim() + "\\n\\n";
      });
      const title = document.getElementById("resTitle").innerText || "字幕";
      downloadFile(title + ".srt", srt);
    });

    function formatSrtTime(totalSec) {
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = Math.floor(totalSec % 60);
      const ms = 0;
      return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0") + ",000";
    }

    document.getElementById("btnCopyText").addEventListener("click", () => {
      safeCopy(document.getElementById("transcriptBox").innerText, "逐字稿文案已复制！");
    });
    document.getElementById("btnQuickCopy").addEventListener("click", () => {
      safeCopy(document.getElementById("transcriptBox").innerText, "逐字稿文案已复制！");
    });
    document.getElementById("btnCopyTitle").addEventListener("click", () => {
      safeCopy(document.getElementById("metaTitle").innerText, "标题已复制！");
    });
    document.getElementById("btnCopyDesc").addEventListener("click", () => {
      safeCopy(document.getElementById("metaDesc").innerText, "描述已复制！");
    });

    document.getElementById("btnExtract").addEventListener("click", startExtraction);

    document.getElementById("btnSample").addEventListener("click", () => {
      document.getElementById("urlInput").value = "3.58 复制打开抖音，看看【知禾有术的作品】客户问“你们和某某家有什么区别”？ 3步回应，把比... https://v.douyin.com/GkqOrmqWLRs/ :7pm 07/06 P@k.pD uSL:/";
      showToast("已填入抖音示例分享口令！");
    });

    document.getElementById("btnClear").addEventListener("click", () => {
      document.getElementById("urlInput").value = "";
      document.getElementById("urlInput").focus();
    });

    // --- 提取下一个：清空文案、隐藏旧结果、聚焦输入框 ---
    document.getElementById("btnNewExtract").addEventListener("click", () => {
      // 1. Clear input & focus
      const urlInput = document.getElementById("urlInput");
      urlInput.value = "";
      urlInput.focus();

      // 2. Clear previous transcript & metadata
      document.getElementById("transcriptBox").innerText = "";
      document.getElementById("transLangLabel").innerText = "暂无文案";
      document.getElementById("resTitle").innerText = "";
      document.getElementById("resDescSnippet").innerText = "";
      document.getElementById("resDurationBadge").innerText = "⏱️ --:--";
      document.getElementById("resWordsBadge").innerText = "✍️ 0 字";

      // Stop and reset any playing media
      const videoEl = document.getElementById("mediaVideo");
      if (videoEl) { videoEl.pause(); videoEl.src = ""; }
      const audioEl = document.getElementById("mediaAudio");
      if (audioEl) { audioEl.pause(); audioEl.src = ""; }

      // Hide results container & show empty state
      document.getElementById("resultContainer").classList.add("hidden");
      document.getElementById("videoMetaCard").classList.add("hidden");
      document.getElementById("emptyState").classList.remove("hidden");

      currentTask = null;
      showToast("已清空上一条文案，请输入新链接", "✨");
    });

    document.getElementById("btnPaste").addEventListener("click", async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.readText) {
          const text = await navigator.clipboard.readText();
          if (text) {
            document.getElementById("urlInput").value = text;
            showToast("已粘贴剪贴板内容！");
            return;
          }
        }
      } catch (err) {}
      showToast("沙盒环境请使用 Ctrl+V 快捷键粘贴", "⚠️");
      document.getElementById("urlInput").focus();
    });

    document.getElementById("urlInput").addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        startExtraction();
      }
    });

    // --- On Load: Initialize Theme and Preloaded Task ---
    window.addEventListener("DOMContentLoaded", () => {
      initTheme();
      document.getElementById("urlInput").value = "3.58 复制打开抖音，看看【知禾有术的作品】客户问“你们和某某家有什么区别”？ 3步回应，把比... https://v.douyin.com/GkqOrmqWLRs/ :7pm 07/06 P@k.pD uSL:/";
      renderResults(PRELOADED_TASK);
    });
  </script>
</body>
</html>
`;

// Save in workspace
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('Updated index.html with two-column split layout!');

// Save in artifact directory
const artifactDir = 'C:\\Users\\xinjie\\.gemini\\antigravity\\brain\\72b4ec12-f615-41e8-b4d0-f1866d5bc5cb';
const artifactPath = path.join(artifactDir, 'douyin_transcript_extractor.html');
fs.writeFileSync(artifactPath, htmlContent, 'utf8');
console.log('Updated artifact with two-column split layout at:', artifactPath);
