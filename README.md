[index(1).html](https://github.com/user-attachments/files/33598929/index.1.html)
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#EFE8DE">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F6F0E8'/%3E%3Cstop offset='1' stop-color='%23E08876'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='24' fill='url(%23g)'/%3E%3Cg stroke='%23fff' stroke-width='7' stroke-linecap='round'%3E%3Cpath d='M50 22v56M22 50h56M30 30l40 40M70 30L30 70' opacity='.8'/%3E%3C/g%3E%3C/svg%3E">
<title>ToLight 归光 · 工作台</title>
<style>
/* ============================================================
   ToLight 归光 · 桌面工作台  ——  iOS Edition
   排版：左侧 rail + 白卡画布 + 团队流程（与原版完全一致）
   材质：参考图浅蓝渐变 #FEFEFE → #B6D5F1 + 毛玻璃 + iOS 弹簧曲线
   ============================================================ */

/* ---------- 主题：dawn(默认) / amber / porcelain / dusk(夜间) ---------- */
:root,[data-theme="dawn"]{
  --bg:#E6DCD0;
  --bg-grad:linear-gradient(180deg,#FBF9F5 0%,#F5F1EA 30%,#EEE7DD 62%,#E6DCD0 100%);
  --canvas:rgba(255,253,249,.62); --canvas-solid:#FAF8F4;
  --rail:rgba(255,252,248,.36); --card:rgba(255,253,249,.72);
  --ink:#3E3730; --ink-2:#8C857C; --ink-3:#BDB6AC;
  --line:rgba(84,70,58,.11); --line-2:rgba(84,70,58,.06);
  --accent:#E08876; --accent-strong:#CF6B55; --accent-2:#F7E1DB;
  --chip:#F3EEE8; --glass:saturate(165%) blur(30px);
  --shadow:0 10px 30px rgba(130,104,84,.12); --shadow-lg:0 30px 70px rgba(130,104,84,.20);
  --hair:rgba(84,70,58,.10);
}
[data-theme="amber"]{
  --bg:#E3CFBA;
  --bg-grad:linear-gradient(180deg,#FBF4E9 0%,#F5E9D7 30%,#ECDCC4 62%,#E3CFBA 100%);
  --canvas:rgba(255,251,244,.62); --canvas-solid:#FBF7EF;
  --rail:rgba(255,251,243,.36); --card:rgba(255,251,244,.72);
  --ink:#453427; --ink-2:#907C68; --ink-3:#BFAC99;
  --line:rgba(96,70,46,.12); --line-2:rgba(96,70,46,.06);
  --accent:#D87A52; --accent-strong:#C45F38; --accent-2:#F6E1D0;
  --chip:#F4ECE1; --glass:saturate(168%) blur(30px);
  --shadow:0 10px 30px rgba(140,100,64,.14); --shadow-lg:0 30px 70px rgba(140,100,64,.22);
  --hair:rgba(96,70,46,.12);
}
[data-theme="porcelain"]{
  --bg:#F1EEE7;
  --bg-grad:linear-gradient(180deg,#FFFFFF 0%,#FAF7F2 32%,#F5F0E9 64%,#F1EAE0 100%);
  --canvas:rgba(255,255,255,.70); --canvas-solid:#FEFDFB;
  --rail:rgba(255,255,255,.46); --card:rgba(255,255,255,.82);
  --ink:#433C35; --ink-2:#8F877E; --ink-3:#BFB8AF;
  --line:rgba(84,72,60,.09); --line-2:rgba(84,72,60,.05);
  --accent:#E09A86; --accent-strong:#CE7E66; --accent-2:#F9E9E3;
  --chip:#F6F3EE; --glass:saturate(160%) blur(28px);
  --shadow:0 10px 30px rgba(120,100,84,.10); --shadow-lg:0 30px 70px rgba(120,100,84,.17);
  --hair:rgba(84,72,60,.09);
}
[data-theme="dusk"]{
  --bg:#241D18;
  --bg-grad:linear-gradient(180deg,#2E2620 0%,#292119 34%,#241D16 66%,#1E1712 100%);
  --canvas:rgba(255,250,243,.05); --canvas-solid:#2B231C;
  --rail:rgba(255,250,243,.03); --card:rgba(255,250,243,.07);
  --ink:#F2E9DF; --ink-2:#A99C8F; --ink-3:#6F6458;
  --line:rgba(255,244,232,.10); --line-2:rgba(255,244,232,.055);
  --accent:#E8A18B; --accent-strong:#DB866C; --accent-2:#4A352B;
  --chip:#332A22; --glass:saturate(175%) blur(34px);
  --shadow:0 10px 30px rgba(0,0,0,.30); --shadow-lg:0 30px 70px rgba(0,0,0,.45);
  --hair:rgba(255,244,232,.10);
}

[data-theme="aqua"]{
  --bg:#D7E7F7;
  --bg-grad:linear-gradient(180deg,#FEFEFE 0%,#F5F9FC 12%,#E8F1FA 26%,#D7E7F7 42%,#C8DDF2 58%,#BED8EF 74%,#B6D5F1 100%);
  --canvas:rgba(255,255,255,.58); --canvas-solid:#F7FBFF;
  --rail:rgba(255,255,255,.34); --card:rgba(255,255,255,.68);
  --ink:#0E2A44; --ink-2:#5A7794; --ink-3:#9DB2C7;
  --line:rgba(22,68,116,.10); --line-2:rgba(22,68,116,.055);
  --accent:#2C7FD0; --accent-strong:#1473E6; --accent-2:#D9EAF9;
  --chip:#EAF2FA; --glass:saturate(180%) blur(30px);
  --shadow:0 10px 30px rgba(31,84,140,.10); --shadow-lg:0 30px 70px rgba(31,84,140,.20);
  --hair:rgba(22,68,116,.10);
}
[data-theme="azure"]{
  --bg:#B9D9F4;
  --bg-grad:linear-gradient(180deg,#F8FBFF 0%,#EAF4FE 12%,#CFE6FA 26%,#A9CEF4 42%,#7FB4EA 58%,#5698DC 74%,#2E6DB8 100%);
  --canvas:rgba(255,255,255,.60); --canvas-solid:#F4F9FF;
  --rail:rgba(255,255,255,.36); --card:rgba(255,255,255,.74);
  --ink:#0B2740; --ink-2:#476C92; --ink-3:#8AA9C6;
  --line:rgba(20,68,120,.11); --line-2:rgba(20,68,120,.06);
  --accent:#2F7BD0; --accent-strong:#1A63B8; --accent-2:#D8EAFC;
  --chip:#E7F2FD; --glass:saturate(175%) blur(30px);
  --shadow:0 10px 30px rgba(28,80,150,.14); --shadow-lg:0 30px 70px rgba(28,80,150,.24);
  --hair:rgba(20,68,120,.11);
}

/* ---------- iOS 运动 ---------- */
:root{
  --spring:cubic-bezier(.32,.72,0,1);
  --ease:cubic-bezier(.4,0,.2,1);
  --r-app:32px; --r-card:26px; --r-ctl:18px;
}

*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{height:100%}
body{color:var(--ink);overflow:hidden;
 font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","SF Pro Display","PingFang SC","Helvetica Neue",sans-serif;
 display:flex;align-items:center;justify-content:center;padding:22px;
 transition:color .4s var(--ease)}
/* 参考图同款纵向渐变壁纸 */
body::before{content:'';position:fixed;inset:0;z-index:0;background:var(--bg-grad);
 transition:background .55s var(--ease)}

/* 角落柔光花瓣（保留原排版装饰） */
.fl{position:fixed;pointer-events:none;z-index:0;opacity:.7}
.fl svg{display:block}
.fl-1{top:-30px;left:-40px}.fl-2{bottom:-50px;left:-30px}
.fl-3{top:-46px;right:-40px}.fl-4{bottom:-46px;right:-30px}
.petal-f{fill:#fff;opacity:.62}
[data-theme="dusk"] .petal-f{fill:#E8CDB8;opacity:.18}

/* ---------- 画布：毛玻璃 ---------- */
.app{position:relative;z-index:1;width:100%;max-width:1420px;height:min(920px,calc(100vh - 44px));
 display:grid;grid-template-columns:272px 1fr;background:var(--canvas);border-radius:var(--r-app);
 box-shadow:var(--shadow-lg),inset 0 0 0 1px rgba(255,255,255,.55);
 backdrop-filter:var(--glass);-webkit-backdrop-filter:var(--glass);
 overflow:hidden;transition:background .45s var(--ease)}

/* ---------- 左侧导航 ---------- */
.rail{background:var(--rail);border-right:1px solid var(--line-2);padding:20px 16px 16px;
 display:flex;flex-direction:column;gap:6px;overflow-y:auto;overscroll-behavior:contain;
 -webkit-overflow-scrolling:touch;transition:background .45s var(--ease)}
.rail::-webkit-scrollbar{width:0}
/* 今日日签卡（侧栏顶部，参考日签设计：红日 + 大日期 + 竖排诗句） */
.signcard{position:relative;flex:none;margin-bottom:16px;background:var(--card);border-radius:22px;box-shadow:var(--shadow);
 padding:16px 18px 14px;overflow:hidden;transition:box-shadow .3s var(--ease)}
.signcard:hover{box-shadow:var(--shadow-lg)}
.sign-head{font-size:10.5px;letter-spacing:2.6px;color:var(--ink-3);text-transform:uppercase;margin-bottom:10px}
.sign-date{position:relative;display:flex;align-items:flex-start;justify-content:center;margin-bottom:4px}
.sign-date .sun{position:absolute;top:-2px;left:50%;transform:translateX(-58%);width:46px;height:46px;border-radius:50%;
 background:radial-gradient(circle at 35% 30%, #F2B9A6, var(--accent) 62%, var(--accent-strong));opacity:.92}
.sign-date .dnum{position:relative;z-index:1;font-size:42px;font-weight:700;letter-spacing:.5px;color:var(--ink);
 line-height:1;margin-top:14px;font-variant-numeric:tabular-nums}
.sign-lunar{text-align:center;font-size:12.5px;color:var(--ink-2);letter-spacing:2px;margin-top:8px}
.sign-greg{text-align:center;font-size:10px;color:var(--ink-3);letter-spacing:1.2px;margin-top:3px;font-variant-numeric:tabular-nums}
.sign-quote{writing-mode:vertical-rl;text-orientation:upright;margin:14px auto 12px;max-height:132px;
 font-size:13px;line-height:2;letter-spacing:3px;color:var(--ink-2);
 display:flex;gap:12px;overflow:hidden}
.sign-quote span{display:block}
/* 管理员模式下：日签诗句可点击编辑 */
.sign-edit{display:none;margin-left:7px;font-size:9px;letter-spacing:1.5px;color:var(--accent);cursor:pointer;text-transform:none}
body:not(.guest) .sign-edit{display:inline}
body:not(.guest) .sign-quote{cursor:pointer}
.sign-foot{display:flex;align-items:center;justify-content:space-between;margin-top:auto;
 font-size:10px;letter-spacing:1.6px;color:var(--ink-3)}
.sign-foot .heart{width:14px;height:14px;fill:var(--accent);stroke:none;opacity:.9}
[data-theme="dusk"] .sign-date .sun{opacity:.8}
.sect{font-size:9.5px;letter-spacing:2.4px;color:var(--ink-3);text-transform:uppercase;margin:14px 12px 8px}
.navitem{display:flex;align-items:center;gap:11px;padding:11px 12px;border-radius:14px;cursor:pointer;font-size:13.5px;
 color:var(--ink-2);border:none;background:none;width:100%;text-align:left;font-family:inherit;
 transition:background .22s var(--ease),color .22s var(--ease),transform .42s var(--spring),box-shadow .25s var(--ease)}
.navitem:hover{background:var(--chip);color:var(--ink)}
.navitem.on{background:var(--card);color:var(--ink);box-shadow:var(--shadow)}
.navitem svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex:none}
.navitem .r{margin-left:auto;font-size:10.5px;color:var(--ink-3);letter-spacing:.4px}
.navitem .cnt{margin-left:auto;font-size:10px;color:var(--ink-2);background:var(--chip);border-radius:8px;padding:2px 7px;
 transition:background .25s,color .25s}
.navitem.on .cnt{background:var(--accent-2);color:var(--accent)}

.card{background:var(--card);border-radius:22px;box-shadow:var(--shadow)}
.progCard{margin-top:auto;padding:16px;display:flex;align-items:center;gap:12px}
.progCard .bar{flex:1;height:3px;background:var(--chip);border-radius:2px;overflow:hidden}
.progCard .bar i{display:block;height:100%;width:38%;background:linear-gradient(90deg,var(--accent),var(--accent-strong));
 border-radius:2px;transition:width .7s var(--spring)}
.progCard .go{width:32px;height:32px;border-radius:50%;border:none;background:var(--chip);color:var(--ink);cursor:pointer;
 display:flex;align-items:center;justify-content:center;transition:transform .42s var(--spring),background .25s,color .25s}
.progCard .go:hover{background:var(--accent);color:#fff}
.progCard .t{font-size:12.5px}
.progCard .s{font-size:10.5px;color:var(--ink-3);margin-top:2px}
.me{display:flex;align-items:center;gap:11px;padding:12px 6px 2px;margin-top:10px;border-top:1px solid var(--line-2)}
.me .av{width:36px;height:36px;border-radius:50%;overflow:hidden;background:var(--chip);display:flex;align-items:center;justify-content:center;flex:none}
.me .av img{width:100%;height:100%;object-fit:cover}
.me .nm{font-size:13px;line-height:1.25}
.me .rl{font-size:10.5px;color:var(--ink-3)}
.me .dots{margin-left:auto;border:none;background:none;color:var(--ink-3);cursor:pointer;font-size:15px;letter-spacing:1px;
 border-radius:8px;padding:2px 6px;transition:background .22s,transform .42s var(--spring)}
.me .dots:hover{background:var(--chip)}

/* ---------- 主区 ---------- */
.main{display:flex;flex-direction:column;overflow:hidden;padding:26px 30px 0}
.topbar{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px;gap:16px;
 padding-bottom:14px;border-bottom:1px solid transparent;transition:border-color .3s var(--ease)}
.topbar.compact{border-color:var(--hair)}
.topbar h1{font-size:29px;font-weight:600;letter-spacing:.3px;transition:font-size .42s var(--spring),transform .42s var(--spring);
 transform-origin:left center}
.topbar.compact h1{font-size:23px}
.topbar .sub{font-size:12.5px;color:var(--ink-3);margin-top:6px;transition:opacity .3s}
.tools{display:flex;align-items:center;gap:10px;flex:none}
.dots{display:flex;gap:7px;background:var(--card);box-shadow:var(--shadow);padding:7px 10px;border-radius:16px;
 backdrop-filter:blur(12px)}
.dots button{width:16px;height:16px;border-radius:50%;border:none;cursor:pointer;
 transition:transform .42s var(--spring),box-shadow .25s;box-shadow:inset 0 0 0 1px rgba(0,0,0,.07)}
.dots button:hover{transform:scale(1.18)}
.dots button.on{box-shadow:0 0 0 2px var(--canvas-solid),0 0 0 3.5px var(--accent)}
/* 主题色点：仅管理员可见，且缩小弱化存在感（访客无权切换，故不显示） */
body.guest #themeDots{display:none}
#themeDots{padding:5px 7px;gap:5px;border-radius:12px}
#themeDots button{width:11px;height:11px}
#themeDots button.on{box-shadow:0 0 0 1.5px var(--canvas-solid),0 0 0 2.5px var(--accent)}
.tbtn{width:38px;height:38px;border-radius:50%;border:none;background:var(--card);box-shadow:var(--shadow);color:var(--ink);
 cursor:pointer;display:flex;align-items:center;justify-content:center;
 transition:transform .42s var(--spring),background .25s,color .25s;backdrop-filter:blur(12px)}
.tbtn svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.tbtn.off{color:var(--ink-3)}
.railbtn{display:none}

/* iOS 返回按钮：控制台（主页）隐藏，其余界面统一出现 */
.backbtn{display:none;align-items:center;gap:3px;border:none;background:none;color:var(--accent);
 font-family:inherit;font-size:13px;font-weight:500;letter-spacing:.2px;cursor:pointer;
 padding:5px 10px 5px 3px;margin:0 0 4px -3px;border-radius:10px;
 transition:opacity .22s var(--ease),transform .42s var(--spring),background .22s}
.backbtn.show{display:inline-flex}
.backbtn svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;
 margin-left:-5px}
.backbtn:hover{background:var(--chip)}
.backbtn:active{opacity:.55}
/* 手机端抽屉侧栏顶部的返回按钮：仅窄屏显示 */
.railback{display:none;margin:-4px 0 8px;padding:8px 10px;border-radius:12px;font-size:13px;
 color:var(--accent);background:var(--chip);width:fit-content}
@media(max-width:860px){.railback{display:inline-flex}}

.views{flex:1;overflow-y:auto;padding-bottom:70px;scroll-behavior:smooth;overscroll-behavior:contain;
 -webkit-overflow-scrolling:touch}
.views::-webkit-scrollbar{width:6px}
.views::-webkit-scrollbar-thumb{background:var(--line);border-radius:3px}
.view{display:none}
.view.on{display:block;animation:slidein .38s var(--spring)}
/* 视图与顶栏之间的呼吸间距（8pt 网格：24px） */
.view.on > .pane:first-child{margin-top:10px}
@keyframes slidein{from{transform:translateY(10px);opacity:.4}to{transform:translateY(0);opacity:1}}
/* iOS 错峰入场 */
.rise{opacity:0;transform:translateY(14px) scale(.985);animation:rise .55s var(--spring) forwards}
@keyframes rise{to{opacity:1;transform:none}}

/* 模块毛玻璃：saturate 提饱和 + 大半径 blur + 内侧 1px 高光描边（iOS frosted material） */
.stat,.list,.pane,.metric,.chart,.stat.frost,.list.frost,.pane.frost,.metric.frost,.chart.frost{
 backdrop-filter:var(--glass);-webkit-backdrop-filter:var(--glass);
 box-shadow:var(--shadow),inset 0 0 0 1px rgba(255,255,255,.55),inset 0 1px 0 rgba(255,255,255,.65)}
[data-theme="dusk"] .stat,[data-theme="dusk"] .list,[data-theme="dusk"] .pane,
[data-theme="dusk"] .metric,[data-theme="dusk"] .chart{
 box-shadow:var(--shadow),inset 0 0 0 1px rgba(255,244,232,.14),inset 0 1px 0 rgba(255,244,232,.10)}
.stat:hover,.metric:hover{box-shadow:var(--shadow-lg),inset 0 0 0 1px rgba(255,255,255,.55)}
/* 统计卡 */
.stats{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}
.stat{background:var(--card);border-radius:var(--r-card);padding:20px 22px;display:flex;gap:18px;align-items:center;
 position:relative;overflow:hidden;transition:transform .42s var(--spring),box-shadow .35s var(--ease)}
.stat:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
.thumb{width:56px;height:56px;border-radius:18px;flex:none;
 background:linear-gradient(140deg,#F6F0E8,#E6D5C4);position:relative;overflow:hidden}
.thumb::after{content:'';position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,.55),transparent 60%)}
.thumb.v2{background:linear-gradient(140deg,var(--accent-2),var(--accent))}
.thumb.v2 img{width:100%;height:100%;object-fit:cover;display:block}
.thumb svg{position:relative;z-index:1;width:100%;height:100%;padding:15px;box-sizing:border-box;color:rgba(255,255,255,.96)}
.thumb .rripple{display:none}
#introCard{cursor:pointer}
#introCard .thumb.v2{cursor:inherit}
body:not(.guest) .thumb.v2{transition:transform .42s var(--spring),box-shadow .3s var(--ease)}
body:not(.guest) .thumb.v2:hover{transform:scale(1.06);box-shadow:0 0 0 3px var(--canvas-solid),0 0 0 4.5px var(--accent)}
.thumb.v2.has::after{display:none}
/* 个人介绍页 */
.intro-img{width:100%;aspect-ratio:16/7;border-radius:18px;overflow:hidden;background:var(--chip);
 margin-bottom:22px;position:relative;transition:transform .42s var(--spring)}
.intro-img img{width:100%;height:100%;object-fit:cover;display:block}
.intro-img .ph{width:100%;height:100%;display:flex;align-items:center;justify-content:center;
 color:var(--ink-3);font-size:12px;letter-spacing:2px;background:linear-gradient(140deg,var(--chip),var(--accent-2))}
.intro-img .hint{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);font-size:11px;color:#fff;
 background:rgba(0,0,0,.45);padding:5px 12px;border-radius:12px;backdrop-filter:blur(8px);
 opacity:0;transition:opacity .3s;pointer-events:none}
body:not(.guest) .intro-img{cursor:pointer}
body:not(.guest) .intro-img:hover .hint{opacity:1}
body:not(.guest) .intro-img:hover{transform:scale(.995)}
.intro-img:hover .dim{position:absolute;inset:0}
/* 首页个人介绍卡片 · 水波纹点击动效（涟漪从落点扩散） */
#introCard .ripple{position:absolute;left:0;top:0;width:220%;height:150%;margin:auto;
 z-index:5;pointer-events:none;border-radius:50%;
 border:3px solid rgba(255,255,255,.98);
 box-shadow:0 0 0 2px rgba(25,45,80,.42), 0 2px 14px rgba(25,45,80,.3);
 opacity:0;transform:translate(-50%,-50%) scale(0);will-change:transform,opacity;
 animation:kairosRipple .5s cubic-bezier(.22,.61,.36,1) forwards}
#introCard .ripple.r2{border-color:rgba(255,255,255,.88);box-shadow:0 0 0 1.5px rgba(25,45,80,.3);animation-delay:.05s}
#introCard .ripple.r3{border-color:rgba(255,255,255,.65);box-shadow:none;animation-delay:.12s}
#introCard .ripple.soft{border-color:rgba(255,255,255,.42);box-shadow:none;animation-delay:.02s}
@keyframes kairosRipple{0%{transform:translate(-50%,-50%) scale(0);opacity:.92}
 100%{transform:translate(-50%,-50%) scale(1);opacity:0}}
/* 音乐区域：黑胶唱片质感 + 播放旋转 */
.thumb.music{background:
 repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,.07) 0 1.5px, rgba(0,0,0,.24) 1.5px 3px),
 radial-gradient(circle at 50% 50%, #404040 0 21%, #1C1C1C 22% 100%);
 cursor:pointer;transition:transform .42s var(--spring),box-shadow .3s var(--ease)}
.thumb.music::after{width:9px;height:9px;border-radius:50%;background:var(--accent);
 inset:auto;left:50%;top:50%;transform:translate(-50%,-50%)}
.thumb.music:hover{box-shadow:0 0 0 3px var(--canvas-solid),0 0 0 4.5px var(--accent)}
.thumb.music.playing{animation:disc-spin 5.2s linear infinite}
@keyframes disc-spin{to{transform:rotate(360deg)}}
.musicup{width:34px;height:34px;flex:none;margin-left:auto}
body.guest #musicUpBtn{display:none}
@media(prefers-reduced-motion:reduce){.thumb.music.playing{animation:none}}
/* ---------- 音乐播放器（iOS 液态玻璃） ---------- */
.musiccard{flex-direction:column;align-items:stretch;gap:0}
.musiccard .mc-top{display:flex;align-items:center;gap:14px;width:100%}
.musiccard .thumb.music{width:52px;height:52px;flex:none}
.musiccard .mc-top .num{font-size:22px}
.mc-play{margin-top:14px;padding-top:12px;border-top:1px solid var(--line-2)}
.mc-bar{position:relative;height:22px;cursor:pointer;touch-action:none}
.mc-fill{position:absolute;left:0;top:50%;transform:translateY(-50%);height:5px;border-radius:99px;
 background:linear-gradient(90deg,var(--accent-2),var(--accent));width:0;box-shadow:0 1px 4px rgba(0,0,0,.12)}
.mc-knob{position:absolute;top:50%;left:0;width:14px;height:14px;border-radius:50%;
 background:#fff;border:1.5px solid var(--accent);transform:translate(-50%,-50%);box-shadow:0 1px 4px rgba(0,0,0,.18)}
.mc-meta{display:flex;justify-content:space-between;font-size:11px;color:var(--ink-3);margin:2px 2px 8px}
.mc-ctl{display:flex;align-items:center;gap:10px}
.mc-btn{width:40px;height:40px;border-radius:50%;border:1px solid var(--line);background:var(--chip);
 color:var(--ink);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s var(--ease)}
.mc-btn:hover{background:var(--accent);color:#fff;border-color:transparent}
.mc-btn svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.mc-btn#mcPlayBtn svg{fill:currentColor;stroke:none}
.stat .lab{font-size:9.5px;letter-spacing:2.2px;color:var(--ink-3);text-transform:uppercase}
.stat .num{font-size:27px;font-weight:600;letter-spacing:.4px;margin-top:6px;display:flex;align-items:center;gap:8px;
 font-variant-numeric:tabular-nums;color:var(--ink-2)}
.stat .num .up{font-size:12px;color:#4E9A78;font-weight:500}
[data-theme="dusk"] .stat .num .up{color:#7FBF9B}

/* 区块标题 */
.blk{display:flex;align-items:center;justify-content:space-between;margin:26px 2px 12px}
.blk h3{font-size:14px;font-weight:600;letter-spacing:.3px}
.blk .more{font-size:11.5px;color:var(--ink-3);border:none;background:none;cursor:pointer;font-family:inherit;
 border-radius:8px;padding:3px 8px;transition:color .22s,background .22s,transform .42s var(--spring)}
.blk .more:hover{color:var(--accent);background:var(--chip)}
/* 最近内容列表下方的「查看排班表」：沿用 .more 原样式，靠右对齐 */
.recentMore{display:flex;justify-content:flex-end;margin:10px 2px 6px}
.recentMore .more{font-size:11.5px;color:var(--ink-3);border:none;background:none;cursor:pointer;font-family:inherit;
 border-radius:8px;padding:3px 8px;transition:color .22s,background .22s,transform .42s var(--spring)}
.recentMore .more:hover{color:var(--accent);background:var(--chip)}

/* 列表 */
.list{background:var(--card);border-radius:var(--r-card);padding:6px 18px}
.li{display:flex;align-items:center;gap:16px;padding:15px 4px;border-bottom:1px solid var(--line-2);cursor:pointer;
 position:relative;transition:background .24s var(--ease),transform .42s var(--spring)}
.li:last-child{border-bottom:none}
.li:hover{background:var(--chip);border-radius:18px}
.li .th{width:42px;height:42px;border-radius:14px;flex:none;
 background:linear-gradient(140deg,var(--chip),var(--accent-2));box-shadow:inset 0 0 0 1px var(--line-2)}
.li .tt{font-size:13.5px;flex:1;min-width:0}
.li .tt .d{font-size:11px;color:var(--ink-3);margin-top:4px;display:flex;gap:14px}
.li .go{width:30px;height:30px;border-radius:50%;border:1px solid var(--line);background:none;color:var(--ink-2);
 display:flex;align-items:center;justify-content:center;flex:none;transition:all .28s var(--ease)}
.li:hover .go{background:var(--accent);color:#fff;border-color:transparent}
.li .go svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
/* 最近内容 · 每项编辑键位（仅管理员） */
.li .edit{width:28px;height:28px;border-radius:50%;border:none;background:var(--chip);color:var(--ink-2);cursor:pointer;
 display:flex;align-items:center;justify-content:center;flex:none;margin-left:2px;transition:all .28s var(--ease)}
body.guest .li .edit{display:none}
.li:hover .edit{color:var(--accent);background:color-mix(in srgb,var(--accent) 12%, transparent)}
.li .edit svg{width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}

/* 模块编辑页 */
.mhead{display:flex;align-items:center;gap:14px;margin-bottom:14px}
.mhead h2{font-size:22px;font-weight:600}
.mhead .en{font-size:10.5px;letter-spacing:2.2px;color:var(--ink-3)}
.pane{background:var(--card);border-radius:24px;padding:24px 24px 22px;margin-bottom:20px;
 transition:transform .42s var(--spring)}
.plab{font-size:9.5px;letter-spacing:2.4px;color:var(--ink-3);text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px}
.plab::after{content:'';flex:1;height:1px;background:var(--line-2)}
.blkbar{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.blkbar .bbtn{border:1px solid var(--line-2);background:var(--chip);color:var(--ink-2);cursor:pointer;font-size:12px;font-family:inherit;letter-spacing:.4px;border-radius:16px;padding:7px 16px;transition:transform .22s,background .25s,color .25s,border-color .25s;display:inline-flex;align-items:center;gap:6px}
.blkbar .bbtn:hover{border-color:rgba(224,136,118,.45);background:rgba(224,136,118,.12);color:var(--accent);transform:translateY(-1px)}
.blkbar .bbtn:active{transform:scale(.96)}
.blkbar .bbtn.danger{color:var(--ink-3)}
.blkbar .bbtn.danger:hover{border-color:rgba(196,84,74,.45);background:rgba(196,84,74,.12);color:#c4544a}
.blkbar .bbtn:disabled{opacity:.35;cursor:not-allowed;transform:none;border-color:var(--line-2);background:var(--chip);color:var(--ink-3)}
body.guest .blkbar{display:none}
textarea.ed{width:100%;min-height:130px;border:none;outline:none;background:transparent;color:var(--ink);
 font-size:14.5px;line-height:1.9;font-family:inherit;resize:vertical}
.gal{display:grid;grid-template-columns:repeat(auto-fill,minmax(122px,1fr));gap:12px}
/* 图文分栏条目：每条 = 图片(可选) + 文字(可选) */
.block{border:1px solid var(--line);border-radius:18px;padding:14px;margin-bottom:12px;background:var(--chip);
 transition:transform .42s var(--spring),box-shadow .3s var(--ease)}
.block .bimg{width:100%;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:var(--card);
 margin-bottom:10px;position:relative;cursor:pointer}
.block .bimg img{width:100%;height:100%;object-fit:cover;display:block}
.block .bimg .ph{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--ink-3);
 font-size:11.5px;letter-spacing:1.5px;border:1px dashed var(--line);border-radius:14px}
.block .bimg .uptip{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);font-size:10.5px;color:#fff;
 background:rgba(0,0,0,.45);padding:4px 11px;border-radius:11px;backdrop-filter:blur(8px);opacity:0;transition:opacity .3s;pointer-events:none}
body:not(.guest) .block .bimg:hover .uptip{opacity:1}
.block .bbar{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}
.block .bbar .no{font-size:10px;letter-spacing:1.6px;color:var(--ink-3);text-transform:uppercase}
.block .bbar button{border:none;background:none;color:var(--ink-3);cursor:pointer;font-size:12.5px;padding:3px 8px;
 border-radius:9px;font-family:inherit;transition:background .2s,color .2s}
.block .bbar button:hover{background:rgba(224,136,118,.14);color:var(--accent)}
body.guest .block .bbar{display:none}
.block .btxt{width:100%;border:1px solid var(--line-2);background:var(--card);border-radius:14px;padding:11px 13px;
 font-size:13px;color:var(--ink);outline:none;font-family:inherit;resize:vertical;min-height:64px;transition:border-color .25s}
.block .btxt:focus{border-color:var(--accent);box-shadow:0 0 0 3.5px rgba(224,136,118,.14)}
.gal .it{position:relative;aspect-ratio:4/3;border-radius:16px;overflow:hidden;background:var(--chip)}
.gal .it img{width:100%;height:100%;object-fit:cover;user-drag:none;-webkit-user-drag:none}
.gal .it button{position:absolute;top:6px;right:6px;width:22px;height:22px;border-radius:50%;border:none;
 background:rgba(0,0,0,.42);color:#fff;font-size:13px;cursor:pointer;backdrop-filter:blur(6px);
 transition:transform .42s var(--spring),background .25s}
.gal .it button:hover{background:rgba(0,0,0,.62)}
.gal .add{aspect-ratio:4/3;border-radius:16px;border:1px dashed var(--line);background:none;color:var(--ink-3);
 font-size:22px;cursor:pointer;transition:transform .42s var(--spring),border-color .25s,color .25s}
.gal .add:hover{transform:scale(.97);border-color:var(--accent);color:var(--accent)}
.lk{display:flex;align-items:center;gap:12px;padding:13px 2px;border-bottom:1px solid var(--line-2)}
.lk .ic{width:30px;height:30px;border-radius:10px;background:var(--accent-2);color:var(--accent);display:flex;align-items:center;justify-content:center;flex:none}
.lk .ic svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:1.6}
.lk a{flex:1;color:var(--accent);text-decoration:none;font-size:13.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lk .x{border:none;background:none;color:var(--ink-3);cursor:pointer;font-size:15px;border-radius:8px;padding:0 7px;
 transition:background .22s,color .22s,transform .42s var(--spring)}
.lk .x:hover{background:var(--chip);color:var(--ink)}
.lkadd{display:flex;gap:10px;margin-top:14px}
.lkadd input{flex:1;border:1px solid var(--line-2);background:var(--chip);border-radius:14px;padding:12px 14px;font-size:13px;color:var(--ink);outline:none;font-family:inherit;
 transition:border-color .25s,box-shadow .25s,background .25s}
.lkadd input:focus{border-color:var(--accent);background:var(--card);box-shadow:0 0 0 3.5px rgba(224,136,118,.16)}
.btn{border:none;cursor:pointer;font-family:inherit;border-radius:14px;padding:12px 20px;font-size:13px;
 background:var(--accent);color:#fff;transition:transform .42s var(--spring),background .25s,opacity .2s}
.btn:hover{background:var(--accent-strong)}
/* 模块管理工具条：删除 / 新增模块 */
.modbar{display:none;align-items:center;gap:10px;margin:2px 0 16px;padding:12px 14px;border-radius:18px;
 background:var(--card);box-shadow:var(--shadow);flex-wrap:wrap}
.modbar.on{display:none}
.modbar-t{font-size:11px;letter-spacing:2px;color:var(--ink-3);text-transform:uppercase;margin-right:auto}
.modbar .btn{padding:9px 16px;font-size:12.5px}
.modbar .mod-del{background:rgba(200,70,60,.88)}
.modbar .mod-del:hover{background:rgba(180,55,48,1)}
.modbar .mod-add{background:var(--accent)}
.empty{font-size:12.5px;color:var(--ink-3);padding:8px 2px 12px}

/* 数据表现 */
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:22px}
.metric{background:var(--card);border-radius:22px;padding:18px;;
 transition:transform .42s var(--spring),box-shadow .35s var(--ease)}
.metric:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
.metric .l{font-size:10px;letter-spacing:1.8px;color:var(--ink-3);text-transform:uppercase}
.metric .v{font-size:23px;font-weight:600;margin-top:8px;font-variant-numeric:tabular-nums}
.metric .d{font-size:11px;color:var(--ink-3);margin-top:5px}
.chart{background:var(--card);border-radius:var(--r-card);padding:24px}
.bars{display:flex;align-items:flex-end;gap:14px;height:200px;margin-top:10px}
.bars .b{flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;align-items:center;height:100%;cursor:pointer;
 transition:transform .42s var(--spring)}
.bars .b i{width:100%;max-width:34px;background:var(--chip);border-radius:8px;
 transition:background .3s var(--ease),height .8s var(--spring)}
.bars .b:hover i{background:var(--accent)}
.bars .b.hi i{background:linear-gradient(180deg,var(--accent-strong),var(--accent))}
.bars .b span{font-size:10px;color:var(--ink-3)}

/* ================= iOS 交互层 ================= */
/* 按压：统一 APSL 弹簧回弹，比 :active 更跟手，键盘也生效 */
[data-press]{transition:transform .42s var(--spring),box-shadow .3s var(--ease),
 background .25s var(--ease),color .22s var(--ease),opacity .25s}
/* 只给静态流内元素加定位基准 */
.navitem,.stat,.metric,.tbtn,.btn,.gal .add{position:relative}
[data-press].is-press{transform:scale(.962)}
[data-press].is-press.navitem,[data-press].is-press.li{transform:scale(.978)}
[data-press]::after{content:'';position:absolute;inset:0;border-radius:inherit;background:currentColor;opacity:0;
 pointer-events:none;transition:opacity .42s var(--ease)}
[data-press].is-press::after{opacity:.055}

/* iOS 开关 */
.sw{position:relative;width:51px;height:31px;flex:none;display:inline-block}
.sw input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer;z-index:2}
.sw i{position:absolute;inset:0;background:rgba(120,140,160,.28);border-radius:31px;
 transition:background .32s var(--ease)}
.sw i::after{content:'';position:absolute;top:2px;left:2px;width:27px;height:27px;border-radius:50%;background:#fff;
 box-shadow:0 3px 8px rgba(0,0,0,.16);transition:transform .38s var(--spring)}
.sw input:checked+i{background:var(--accent-strong)}
.sw input:checked+i::after{transform:translateX(20px)}
/* 光明暗卡片 mini 开关 */
.sw.mini{width:44px;height:27px}
.sw.mini i{border-radius:27px}
.sw.mini i::after{width:23px;height:23px}
.sw.mini input:checked+i::after{transform:translateX(17px)}

/* iOS 底部抽屉 Sheet */
.sheet-mask{position:fixed;inset:0;z-index:60;background:rgba(20,16,10,.28);backdrop-filter:blur(3px);
 opacity:0;pointer-events:none;transition:opacity .38s var(--ease)}
.sheet-mask.on{opacity:1;pointer-events:auto}
.sheet{position:fixed;left:50%;bottom:0;z-index:61;width:min(520px,calc(100% - 32px));
 transform:translate(-50%,110%);background:var(--canvas-solid);
 border-radius:26px 26px 0 0;box-shadow:0 -20px 60px rgba(20,60,105,.24);
 padding:10px 18px calc(20px + env(safe-area-inset-bottom));
 transition:transform .48s var(--spring);touch-action:none;will-change:transform}
.sheet.on{transform:translate(-50%,0)}
.sheet-hd{padding:8px 4px 14px;cursor:grab}
.sheet-hd .grab{width:38px;height:5px;border-radius:3px;background:var(--ink-3);opacity:.55;margin:0 auto 12px}
.sheet-tt{font-size:15.5px;font-weight:600;text-align:center}
.sheet-sub{font-size:11.5px;color:var(--ink-3);text-align:center;margin-top:4px}
.grp{background:rgba(140,170,200,.12);border-radius:16px;overflow:hidden;margin-bottom:16px}
.act{display:flex;align-items:center;gap:12px;width:100%;padding:14px 16px;border:none;background:none;
 font-family:inherit;font-size:14px;color:var(--accent);cursor:pointer;text-align:left;
 border-bottom:1px solid rgba(120,150,180,.16);transition:background .2s var(--ease),opacity .2s}
.act:last-child{border-bottom:none}
.act .sub{margin-left:auto;font-size:12px;color:var(--ink-3)}
.act.br{color:#E0575B;font-weight:500}
.act:disabled{opacity:.45;cursor:default}

/* iOS Toast：顶部降落胶囊 */
#toast{position:fixed;left:50%;top:22px;z-index:99;display:flex;align-items:center;gap:8px;
 background:rgba(20,42,70,.82);color:#fff;font-size:12.5px;padding:11px 20px;border-radius:22px;
 backdrop-filter:blur(20px) saturate(180%);box-shadow:0 12px 34px rgba(15,45,80,.28);
 transform:translate(-50%,-24px) scale(.94);opacity:0;pointer-events:none;
 transition:transform .5s var(--spring),opacity .32s var(--ease)}
#toast.show{opacity:1;transform:translate(-50%,0) scale(1)}
#toast .tick{width:15px;height:15px;stroke:#7FE0B0;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}

input[type=file]{display:none}

/* ---------- 管理员 / 访客 ---------- */
.tbtn.pill{width:auto;min-width:70px;padding:0 14px;border-radius:20px;font-size:12px;font-weight:500;gap:6px;letter-spacing:.4px}
.tbtn.pill svg{width:13px;height:13px}
.tbtn.pill.on{color:var(--accent);box-shadow:var(--shadow),inset 0 0 0 1.5px var(--accent-2)}
body.guest .gal .add, body.guest .gal .it button, body.guest .lk .x, body.guest .lkadd{display:none}
body.guest textarea.ed{cursor:default}
.sheetin{width:100%;border:none;outline:none;background:transparent;font-size:16px;color:var(--ink);
 font-family:inherit;letter-spacing:2px;padding:2px 0}

/* ---------- 响应式：窄屏 rail 变抽屉（桌面排版不变） ---------- */
@media(max-width:1080px){
  .app{grid-template-columns:220px 1fr}
  .stats{grid-template-columns:1fr}
  .metrics{grid-template-columns:1fr 1fr}
}
@media(max-width:860px){
  body{padding:0}
  .app{border-radius:0;height:100vh;max-width:none;grid-template-columns:1fr}
  .rail{position:absolute;inset:0 60px 0 0;z-index:30;width:280px;background:var(--canvas-solid);
    box-shadow:var(--shadow-lg);transform:translateX(-102%);transition:transform .48s var(--spring)}
  .rail.open{transform:translateX(0)}
  /* iOS 式边缘拖拽：拖动中禁动画，松手后再恢复弹簧 */
  .rail.dragging{transition:none !important}
  /* 屏幕左边缘拖拽热区 + 关闭态手柄 */
  .edge-grab{position:fixed;left:0;top:0;bottom:0;width:18px;z-index:29;touch-action:none}
  .edge-grab .grip{position:absolute;left:3px;top:50%;width:4px;height:64px;border-radius:3px;
    background:rgba(120,120,130,.28);transform:translateY(-50%);opacity:0;transition:opacity .3s}
  .edge-grab:hover .grip{opacity:.9}
  .railbtn{display:flex;align-items:center;justify-content:center}
  .main{padding:18px 18px 0}
  /* 手机端顶栏：标题独占一行不挤压，工具胶囊换行 */
  .topbar{flex-wrap:wrap;gap:8px 10px;margin-bottom:16px;padding-bottom:12px}
  /* 手机端视图首屏额外呼吸间距 */
  .view.on > .pane:first-child, .view.on > .stats:first-child, .view.on > .metrics:first-child{margin-top:14px}
  .topbar>div:first-child{min-width:0;flex:1 1 46%}
  .topbar h1{font-size:23px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .topbar.compact h1{font-size:19px}
  .topbar .sub{font-size:11px;margin-top:4px}
  .tools{gap:8px}
  .dots{padding:6px 8px;gap:6px}
  .dots button{width:14px;height:14px}
  .tbtn{width:34px;height:34px}
}
@media(prefers-reduced-motion:reduce){
  *{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important}
  .rise{opacity:1;transform:none}
}
</style>
</head>
<body>

<div class="fl fl-1"><svg height="200" viewBox="0 0 100 100" width="200"><g class="petal-f"><ellipse cx="50" cy="20" rx="8" ry="20"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(72 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(144 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(216 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(288 50 50)"/></g></svg></div>
<div class="fl fl-2"><svg height="230" viewBox="0 0 100 100" width="230"><g class="petal-f"><ellipse cx="50" cy="20" rx="8" ry="20"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(72 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(144 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(216 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(288 50 50)"/></g></svg></div>
<div class="fl fl-3"><svg height="190" viewBox="0 0 100 100" width="190"><g class="petal-f"><ellipse cx="50" cy="20" rx="8" ry="20"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(72 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(144 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(216 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(288 50 50)"/></g></svg></div>
<div class="fl fl-4"><svg height="210" viewBox="0 0 100 100" width="210"><g class="petal-f"><ellipse cx="50" cy="20" rx="8" ry="20"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(72 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(144 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(216 50 50)"/><ellipse cx="50" cy="20" rx="8" ry="20" transform="rotate(288 50 50)"/></g></svg></div>

<div class="app" id="app">
  <div class="edge-grab" id="edgeGrab" aria-hidden="true"><div class="grip"></div></div>
  <!-- ================= 左侧导航 ================= -->
  <aside class="rail" id="rail">
    <button class="backbtn railback" id="railBack" title="关闭菜单"><svg viewBox="0 0 24 24"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg><span>返回</span></button>
    <div class="signcard" id="signCard">
      <div class="sign-head">Today's · 日签<span class="sign-edit" id="signEditHint">编辑</span></div>
      <div class="sign-date">
        <div class="sun"></div>
        <div class="dnum" id="signDay">14</div>
      </div>
      <div class="sign-lunar" id="signLunar">九月廿三</div>
      <div class="sign-greg" id="signGreg">2026/10/14</div>
      <div class="sign-quote" id="signQuote"></div>
      <div class="sign-foot">
        <span>归光 · ToLight</span>
        <svg class="heart" viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.7-9.5-9C1 8 3 5 6.2 5c2 0 3.6 1.1 4.5 2.6l1.3 2 1.3-2C14.2 6.1 15.8 5 17.8 5 21 5 23 8 21.5 11.5c-2 4.3-9.5 9-9.5 9z"/></svg>
      </div>
    </div>

    <div class="sect">快捷模式</div>
    <button class="navitem on" data-nav="dash">
      <svg viewBox="0 0 24 24"><path d="M4 10.5L12 4l8 6.5V20H4z"/><path d="M9.5 20v-5h5v5"/></svg>
      控制台<span class="r">⌘H</span>
    </button>
    <button class="navitem" data-nav="intro">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2"/></svg>
      个人介绍<span class="r">⌘P</span>
    </button>

    <div class="sect">内容模块</div>
    <div id="modnav"></div>

    <div class="card progCard">
      <div>
        <div class="t">光明暗</div>
        <div class="s" id="modeTxt">明亮模式</div>
      </div>
      <label class="sw mini" title="切换明 / 暗模式"><input type="checkbox" id="modeSw"><i></i></label>
    </div>

    <div class="me">
      <div class="av" id="meAv"></div>
      <div>
        <div class="nm" id="meName">银YIN</div>
        <div class="rl" id="meRole">UI Designer · 归光</div>
      </div>
      <button class="dots" id="meDots">•••</button>
    </div>
  </aside>

  <!-- ================= 主区 ================= -->
  <main class="main">
    <div class="topbar" id="topbar">
      <div>
        <button class="backbtn" id="backBtn" title="返回控制台 (Esc)"><svg viewBox="0 0 24 24"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg><span>返回</span></button>
        <h1 id="pageH1">归光 ToLight</h1>
        <div class="sub" id="pageSub">欢迎回来 · <span id="today"></span></div>
      </div>
      <div class="tools">
        <div class="dots" id="themeDots"></div>
        <button class="tbtn pill" id="roleBtn" title="身份与登录"></button>
        <button class="tbtn" id="soundBtn" title="提示音"></button>
        <button class="tbtn" id="avBtn" title="更换头像"></button>
        <button class="tbtn railbtn" id="railBtn" title="菜单"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      </div>
    </div>

    <div class="views" id="views">
      <!-- 控制台 -->
      <section class="view on" id="v-dash">
        <div class="stats">
          <div class="stat frost" id="introCard" title="查看个人介绍">
            <div class="thumb v2" id="introThumb"></div>
            <div><div class="lab">个人介绍</div><div class="num" id="introName"></div></div></div>
          <div class="stat frost musiccard" id="musicCard">
            <div class="mc-top">
              <div class="thumb music" id="musicThumb" title="音乐区域"></div>
              <div style="min-width:0;flex:1"><div class="lab">音乐区域</div><div class="num" id="musicName">未上传音乐</div></div>
              <button class="tbtn musicup" id="musicUpBtn" title="上传音乐"><svg viewBox="0 0 24 24"><path d="M12 15V5.5M12 15l4-2M12 15l-4-2"/><path d="M5 17.5h14"/></svg></button>
            </div>
            <div class="mc-play" id="mcPlay" style="display:none">
              <div class="mc-bar" id="mcBar"><div class="mc-fill" id="mcFill"></div><div class="mc-knob" id="mcKnob"></div></div>
              <div class="mc-meta"><span class="mc-time" id="mcCur">0:00</span><span class="mc-time" id="mcDur2">0:00</span></div>
              <div class="mc-ctl">
                <button class="mc-btn" id="mcPlayBtn" title="播放/暂停"><svg viewBox="0 0 24 24"><path d="M7 5v14l12-7z"/></svg></button>
                <button class="mc-btn" id="mcDel" title="删除音乐"><svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6"/></svg></button>
              </div>
            </div>
          </div>
        </div>

        <div class="blk"><h3>最近内容</h3></div>
        <div class="list" id="recentList"></div>
        <div class="recentMore"><button class="more" data-nav="schedule">查看排班表 →</button></div>
      </section>

      <!-- 个人介绍 -->
      <section class="view" id="v-intro">
        <div class="pane frost">
          <div class="intro-img" id="introImg"></div>
          <div class="mhead" style="margin-bottom:10px">
            <h2 id="introName2"></h2><span class="en">PROFILE · 个人档案</span>
          </div>
          <style>#introName2 .nm-e{cursor:default;transition:color .2s}
body:not(.guest) #introName2 .nm-e{cursor:pointer;border-bottom:1px dashed transparent}
body:not(.guest) #introName2 .nm-e:hover{color:var(--accent);border-bottom-color:var(--accent)}
#introName2 .nm-e:empty::after{content:'未命名'}
#introName2{display:flex;align-items:center;flex-wrap:wrap;gap:10px}
#introName2 .nm-edit{flex:none;display:inline-flex;align-items:center;border:1px solid var(--line-2);background:var(--chip);color:var(--ink-2);font-size:11px;font-family:inherit;letter-spacing:.4px;border-radius:12px;padding:5px 12px;cursor:pointer;transition:transform .22s,background .25s,color .25s,border-color .25s}
#introName2 .nm-edit:hover{border-color:rgba(224,136,118,.45);background:rgba(224,136,118,.12);color:var(--accent);transform:translateY(-1px)}
#introName2 .nm-edit:active{transform:scale(.96)}
body.guest #introName2 .nm-edit{display:none}</style>
                    <textarea class="ed" id="introText" style="min-height:150px" placeholder="在这里写下个人介绍…"></textarea>
        </div>
      </section>

      <!-- 模块编辑 -->
      <section class="view" id="v-mod">
        <div class="modbar" id="modBar">
          <span class="modbar-t">模块管理</span>
          <button class="btn mod-del" id="modDel">− 删除此模块</button>
          <button class="btn mod-add" id="modAdd">＋ 新增模块</button>
        </div>
        <div class="pane" id="blocksPane">
          <div class="plab">图文分栏 · 文字与图片可单独/一起上传</div>
          <div class="blkbar" id="blkbarBtns">
            <button class="bbtn" id="blockAdd" title="添加一个新分栏">＋ 添加分栏</button>
            <button class="bbtn danger" id="blockDelLast" title="删除最后一个分栏">− 删除分栏</button>
          </div>
          <div id="modBlocks"></div>
        </div>
        <div class="pane">
          <div class="plab">文字内容 · 即点即编</div>
          <textarea class="ed" id="modText" placeholder="在这里写下内容…"></textarea>
        </div>
        <div class="pane" id="galPane">
          <div class="plab">图片 · 点击 + 插入</div>
          <div class="gal" id="modGal"></div>
        </div>
        <div class="pane" id="modLinkPane">
          <div class="plab">链接 · 点击直达</div>
          <div id="modLinks"></div>
          <div class="lkadd">
            <input id="lkText" placeholder="链接名称">
            <input id="lkUrl" placeholder="https://…">
            <button class="btn" id="lkAdd">添加</button>
          </div>
        </div>
      </section>
    </div>
  </main>
</div>

<!-- iOS Sheet -->
<div class="sheet-mask" id="sheetMask"></div>
<div class="sheet" id="sheet" role="dialog" aria-modal="true">
  <div class="sheet-hd" id="sheetHd">
    <div class="grab"></div>
    <div class="sheet-tt" id="sheetTt"></div>
    <div class="sheet-sub" id="sheetSub"></div>
  </div>
  <div id="sheetBody"></div>
</div>

<div id="toast"></div>
<input accept="image/*" id="fileAvatar" type="file">
<input accept="image/*" id="fileImg" type="file">
<input accept="image/*" id="fileIntro" type="file">
<input accept="audio/*,.mp3,audio/mpeg" id="fileMusic" type="file">

<script>
/* ================= 模块与团队定义 ================= */
const SVG = {
  notice:'<circle cx="12" cy="12" r="8.5"/><path d="M12 8.2v.1M12 11.5v5"/>',
  reviews:'<path d="M4 6.5h16v10H9l-5 4z"/><path d="M8.5 10.5h7M8.5 13.5h4"/>',
  script:'<path d="M4 6.5h16v9H9l-5 4z"/><circle cx="9" cy="11" r=".9"/><circle cx="12" cy="11" r=".9"/><circle cx="15" cy="11" r=".9"/>',
  top:'<path d="M5 8.5h14M12 8.5v10M8 12.5h8M6.5 20h11"/><circle cx="12" cy="5" r="1.6"/>',
  naming:'<path d="M12 3.5l2.4 5.4 5.6.5-4.2 3.8 1.2 5.8L12 16.2 7 19l1.2-5.8L4 9.4l5.6-.5z"/>',
  schedule:'<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M3.5 10h17M8 3.5V6M16 3.5V6"/>',
  _new:'<circle cx="12" cy="12" r="8"/><path d="M12 8.5v7M8.5 12h7"/>'
};
let MODULES = [
  { key:'notice',   cn:'介绍须知', en:'NOTICE',   allowLink:false, text:'欢迎来到归光 ToLight。\n\n这里写下介绍与须知，文字随手即改，图片点击即可插入。' },
  { key:'reviews',  cn:'板评',     en:'REVIEWS',  allowLink:false, text:'板评内容区。' },
  { key:'script',   cn:'话术',     en:'SCRIPT',   allowLink:false, text:'话术内容区。' },
  { key:'top',      cn:'头牌',     en:'TOP',      allowLink:false, text:'头牌展示区。' },
  { key:'naming',   cn:'冠名',     en:'NAMING',   allowLink:false, text:'冠名展示区。' },
  { key:'schedule', cn:'排班表',   en:'SCHEDULE', allowLink:true,  text:'排班安排如下。' }
];
/* 同色系五套外观：暖米 ×4 + 渐变浅蓝 ×1 */
const THEMES = [
  { id:'dawn', c:'#EBD9CC' }, { id:'amber', c:'#E0B285' },
  { id:'porcelain', c:'#F1EEE7' }, { id:'aqua', c:'#9CC6ED' }, { id:'azure', c:'#5E9BE0' }, { id:'dusk', c:'#2E2620' }
];
const THEME_NAME = { dawn:'晨光', amber:'暖阳', porcelain:'米白', aqua:'晴海', azure:'澄蓝', dusk:'暮夜' };
/* ================= 状态 ================= */
const S = { view:'dash', theme:'dawn', soundOn:true, avatar:'', introImage:'', introText:'', music:{name:'',url:''}, quote:null, admin:false, railOpen:false,
  me:{name:'银YIN', role:'UI Designer · 归光'},
  pages: Object.fromEntries(MODULES.map(m=>[m.key, step(m)])) };
/* ===== 管理员会话：令牌由服务端签发，密码不在前端 ===== */
const LS_ADMIN = 'kairos_admin_session';
function getAdminToken(){ try{ return sessionStorage.getItem(LS_ADMIN) || ''; }catch(e){ return ''; } }
function isAdminSession(){ return !!getAdminToken(); }
function setAdminSession(token){ try{ token ? sessionStorage.setItem(LS_ADMIN, token) : sessionStorage.removeItem(LS_ADMIN); }catch(e){} }
/* ===== 服务端 API（tRPC over fetch，superjson 封装） ===== */
async function apiCall(proc, input, method){
  const url = '/api/trpc/site.' + proc + (method === 'GET' && input !== undefined ? '?input=' + encodeURIComponent(JSON.stringify({json: input})) : '');
  const res = await fetch(url, method === 'GET' ? undefined : {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ json: input })
  });
  const j = await res.json().catch(()=>null);
  if(!res.ok || !j || j.error){
    const msg = j && j.error && j.error.json && j.error.json.message ? j.error.json.message : '请求失败';
    throw new Error(msg);
  }
  return j.result.data.json;
}
/* 媒体地址解析：stor: 开头的为平台对象存储 key，经服务端实时签发 */
function MU(u){ return (u && u.indexOf('stor:') === 0) ? '/api/file/' + u.slice(5) : u; }
function step(m){ return { text:m.text, images:[], blocks:[], links:[] }; }
/* ===== IndexedDB：大体积媒体（音乐 MP3）持久化，避免 localStorage 容量溢出 ===== */
const IDB_NAME = 'kairos_media', IDB_STORE = 'media', IDB_KEY = 'music';
let _idb=null;
function idbOpen(){ return new Promise((res,rej)=>{
  if(_idb) return res(_idb);
  const rq = indexedDB.open(IDB_NAME, 1);
  rq.onupgradeneeded = ()=>{ const db=rq.result;
    if(!db.objectStoreNames.contains(IDB_STORE)) db.createObjectStore(IDB_STORE); };
  rq.onsuccess = ()=>{ _idb=rq.result; res(_idb); };
  rq.onerror = ()=>rej(rq.error);
}); }
async function idbSet(val){ try{ const db=await idbOpen();
  return await new Promise((res,rej)=>{ const tx=db.transaction(IDB_STORE,'readwrite');
    tx.objectStore(IDB_STORE).put(val, IDB_KEY); tx.oncomplete=()=>res(true); tx.onerror=()=>rej(tx.error); }); }
  catch(e){ return false; } }
async function idbGet(){ try{ const db=await idbOpen();
  return await new Promise((res,rej)=>{ const tx=db.transaction(IDB_STORE,'readonly');
    const rq=tx.objectStore(IDB_STORE).get(IDB_KEY); rq.onsuccess=()=>res(rq.result); rq.onerror=()=>rej(rq.error); }); }
  catch(e){ return null; } }
let RAW = {}, TODAY = '';
const $ = id => document.getElementById(id);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ================= iOS 反馈 ================= */
let AC=null;
function tone(f,d,g){ try{ AC=AC||new (window.AudioContext||window.webkitAudioContext)();
  const o=AC.createOscillator(),gg=AC.createGain(); o.frequency.value=f; o.type='sine';
  gg.gain.setValueAtTime(g,AC.currentTime); gg.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);
  o.connect(gg); gg.connect(AC.destination); o.start(); o.stop(AC.currentTime+d); }catch(e){} }
/* iOS Taptic Engine 风格触感（支持的设备才生效） */
function buzz(kind){ try{ if(!navigator.vibrate) return;
  navigator.vibrate(kind==='heavy'?[12]:kind==='select'?[4]:kind==='ok'?[8,40,8]:[7]); }catch(e){} }
const snd = k => { if(!S.soundOn) return;
  if(k==='tap') tone(1280,.045,.07); else if(k==='back') tone(680,.055,.07);
  else if(k==='tick') tone(1720,.028,.04); else if(k==='save'){ tone(880,.055,.07); setTimeout(()=>tone(1320,.08,.07),70);} };
/* 视觉 + 声音 + 触感 三合一 */
function tap(k){ snd(k); buzz(k==='save'?'ok':k==='back'?'heavy':'select'); }

/* ---------- 按压反馈（委托，动态内容同样生效） ---------- */
const PRESS = '.navitem,.stat,.metric,.li,.tbtn,.dots button,.btn,.gal .add,.gal .it button,.lk .x,.more,.bars .b,.progCard .go,.backbtn,#musicUpBtn,#meDots';
function clearPress(){ document.querySelectorAll('.is-press').forEach(e=>e.classList.remove('is-press')); }
document.addEventListener('pointerdown', e=>{
  const el = e.target.closest(PRESS); if(!el) return;
  el.setAttribute('data-press',''); el.classList.add('is-press'); buzz('select');
}, {passive:true});
['pointerup','pointercancel','pointerleave','blur'].forEach(ev=>
  window.addEventListener(ev, clearPress, {passive:true}));
document.addEventListener('keydown', e=>{
  if(e.key!=='Enter' && e.key!==' ') return;
  const el = document.activeElement && document.activeElement.closest(PRESS);
  if(!el) return;
  el.setAttribute('data-press',''); el.classList.add('is-press');
  setTimeout(()=>el.classList.remove('is-press'), 180);
});

/* ---------- iOS Sheet ---------- */
const sheet = $('sheet'), mask = $('sheetMask');
let dragging=false, startY=0, curY=0;
function openSheet({title, sub, groups}){
  $('sheetTt').textContent = title || '';
  $('sheetSub').textContent = sub || '';
  $('sheetBody').innerHTML = groups.map(g=>'<div class="grp">' + g.map(a=>{
    if(a.input) return `<div class="act" style="color:var(--ink)"><input type="${a.type||'password'}" id="${a.id}" class="sheetin" placeholder="${a.placeholder||''}" value="${String(a.value||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" autocapitalize="off"></div>`;
    if(a.switch) return `<label class="act" style="color:var(--ink)">${a.label}
        <span class="sw" style="margin-left:auto"><input type="checkbox" ${a.on?'checked':''} id="${a.id}"><i></i></span></label>`;
    return `<button class="act ${a.break?'br':''}" data-a="${a.id}" ${a.disabled?'disabled':''}>${a.label}<span class="sub">${a.sub||''}</span></button>`;
  }).join('') + '</div>').join('');
  $('sheetBody').querySelectorAll('button.act').forEach(b=>b.onclick = ()=>{
    const act = groups.flat().find(x=>x.id===b.dataset.a);
    closeSheet(); if(act && act.run) setTimeout(()=>act.run(), 120);
  });
  groups.flat().filter(a=>a.input).forEach(a=>{
    const el = $(a.id);
    if(el) el.addEventListener('keydown', e=>{ if(e.key==='Enter' && a.run) a.run(); });
  });
  groups.flat().filter(a=>a.switch).forEach(a=>{
    const el = $(a.id); if(el && el.onchange !== undefined) el.onchange = e=>{ buzz('select'); snd('tick'); a.run(e.target.checked); };
  });
  sheet.style.transform = ''; sheet.classList.add('on'); mask.classList.add('on'); buzz('select');
}
function closeSheet(){ sheet.classList.remove('on'); mask.classList.remove('on'); sheet.style.transform=''; }
mask.onclick = closeSheet;
/* 拖拽关闭 */
$('sheetHd').addEventListener('pointerdown', e=>{
  dragging=true; startY=e.clientY; curY=0; sheet.style.transition='none';
  sheet.setPointerCapture && sheet.setPointerCapture(e.pointerId);
});
window.addEventListener('pointermove', e=>{
  if(!dragging) return;
  curY = Math.max(0, e.clientY - startY);
  sheet.style.transform = `translate(-50%, ${curY}px)`;
});
window.addEventListener('pointerup', ()=>{
  if(!dragging) return; dragging=false;
  sheet.style.transition=''; sheet.style.transform='';
  if(curY > 110) closeSheet();
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && sheet.classList.contains('on')){ e.stopPropagation(); closeSheet(); } });

/* ---------- 长按动作表 ---------- */
let lp={timer:null, fired:false, x:0, y:0};
function bindLongPress(scope, handler){
  scope.querySelectorAll('[data-lp]').forEach(el=>{
    if(el.dataset.lpBound) return; el.dataset.lpBound='1';
    el.addEventListener('pointerdown', e=>{
      lp.fired=false; lp.x=e.clientY; lp.y=e.clientY;
      clearTimeout(lp.timer);
      lp.timer = setTimeout(()=>{ lp.fired=true; buzz('heavy'); handler(el); }, 480);
    });
    el.addEventListener('pointermove', e=>{ if(Math.abs(e.clientY-lp.y)>10) clearTimeout(lp.timer); });
    ['pointerup','pointercancel'].forEach(ev=>el.addEventListener(ev, ()=>clearTimeout(lp.timer)));
    el.addEventListener('click', e=>{ if(lp.fired){ e.preventDefault(); e.stopPropagation(); lp.fired=false; } }, true);
  });
}

/* ---------- 错峰入场 ---------- */
function riseIn(scope){
  if(REDUCED) return;
  const els = scope.querySelectorAll('.rise');
  els.forEach((el,i)=>{ el.style.animationDelay = (i*45)+'ms'; });
}
/* ---------- 数字滚动 ---------- */
function countUp(el){
  const tn = el.firstChild; if(!tn || tn.nodeType!==3) return;
  const raw = tn.nodeValue, m = raw.match(/^(\s*)([\d.,]+)(.*?)(\s*)$/);
  if(!m || REDUCED) return;
  const target = parseFloat(m[2].replace(/,/g,''));
  const decimals = (m[2].split('.')[1]||'').length;
  const comma = m[2].includes(',');
  const fmt = v => (comma||decimals ? v.toLocaleString('en-US',{minimumFractionDigits:decimals,maximumFractionDigits:decimals}) : Math.round(v).toString());
  const lead = m[1], mid = m[3], tail = m[4];
  const t0 = performance.now(), dur = 780;
  (function frame(now){
    const p = Math.min(1, (now-t0)/dur), e = 1 - Math.pow(1-p,3);
    tn.nodeValue = lead + fmt(target*e) + mid + tail;
    if(p<1) requestAnimationFrame(frame); else tn.nodeValue = lead + fmt(target) + mid + tail;
  })(t0);
}

/* ================= 后端同步（云端数据库，全站访客可见） ================= */
let tmr;
function buildBody(){
  const pages = Object.fromEntries(MODULES.map(m=>[m.key, { title:m.cn, text:S.pages[m.key].text,
    images:S.pages[m.key].images, blocks:S.pages[m.key].blocks||[], links:S.pages[m.key].links }]));
  // 前端未展示的历史模块（如已下线的排单表）原样保留，避免保存时被抹掉
  Object.keys(RAW.pages||{}).forEach(k=>{ if(!pages[k]) pages[k]=RAW.pages[k]; });
  return Object.assign({}, RAW, {
    theme:S.theme, avatar:S.avatar, introImage:S.introImage, introText:S.introText, music:S.music, quote:S.quote, sound:S.soundOn, version:'console',
    console:S.me, updatedAt:new Date().toISOString(), pages, mods: MODULES.map(m=>({key:m.key,cn:m.cn,en:m.en,allowLink:!!m.allowLink,text:m.text}))
  });
}
async function persist(){
  if(!S.admin){ toast('访客模式 · 仅管理员可编辑'); return false; }
  try{
    await apiCall('saveContent', { token:getAdminToken(), data:JSON.stringify(buildBody()) }, 'POST');
    return true;
  }catch(e){
    if(/仅管理员|UNAUTHORIZED/i.test(e.message||'')){ setAdminSession(''); S.admin=false; applyRole(); toast('登录已失效，请重新登录'); }
    else toast('保存失败：'+(e.message||'网络错误'));
    return false;
  }
}
function autoSave(msg){ clearTimeout(tmr); tmr=setTimeout(async ()=>{
  if(await persist()) toast(msg||'已自动保存 · 云端同步'); },700); }
/* multipart 直传：不转 base64，手机端大文件更省内存、更可靠 */
async function uploadFile(file){
  const fd = new FormData();
  fd.append('token', getAdminToken());
  fd.append('file', file, file.name || 'upload.bin');
  const ctrl = new AbortController();
  const timer = setTimeout(()=>ctrl.abort(), 180000); // 3 分钟超时
  let res;
  try{ res = await fetch('/api/upload', { method:'POST', body:fd, signal:ctrl.signal }); }
  catch(e){ clearTimeout(timer);
    throw new Error(e.name==='AbortError' ? '上传超时，请检查网络后重试' : '网络异常，上传中断'); }
  clearTimeout(timer);
  const j = await res.json().catch(()=>null);
  if(!res.ok || !j || !j.key) throw new Error((j && j.error) || ('上传失败（' + res.status + '）'));
  return 'stor:' + j.key;
}
async function uploadImage(file){
  if(file.size > 20*1024*1024){ toast('图片超过 20MB 上限'); return null; }
  try{ return await uploadFile(file); }catch(e){ toast(e.message); return null; }
}
async function boot(){
  S.admin = false;
  // 校验本地会话令牌是否仍然有效
  if(getAdminToken()){
    try{ S.admin = !!(await apiCall('check', { token:getAdminToken() }, 'GET')).admin; }catch(e){ S.admin = false; }
    if(!S.admin) setAdminSession('');
  }
  try{
    const res = await apiCall('getContent', undefined, 'GET');
    RAW = res && res.data ? JSON.parse(res.data) : {};
  }catch(e){ RAW = {}; }
  try{
    // 若有持久化的模块列表，用它重建 MODULES，并同步 S.pages
    if(Array.isArray(RAW.mods) && RAW.mods.length){
      const keys = RAW.mods.map(m=>m.key);
      // 移除被删的模块页
      Object.keys(S.pages).forEach(k=>{ if(!keys.includes(k)) delete S.pages[k]; });
      MODULES.length = 0;
      RAW.mods.forEach(m=>{
        MODULES.push({ key:m.key, cn:m.cn, en:m.en||m.cn.toUpperCase().slice(0,8), allowLink:!!m.allowLink, text:m.text||(m.cn+'内容区。') });
        if(!S.pages[m.key]) S.pages[m.key] = step({});
      });
    }
    if(RAW.theme && THEMES.some(t=>t.id===RAW.theme)) S.theme = RAW.theme;
    // 话术为核心模块，误删后自动恢复（含默认内容与页面）
    if(!MODULES.some(m=>m.key==='script')){
      MODULES.push({ key:'script', cn:'话术', en:'SCRIPT', allowLink:false, text:'话术内容区。' });
      if(!S.pages['script']) S.pages['script'] = step({});
    }
    if(RAW.avatar) S.avatar = RAW.avatar;
    if(typeof RAW.sound === 'boolean') S.soundOn = RAW.sound;
    if(RAW.introImage) S.introImage = RAW.introImage;
    if(typeof RAW.introText === 'string') S.introText = RAW.introText;
    if(RAW.music && RAW.music.url) S.music = {name:RAW.music.name||'', url:RAW.music.url};
    if(RAW.console && RAW.console.name) S.me = RAW.console;
    // 管理员自定义日签文案（null = 使用每日轮换诗句）
    if(Array.isArray(RAW.quote) && RAW.quote.length) S.quote = RAW.quote.filter(x=>typeof x==='string');
    MODULES.forEach(m=>{
      const d=(RAW.pages||{})[m.key] || (RAW.pages||{})[m.key==='reviews'?'review':m.key];
      if(!d) return;
      if(typeof d.text==='string' && d.text) S.pages[m.key].text = d.text;
      if(Array.isArray(d.images)) S.pages[m.key].images = d.images;
      if(Array.isArray(d.blocks)) S.pages[m.key].blocks = d.blocks;
      if(Array.isArray(d.links))  S.pages[m.key].links  = d.links;
    });
    const q = new URLSearchParams(location.search);
    if(q.get('theme') && THEMES.some(t=>t.id===q.get('theme'))) S.theme = q.get('theme');
    if(q.get('view')) S.view = q.get('view');
  }catch(e){}
}

/* ================= 渲染 ================= */
function renderThemeDots(){
  $('themeDots').innerHTML = THEMES.map(t=>
    `<button data-t="${t.id}" class="${t.id===S.theme?'on':''}" style="background:${t.c}" title="${THEME_NAME[t.id]}"></button>`).join('');
  $('themeDots').querySelectorAll('button').forEach(b=>{
    b.onclick = ()=>{ tap('tap');
      if(!S.admin) return toast('登录管理员后可切换外观');
      S.theme=b.dataset.t; applyTheme(); renderThemeDots();
      persist(); toast('已切换外观 · '+THEME_NAME[b.dataset.t]); };
  });
}
function applyTheme(){ document.documentElement.dataset.theme = S.theme;
  const meta = document.querySelector('meta[name=theme-color]');
  if(meta) meta.setAttribute('content', S.theme==='dusk' ? '#241D18' : '#EFE8DE'); }
function renderModNav(){
  $('modnav').innerHTML = MODULES.map(m=>
    `<button class="navitem" data-nav="${m.key}" data-lp="${m.key}">
      <svg viewBox="0 0 24 24">${SVG[m.key]}</svg>${m.cn}<span class="cnt">${S.pages[m.key].images.length + S.pages[m.key].links.length}</span></button>`).join('');
  bindNav();
  bindLongPress($('modnav'), moduleActions);
}
function renderRecent(){
  // 「最近内容」展示前 4 个模块，顺序与侧栏一致；管理员长按模块可调整顺序
  const list = MODULES.slice(0,4);
  $('recentList').innerHTML = list.map(m=>{
    const p=S.pages[m.key], n=p.images.length, l=p.links.length;
    const thStyle = p.images[0] ? ` style="background-image:url('${MU(p.images[0])}');background-size:cover;background-position:center"` : '';
    return `<div class="li rise" data-nav="${m.key}" data-lp="${m.key}">
      <div class="th"${thStyle}></div>
      <div class="tt">${m.cn} <span style="color:var(--ink-3);font-size:11px">${m.en}</span>
        <div class="d">${S.admin?`<span>◷ ${String(8+m.cn.length%9).padStart(2,'0')}:${String(10+m.cn.length*7%50).padStart(2,'0')}</span>`:''}
        <span>▣ ${n} 张图</span>${l?`<span>⤴ ${l} 条链接</span>`:''}</div></div>
      ${S.admin?'<button class="edit" title="编辑此分区"><svg viewBox="0 0 24 24"><path d="M14.5 6.5l3 3M5 19l1-3.5L15.5 6a1.8 1.8 0 0 1 2.6 0l.9.9a1.8 1.8 0 0 1 0 2.6L9.5 18.5 6 19z"/></svg></button>':''}
      <button class="go"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M15 7h2v2"/></svg></button>
    </div>`;
  }).join('');
  $('recentList').querySelectorAll('.li').forEach(el=>el.onclick = ()=>nav(el.dataset.nav));
  $('recentList').querySelectorAll('.edit').forEach(el=>{
    el.onclick = e=>{ e.stopPropagation(); tap('tap');
      const k = el.closest('.li').dataset.nav; nav(k);
      setTimeout(()=>{ const mt=$('modText'); if(mt) mt.focus(); }, 380); };
  });
  bindLongPress($('recentList'), moduleActions);
  riseIn($('recentList'));
}
function moduleActions(el){
  const m = MODULES.find(x=>x.key===el.dataset.lp); if(!m) return;
  const p = S.pages[m.key];
  if(!S.admin){
    openSheet({ title:m.cn, sub:m.en + ' · ' + p.images.length + ' 张图 / ' + p.links.length + ' 条链接',
      groups:[[
        { id:'open', label:'打开模块（只读）', run:()=>nav(m.key) },
        { id:'login', label:'管理员登录', run:openLoginSheet }
      ]]});
    return;
  }
  const idx = MODULES.findIndex(x=>x.key===m.key);
  openSheet({ title:m.cn, sub:m.en + ' · ' + p.images.length + ' 张图 / ' + p.links.length + ' 条链接',
    groups:[[
      { id:'open', label:'打开模块', run:()=>nav(m.key) },
      { id:'edit', label:'编辑文字', run:()=>{ nav(m.key); setTimeout(()=>$('modText').focus(), 380); } }
    ],[
      { id:'rename', label:'重命名 / 英文备注', run:()=>editModuleMeta(m) },
      { id:'up', label:'上移', sub:'调整显示顺序', disabled:idx<=0, run:()=>moveModule(m.key,-1) },
      { id:'down', label:'下移', sub:'调整显示顺序', disabled:idx>=MODULES.length-1, run:()=>moveModule(m.key,1) }
    ],[
      { id:'reset', label:'恢复默认内容', break:true, run:()=>{
          p.text = m.text; if(S.view===m.key) $('modText').value = p.text;
          tap('back'); autoSave('已恢复默认内容'); } }
    ]]});
}
/* 管理员重命名模块：中文名 + 英文备注，保存后全站同步 */
function editModuleMeta(m){
  const submit = ()=>{
    const cn = $('mmCN') ? $('mmCN').value.trim() : '';
    const en = $('mmEN') ? $('mmEN').value.trim() : '';
    if(!cn) return toast('请填写模块名称');
    closeSheet();
    setTimeout(async ()=>{
      m.cn = cn; if(en) m.en = en;
      renderModNav(); renderRecent(); if(S.view===m.key){ renderModule(m.key); $('pageH1').textContent = cn; $('pageSub').textContent = m.en + ' · 内容模块'; }
      await persist(); tap('save'); toast('模块名称已更新 · 云端同步');
    }, 130);
  };
  openSheet({ title:'重命名模块', sub:m.cn + ' · ' + m.en,
    groups:[[
      { id:'mmCN', input:true, type:'text', value:m.cn, placeholder:'模块名称（中文）', run:submit },
      { id:'mmEN', input:true, type:'text', value:m.en, placeholder:'英文备注（如 NOTICE，可留空不改）', run:submit },
      { id:'ok', label:'保存', run:submit }
    ]]});
  setTimeout(()=>{ const el=$('mmCN'); if(el){ el.focus(); if(el.select) try{el.select();}catch(e){} } }, 520);
}
/* 管理员调整模块顺序：上移 / 下移，保存后全站同步 */
function moveModule(key, dir){
  const i = MODULES.findIndex(x=>x.key===key); if(i<0) return;
  const j = i + dir; if(j<0 || j>=MODULES.length) return;
  const it = MODULES.splice(i,1)[0]; MODULES.splice(j,0,it);
  renderModNav(); renderRecent(); tap('tap'); autoSave('模块顺序已调整 · 云端同步');
}
const esc = t => String(t).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function renderIntro(){
  const t = $('introThumb');
  t.innerHTML = S.introImage ? `<img src="${MU(S.introImage)}" alt="个人介绍配图">` : '';
  t.classList.toggle('has', !!S.introImage);
  t.title = S.admin ? '个人介绍配图 · 点击更换' : '个人介绍配图';
  const nm = $('introName');
  nm.innerHTML = `<span class="nm-e">${esc(S.me.name)}</span> <span class="up rl-e">${esc(S.me.role)}</span>${S.admin ? '<button class="nm-edit" id="introNameEdit2" title="编辑名字">编辑</button>' : ''}`;
  nm.title = S.admin ? '点击编辑名字 / 签名' : '';
  if(S.admin){
    nm.querySelector('.nm-e').onclick = e=>{ e.stopPropagation(); tap('tap');
      askText({ title:'修改名字', value:S.me.name, onOk:v=>{ S.me.name=v; if($('meName')) $('meName').textContent=v;
        renderIntro(); if(S.view==='intro') renderIntroPage(); persist(); toast('名字已更新'); } }); };
    const eb=$('introNameEdit2');
    if(eb) eb.onclick = e=>{ e.stopPropagation(); tap('tap');
      askText({ title:'修改名字', value:S.me.name, onOk:v=>{ S.me.name=v; if($('meName')) $('meName').textContent=v;
        renderIntro(); if(S.view==='intro') renderIntroPage(); persist(); toast('名字已更新'); } }); };
    nm.querySelector('.rl-e').onclick = e=>{ e.stopPropagation(); tap('tap');
      askText({ title:'修改签名', value:S.me.role, onOk:v=>{ S.me.role=v; if($('meRole')) $('meRole').textContent=v;
        renderIntro(); if(S.view==='intro') renderIntroPage(); persist(); toast('签名已更新'); } }); };
  } else {
    const n0=nm.querySelector('.nm-e'), n1=nm.querySelector('.rl-e');
    if(n0) n0.onclick=null; if(n1) n1.onclick=null;
  }
}
var audio=null;
function fmtTime(sec){ if(!isFinite(sec)||sec<=0) return '';
  const m=Math.floor(sec/60), ss=Math.floor(sec%60); return m+':'+String(ss).padStart(2,'0'); }
function renderMusic(){
  const t=$('musicThumb'), has=!!S.music.url;
  t.classList.toggle('has', has);
  t.title = has ? (audio && !audio.paused ? '暂停' : '播放') : '音乐区域 · 尚未上传';
  const mn = $('musicName');
  mn.innerHTML = has
    ? `<span class="music-e">${esc(S.music.name || '未命名曲目')}</span> <span class="up" id="musicDur"></span>`
    : (S.admin ? '点击 ⇪ 上传第一首歌' : '管理员尚未上传音乐');
  const mc=$('mcPlay');
  if(mc) mc.style.display = has ? 'block' : 'none';
  if(has && audio && isFinite(audio.duration)){
    if($('musicDur')) $('musicDur').textContent = '⏱ ' + fmtTime(audio.duration);
    if($('mcDur2')) $('mcDur2').textContent = fmtTime(audio.duration);
    if(!audio.paused) updateProgress();
  }
  const me = mn.querySelector('.music-e');
  if(me){
    mn.title = S.admin ? '点击编辑音乐名称' : '登录管理员后可修改音乐名';
    me.onclick = e=>{ e.stopPropagation(); tap('tap');
      if(!S.admin) return toast('登录管理员后可修改音乐名');
      askText({ title:'修改音乐名称', value:S.music.name||'', onOk:v=>{ S.music.name=v; renderMusic(); persist(); toast('音乐名称已更新'); } }); };
  }
  const pb=$('mcPlayBtn');
  if(pb){ pb.innerHTML = (audio && !audio.paused)
    ? '<svg viewBox="0 0 24 24"><path d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>'
    : '<svg viewBox="0 0 24 24"><path d="M7 5v14l12-7z"/></svg>'; }
}
function updateProgress(){
  if(!audio) return;
  const cur=audio.currentTime||0, dur=audio.duration||0, p=dur?Math.min(100,cur/dur*100):0;
  const f=$('mcFill'), k=$('mcKnob');
  if(f) f.style.width = p+'%';
  if(k) k.style.left = p+'%';
  if($('mcCur')) $('mcCur').textContent = fmtTime(cur);
  if($('mcDur2')) $('mcDur2').textContent = fmtTime(dur);
}
async function toggleMusic(){
  if(!S.music.url) return toast(S.admin ? '请先上传音乐' : '管理员尚未上传音乐');
  const realUrl = S.music.url === 'idb:music' ? (await idbGet()) || S.music.url : MU(S.music.url);
  if(!audio || audio._src !== realUrl){
    audio = new Audio(realUrl); audio._src = realUrl;
    audio.addEventListener('loadedmetadata', renderMusic);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', ()=>{ $('musicThumb').classList.remove('playing'); renderMusic(); });
  }
  if(audio.paused){ await audio.play().catch(err=>{ console.error('PLAY_FAIL', err && (err.name+': '+err.message)); toast('播放失败，请重试'); });
    $('musicThumb').classList.add('playing'); tap('tick'); }
  else { audio.pause(); $('musicThumb').classList.remove('playing'); tap('back'); }
  renderMusic();
}
async function uploadAudio(file){
  if(file.size > 25*1024*1024){ toast('音乐超过 25MB 上限'); return null; }
  try{ return await uploadFile(file); }catch(e){ toast(e.message); return null; }
}
function renderIntroPage(){
  const img = $('introImg');
  img.innerHTML = (S.introImage
      ? `<img src="${MU(S.introImage)}" alt="个人介绍配图">`
      : `<div class="ph">个人介绍配图</div>`)
    + (S.admin ? `<span class="hint">点击更换配图</span>` : '');
  $('introName2').innerHTML = `<span class="nm-e">${esc(S.me.name || '')}</span>${S.admin ? '<button class="nm-edit" id="introNameEdit" title="编辑名字">编辑</button>' : ''}`;
  const nm2=$('introName2').querySelector('.nm-e');
  if(nm2){
    nm2.title = S.admin ? '点击编辑名字' : '登录管理员后可修改名字';
    nm2.onclick = e=>{ e.stopPropagation(); tap('tap');
      if(!S.admin) return toast('登录管理员后可修改名字');
      askText({ title:'修改名字', value:S.me.name||'', onOk:v=>{ S.me.name=v; renderAvatar(); renderIntro(); renderIntroPage(); persist(); toast('名字已更新'); } }); };
  }
  const editBtn=$('introNameEdit');
  if(editBtn) editBtn.onclick = e=>{ e.stopPropagation(); tap('tap');
    askText({ title:'修改名字', value:S.me.name||'', onOk:v=>{ S.me.name=v; renderAvatar(); renderIntro(); renderIntroPage(); persist(); toast('名字已更新'); } }); };
  const ta = $('introText');
  ta.value = S.introText || '';
  ta.readOnly = !S.admin;
  ta.placeholder = S.admin ? '在这里写下个人介绍…' : '管理员尚未填写介绍';
  ta.oninput = S.admin ? ()=>{ S.introText = ta.value; autoSave(); } : null;
}
function renderAvatar(){
  $('meAv').innerHTML = S.avatar ? `<img src="${MU(S.avatar)}" alt="">`
    : `<svg viewBox="0 0 64 64" style="width:100%;height:100%"><g stroke="var(--ink-2)" fill="none" stroke-width="1.6"><circle cx="32" cy="24" r="11"/><path d="M12 60c2-12 10-18 20-18s18 6 20 18"/></g></svg>`;
  $('avBtn').innerHTML = S.avatar ? `<img src="${MU(S.avatar)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover" alt="">`
    : `<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2"/></svg>`;
  const mn=$('meName'), mr=$('meRole');
  if(mn) mn.textContent = S.me.name;
  if(mr) mr.textContent = S.me.role;
}
function renderSound(){ $('soundBtn').classList.toggle('off', !S.soundOn);
  $('soundBtn').innerHTML = `<svg viewBox="0 0 24 24">${S.soundOn
    ? '<path d="M11 5.5L6.5 9H4v6h2.5L11 18.5z"/><path d="M15 9.5a3.5 3.5 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10"/>'
    : '<path d="M11 5.5L6.5 9H4v6h2.5L11 18.5z"/><path d="M15 9.5l4 5M19 9.5l-4 5"/>'}</svg>`; }

/* ================= 模块编辑 ================= */
function renderModule(key){
  const m = MODULES.find(x=>x.key===key), p = S.pages[key];
  const ta = $('modText');
  ta.value = p.text || '';
  ta.readOnly = !S.admin;
  ta.placeholder = S.admin ? '在这里写下内容…' : '访客只读 · 管理员登录后可编辑';
  ta.oninput = S.admin ? ()=>{ p.text = ta.value; autoSave(); } : null;
  $('modLinkPane').style.display = m.allowLink ? '' : 'none';
  const onlyTextLink = m.key === 'schedule';
  if($('blocksPane')) $('blocksPane').style.display = onlyTextLink ? 'none' : '';
  if($('galPane')) $('galPane').style.display = onlyTextLink ? 'none' : '';
  renderBlocks(key); renderGal(key); if(m.allowLink) renderLinks(key);
  const bar = $('modBar');
  if(bar){ bar.classList.toggle('on', !!S.admin);
    $('modDel').onclick = ()=>deleteModule(key);
    $('modAdd').onclick = ()=>addModule(); }
}
/* ===== 模块管理：删除 / 新增模块 ===== */
function deleteModule(key){
  const m = MODULES.find(x=>x.key===key); if(!m) return;
  const idx = MODULES.findIndex(x=>x.key===key);
  if(idx >= 0) MODULES.splice(idx,1);
  delete S.pages[key];
  closeSheet();
  renderModNav(); renderRecent();
  delete RAW.pages && delete RAW.pages[key];
  persist().then(()=>toast('已删除模块「'+m.cn+'」'));
  if(S.view===key) nav(MODULES.length ? MODULES[Math.min(idx, MODULES.length-1)].key : 'dash');
}
function addModule(){
  askText({ title:'新增模块', placeholder:'新模块名称（中文）', onOk:v=>{
    let base = 'mod', n = 1;
    while(MODULES.some(x=>x.key===base+n) || S.pages[base+n]) n++;
    const key = base + n;
    const en = v.toUpperCase().slice(0,8) || 'NEW';
    MODULES.push({ key, cn:v, en, allowLink:false, text: v+'内容区。' });
    S.pages[key] = step({});
    renderModNav(); renderRecent();
    persist().then(()=>toast('已新增模块「'+v+'」'));
    nav(key);
  }});
}

/* 图文分栏：每条 block = { text, image }，可只有文字 / 只有图片 / 两者都有 */
function renderBlocks(key){
  const p = S.pages[key], box = $('modBlocks');
  if(!p.blocks.length){
    box.innerHTML = `<div class="empty">暂无分栏${S.admin ? '，点击上方「添加分栏」添加' : ''}</div>`;
  } else {
    box.innerHTML = p.blocks.map((b,i)=>`
      <div class="block" data-bi="${i}">
        <div class="bbar">
          <span class="no">分栏 ${i+1}</span>
          <button data-del="${i}" title="删除此分栏">删除</button>
        </div>
        <div class="bimg" data-bi="${i}" title="${S.admin?'点击上传/更换图片':''}">
          ${b.image ? `<img src="${MU(b.image)}" alt="">` : `<div class="ph">${S.admin?'＋ 上传图片':'暂无图片'}</div>`}
          <span class="uptip">${b.image?'点击更换图片':'点击上传图片'}</span>
        </div>
        <textarea class="btxt" data-bi="${i}" placeholder="${S.admin?'输入文字，可与图片一起或单独保存…':'访客只读'}">${(b.text||'').replace(/</g,'&lt;')}</textarea>
      </div>`).join('');
  }
  $('blockDelLast').disabled = !p.blocks.length;
  if(S.admin){
    $('blockAdd').onclick = ()=>{ tap('tap'); p.blocks.push({text:'',image:''}); renderBlocks(key); autoSave('已新建分栏'); };
    $('blockDelLast').onclick = ()=>{ tap('back');
      if(!p.blocks.length) return;
      if(!confirm('确定删除最后一个分栏？')) return;
      p.blocks.pop(); renderBlocks(key); autoSave('分栏已删除'); };
    box.querySelectorAll('[data-del]').forEach(b=>b.onclick = ()=>{ tap('back');
      p.blocks.splice(+b.dataset.del,1); renderBlocks(key); autoSave('分栏已删除'); });
    box.querySelectorAll('.bimg').forEach(el=>{
      el.onclick = ()=>{ tap('tap'); imgTarget = key; blockImgIdx = +el.dataset.bi; $('fileImg').click(); };
    });
    box.querySelectorAll('.btxt').forEach(t=>{
      const i = +t.dataset.bi;
      t.oninput = ()=>{ p.blocks[i].text = t.value; autoSave(); };
    });
  } else {
    box.querySelectorAll('.btxt').forEach(t=>{ t.readOnly = true; t.value = p.blocks[+t.dataset.bi].text || ''; });
    box.querySelectorAll('.bimg').forEach(el=>el.onclick = ()=>toast('访客模式 · 仅管理员可上传'));
  }
}
let blockImgIdx = -1;
function renderGal(key){
  const p = S.pages[key], box = $('modGal');
  box.innerHTML = p.images.map((src,i)=>
    `<div class="it" data-lp="img-${i}"><img src="${MU(src)}" alt=""><button data-i="${i}">×</button></div>`).join('')
    + (S.admin ? `<button class="add" id="galAdd">+</button>` : '');
  if(S.admin){
    box.querySelectorAll('.it button').forEach(b=>b.onclick = ()=>{ tap('back');
      p.images.splice(+b.dataset.i,1); renderGal(key); renderModNav(); autoSave('图片已移除'); });
    if($('galAdd')) $('galAdd').onclick = ()=>{ tap('tap'); imgTarget=key; $('fileImg').click(); };
  }
  bindLongPress(box, el=>{
    const i = +el.dataset.lp.split('-')[1];
    if(!S.admin){ toast('访客模式 · 仅管理员可编辑'); return; }
    openSheet({ title:'第 '+(i+1)+' 张图片', sub:'长按操作', groups:[[
      { id:'rm', label:'删除这张图片', break:true, run:()=>{ p.images.splice(i,1); renderGal(key); renderModNav(); tap('back'); autoSave('图片已移除'); } }
    ]]});
  });
}
function renderLinks(key){
  const p = S.pages[key], box = $('modLinks');
  box.innerHTML = p.links.length ? p.links.map((l,i)=>
    `<div class="lk"><span class="ic"><svg viewBox="0 0 24 24"><path d="M10.5 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5"/><path d="M13.5 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.5-1.5"/></svg></span>
      <a href="${l.url}" target="_blank" rel="noopener">${(l.text||l.url).replace(/</g,'&lt;')}</a>
      <button class="x" data-i="${i}">×</button></div>`).join('')
    : `<div class="empty">暂无链接${S.admin ? '，在下方添加' : ''}</div>`;
  if(S.admin) box.querySelectorAll('.x').forEach(b=>b.onclick = ()=>{ tap('back');
    p.links.splice(+b.dataset.i,1); renderLinks(key); renderModNav(); autoSave('链接已删除'); });
}
let imgTarget=null;

/* ================= 导航 ================= */
const TITLES = { dash:['归光 ToLight','欢迎回来'],
  intro:['个人介绍','个人档案 · PROFILE'] };
function nav(v){
  if(!v) return;
  tap(v==='dash'&&S.view!=='dash' ? 'back' : 'tap');
  S.view = v;
  ['dash','mod','intro'].forEach(x=>$('v-'+x).classList.remove('on'));
  if(v==='dash'){ $('v-dash').classList.add('on'); renderRecent(); }
  else if(v==='intro'){ $('v-intro').classList.add('on'); renderIntroPage(); }
  else { $('v-mod').classList.add('on'); renderModule(v); }
  document.querySelectorAll('.navitem').forEach(n=>n.classList.toggle('on', n.dataset.nav===v));
  const m = MODULES.find(x=>x.key===v);
  if(m) { $('pageH1').textContent = m.cn; $('pageSub').textContent = m.en + ' · 内容模块'; }
  else { const t=TITLES[v]||['归光 ToLight','']; $('pageH1').textContent=t[0];
    $('pageSub').textContent = t[1] ? t[1]+' · '+TODAY : TODAY; }
  $('backBtn').classList.toggle('show', v!=='dash');
  $('views').scrollTop = 0;
  // 数字入场动画
  if(v==='dash') document.querySelectorAll('#v-dash .stat .num').forEach(countUp);
  if(window.innerWidth<=860) toggleRail(false);
}
function bindNav(){
  document.querySelectorAll('[data-nav]').forEach(el=>{
    if(el.dataset.bound) return; el.dataset.bound='1';
    el.onclick = ()=>{ nav(el.dataset.nav); };
  });
}

/* ================= 抽屉 / 菜单 ================= */
function toggleRail(open){
  S.railOpen = (typeof open==='boolean') ? open : !S.railOpen;
  $('rail').classList.toggle('open', S.railOpen); buzz('select');
}
/* ===== iOS 式边缘拖拽：左边缘右滑拉出 / 左滑推回，带弹性回弹 ===== */
(function(){
  const RAIL_W = 280;
  let startX=0, startY=0, dragging=false, dir=0, dx=0;
  const rail = document.getElementById('rail'), grab = document.getElementById('edgeGrab');
  if(!rail || !grab) return;
  const isMobile = ()=> window.innerWidth <= 860;
  function clampOpen(t){ return Math.max(-RAIL_W-6, Math.min(0, t)); }
  function apply(t){ rail.style.transform = 'translateX(' + t + 'px)'; }
  function settle(open){
    rail.classList.remove('dragging'); rail.style.transform='';
    rail.classList.toggle('open', open); S.railOpen = open; buzz('select');
  }
  grab.addEventListener('touchstart', e=>{
    if(!isMobile() || S.railOpen) return;
    const t = e.touches[0]; startX=t.clientX; startY=t.clientY;
    dragging=true; dir=0; dx=0; rail.classList.add('dragging');
  }, {passive:true});
  grab.addEventListener('touchmove', e=>{
    if(!dragging || !isMobile()) return;
    const t=e.touches[0], cx=t.clientX, cy=t.clientY;
    const raw = cx - startX;
    if(dir===0 && (Math.abs(raw)>6 || Math.abs(cy-startY)>6)) dir = Math.abs(raw)>Math.abs(cy-startY) ? 1 : -1;
    if(dir!==1){ return; }
    e.preventDefault();
    dx = raw;
    apply(clampOpen(dx));
  }, {passive:false});
  function endDrag(){
    if(!dragging) return; dragging=false;
    if(dir===1){ settle(dx > RAIL_W*0.40); }
  }
  grab.addEventListener('touchend', endDrag);
  grab.addEventListener('touchcancel', ()=>endDrag());
  // 侧栏打开时：rail 右侧露出的主内容边缘区左滑可关闭（iOS 风格拖回）
  const closeEdge = document.createElement('div');
  closeEdge.className = 'edge-close';
  closeEdge.style.cssText = 'position:fixed;left:280px;top:0;bottom:0;width:0;z-index:28;touch-action:pan-y';
  document.body.appendChild(closeEdge);
  function syncClose(){
    const open = S.railOpen;
    closeEdge.style.width = open ? '60px' : '0';
    closeEdge.style.pointerEvents = open ? 'auto' : 'none';
    closeEdge.style.left = open ? '280px' : '280px';
  }
  closeEdge.addEventListener('touchstart', e=>{
    if(!isMobile() || !S.railOpen) return;
    const t=e.touches[0]; startX=t.clientX; startY=t.clientY;
    dragging=true; dir=0; dx=0; rail.classList.add('dragging');
  }, {passive:true});
  closeEdge.addEventListener('touchmove', e=>{
    if(!dragging || !isMobile()) return;
    const t=e.touches[0], cx=t.clientX, cy=t.clientY;
    const raw = cx - startX;
    if(dir===0 && (Math.abs(raw)>6 || Math.abs(cy-startY)>6)) dir = Math.abs(raw)>Math.abs(cy-startY) ? (raw<0?-1:1) : -1;
    if(dir!==-1) return;   // 仅响应向左拖
    e.preventDefault();
    dx = raw;   // 负值，向左
    apply(clampOpen(dx));
  }, {passive:false});
  function endClose(){
    if(!dragging) return; dragging=false;
    if(dir===-1){ settle(dx < -RAIL_W*0.40 ? false : true); }
    dir=0;
  }
  closeEdge.addEventListener('touchend', endClose);
  closeEdge.addEventListener('touchcancel', ()=>{ if(dragging){ dragging=false; dir=0; } });
  // 桌面 / 关闭态下隐藏热区手柄；侧栏打开态展开关闭热区
  function syncGrab(){ grab.style.display = (isMobile() && !S.railOpen) ? '' : 'none'; syncClose(); }
  window.addEventListener('resize', syncGrab);
  const _toggle = toggleRail;
  toggleRail = function(open){
    _toggle(open); syncGrab();
  };
  syncGrab();
})();
function openCommandSheet(){
  const groups = [[
    { id:'dash', label:'回到控制台', sub:'⌘H', run:()=>nav('dash') },
    { id:'sch', label:'查看排班表', run:()=>nav('schedule') }
  ],[
    { id:'sound', label:'提示音', switch:true, on:S.soundOn, run:v=>{ S.soundOn=v;
        renderSound(); if(S.admin) persist(); toast(v?'提示音已开启':'提示音已静音'); } },
    { id:'theme', label:'切换外观主题', sub:THEME_NAME[S.theme], run:()=>{
        if(!S.admin) return toast('登录管理员后可切换外观');
        S.theme = THEMES[(THEMES.findIndex(t=>t.id===S.theme)+1) % THEMES.length].id;
        applyTheme(); renderThemeDots(); persist(); toast('外观 · '+THEME_NAME[S.theme]); } }
  ]];
  if(S.admin){
    groups.push([{ id:'av', label:'更换头像', run:()=>{ $('fileAvatar').click(); } },
      { id:'out', label:'退出管理员身份', break:true, run:doLogout }]);
    groups.push([{ id:'default', label:'恢复默认设置', sub:'重置全部内容', break:true, run:async ()=>{
          if(!confirm('确认恢复默认？将清空云端的名字/介绍/图片/音乐/模块内容与主题')) return;
          RAW = {};
          S.avatar=''; S.introImage=''; S.introText=''; S.music={name:'',url:''};
          S.me={name:'银YIN', role:'UI Designer · 归光'};
          MODULES.forEach(m=>{ S.pages[m.key] = step(m); });
          if(audio){ audio.pause(); audio=null; }
          await persist(); toast('已恢复默认 · 云端已重置');
          setTimeout(()=>location.reload(), 700);
        } }]);
  } else {
    groups.push([{ id:'login', label:'管理员登录', run:openLoginSheet }]);
  }
  openSheet({ title:'快捷操作', sub:'归光 ToLight · ' + (S.admin?'管理员模式':'访客只读'), groups });
}

/* ================= 管理员 / 访客 ================= */
async function refreshRole(){
  S.admin = isAdminSession();
  applyRole();
}
function applyRole(){
  document.body.classList.toggle('guest', !S.admin);
  const b = $('roleBtn');
  b.innerHTML = S.admin
    ? '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3"/></svg><span>管理员</span>'
    : '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8.5 11V8a3.5 3.5 0 0 1 6.9-1.1"/><path d="M12 14.5v2.2"/></svg><span>访客</span>';
  b.classList.toggle('on', S.admin);
  b.title = S.admin ? '管理员模式 · 点击退出' : '访客模式 · 点击管理员登录';
  // 正在浏览模块时按新身份重渲染编辑控件
  if(MODULES.some(m=>m.key===S.view)) renderModule(S.view);
  // 登录/退出后音乐区文案与改名入口需按新身份刷新
  if($('musicName')) renderMusic();
  if($('introName')) renderIntro();
  if($('signQuote')) renderSign();
  if($('recentList')) renderRecent(); // 登录/退出后刷新「最近内容」的时间显示与编辑键
}
function openLoginSheet(){
  openSheet({ title:'管理员登录', sub:'输入管理员密码以解锁编辑',
    groups:[[
      { id:'pwd', input:true, placeholder:'管理员密码', run:doLogin },
      { id:'ok', label:'登录', run:doLogin }
    ]]});
  setTimeout(()=>{ const el=$('pwd'); if(el){ el.focus(); } }, 520);
}
async function doLogin(){
  const el=$('pwd'); const pwd = el ? el.value.trim() : ''; // 去除首尾空格，避免输入法误触导致密码错误
  if(!pwd) return toast('请输入密码');
  try{
    const res = await apiCall('login', { password: pwd }, 'POST');
    setAdminSession(res.token); closeSheet(); await refreshRole(); tap('save'); toast('已进入管理员模式');
  }catch(e){
    toast(e.message==='密码不正确' ? '密码不正确' : '登录失败，请重试');
    if(el){ el.value=''; el.focus(); }
  }
}
async function doLogout(){
  setAdminSession('');
  await refreshRole(); tap('back'); toast('已退出管理员 · 访客只读模式');
}
/* 通用文本输入面板：替代 prompt()，手机应用内网页可用（prompt 在多数 webview 被禁用） */
function askText(opt){
  const submit = ()=>{ const el=$('askIn'); const v=el ? el.value.trim() : '';
    if(!v) return toast('请输入内容'); closeSheet(); setTimeout(()=>opt.onOk(v), 130); };
  openSheet({ title:opt.title||'编辑', sub:opt.sub||'',
    groups:[[
      { id:'askIn', input:true, type:'text', value:opt.value||'', placeholder:opt.placeholder||'', run:submit },
      { id:'askOk', label:opt.okLabel||'确定', run:submit }
    ]]});
  setTimeout(()=>{ const el=$('askIn'); if(el){ el.focus(); if(el.select) try{el.select();}catch(e){} } }, 520);
}

/* ================= 交互事件 ================= */
$('roleBtn').onclick = ()=>{ tap('tap');
  if(S.admin) openSheet({ title:'管理员模式', sub:'当前身份可编辑全部内容',
    groups:[[
      { id:'keep', label:'继续编辑', run:()=>{} },
      { id:'out', label:'退出管理员身份', break:true, run:doLogout }
    ]]});
  else openLoginSheet(); };
$('soundBtn').onclick = ()=>{ tap('tap'); S.soundOn=!S.soundOn; renderSound();
  if(S.admin) persist(); toast(S.soundOn?'提示音已开启':'提示音已静音'); };
$('avBtn').onclick = ()=>{ tap('tap');
  if(!S.admin) return toast('访客模式 · 仅管理员可更换头像');
  $('fileAvatar').click(); };
$('fileAvatar').onchange = async e=>{
  const f=e.target.files[0]; e.target.value=''; if(!f) return;
  if(!S.admin) return toast('访客模式 · 仅管理员可编辑');
  toast('正在上传头像…');
  const url = await uploadImage(f);
  if(url){ S.avatar=url; renderAvatar(); await persist(); tap('save'); toast('头像已全站同步'); }
  else toast('头像上传失败，请重试');
};
$('fileImg').onchange = async e=>{
  const f=e.target.files[0]; e.target.value=''; if(!f||!imgTarget) return;
  if(!S.admin) return toast('访客模式 · 仅管理员可编辑');
  toast('正在插入图片…');
  const url = await uploadImage(f);
  if(!url){ toast('图片上传失败，请重试'); return; }
  if(blockImgIdx >= 0){ // 图文分栏：挂到对应分栏条目
    const blk = S.pages[imgTarget].blocks[blockImgIdx];
    if(blk){ blk.image = url; renderBlocks(imgTarget); await persist(); tap('save'); toast('分栏图片已更新'); }
  } else {
    S.pages[imgTarget].images.push(url); renderGal(imgTarget); renderModNav(); await persist();
    tap('save'); toast('图片已插入');
  }
  blockImgIdx = -1;
};
$('musicThumb').onclick = ()=>{ tap('tap');
  if(!S.music.url && !S.admin) return toast('登录管理员后可上传音乐');
  toggleMusic(); };
$('musicUpBtn').onclick = ()=>{
  if(!S.admin) return toast('访客模式 · 仅管理员可上传音乐');
  tap('tap'); $('fileMusic').click();
};
$('fileMusic').onchange = async e=>{
  const f=e.target.files[0]; e.target.value=''; if(!f) return;
  if(!S.admin) return toast('访客模式 · 仅管理员可上传音乐');
  toast('正在上传音乐…');
  const url = await uploadAudio(f);
  if(url){
    if(audio){ audio.pause(); audio=null; }
    // 音乐存入平台对象存储，全站访客均可播放
    S.music = { name:f.name.replace(/\.[^.]+$/,''), url };
    renderMusic(); await persist(); tap('save'); toast('音乐已上传');
    setTimeout(toggleMusic, 350);
  }
};
/* ---- 播放器控件：播放/暂停、进度拖拽、删除 ---- */
const mcPlayBtn=$('mcPlayBtn'), mcBar=$('mcBar'), mcDel=$('mcDel');
if(mcPlayBtn) mcPlayBtn.onclick = ()=>{ tap('tap'); toggleMusic(); };
if(mcBar){
  let seeking=false;
  const seekTo = e=>{
    const r = mcBar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - r.left)/r.width));
    if(audio && isFinite(audio.duration)){ audio.currentTime = ratio*audio.duration; updateProgress(); }
  };
  mcBar.addEventListener('pointerdown', e=>{ seeking=true; seekTo(e); if(mcBar.setPointerCapture) mcBar.setPointerCapture(e.pointerId); });
  mcBar.addEventListener('pointermove', e=>{ if(seeking) seekTo(e); });
  mcBar.addEventListener('pointerup', ()=>{ seeking=false; });
  mcBar.addEventListener('pointercancel', ()=>{ seeking=false; });
}
if(mcDel) mcDel.onclick = async ()=>{
  tap('tap');
  if(!S.admin) return toast('访客模式 · 仅管理员可删除音乐');
  if(!S.music.url) return toast('暂无音乐');
  if(!confirm('确定删除当前音乐吗？此操作不可撤销。')) return;
  try{
    if(audio){ audio.pause(); audio=null; }
    if(indexedDB){
      const idb = await new Promise(res=>{ const req=indexedDB.open('kairos_media'); req.onsuccess=()=>res(req.result); req.onerror=()=>res(null); });
      if(idb){ const tx=idb.transaction('media','readwrite'); tx.objectStore('media').delete('music'); }
    }
    S.music = { name:'', url:'' };
    renderMusic(); await persist(); tap('save'); toast('音乐已删除');
  }catch(err){ console.error('DEL_FAIL', err); toast('删除失败，请重试'); }
};
function rippleAt(el, x, y){
  const base=document.createElement('i'); base.className='ripple';
  const r2=document.createElement('i'); r2.className='ripple r2';
  const r3=document.createElement('i'); r3.className='ripple r3';
  const soft=document.createElement('i'); soft.className='ripple soft';
  const layers=[base,r2,r3,soft];
  layers.forEach(ri=>{ ri.style.left=x+'px'; ri.style.top=y+'px'; el.appendChild(ri); });
  setTimeout(()=>layers.forEach(ri=>ri.remove()), 1500);
}
let _introNavT=null;
$('introCard').onclick = (e)=>{
  const rect = $('introCard').getBoundingClientRect();
  const x = (e.clientX!=null && e.clientX!==undefined) ? e.clientX-rect.left : rect.width/2;
  const y = (e.clientY!=null && e.clientY!==undefined) ? e.clientY-rect.top  : rect.height/2;
  rippleAt($('introCard'), x, y);
  tap('tap');
  if(_introNavT) clearTimeout(_introNavT);
  _introNavT = setTimeout(()=>nav('intro'), 450);
};
$('introImg').onclick = ()=>{
  if(!S.admin) return toast('访客模式 · 仅管理员可更换配图');
  tap('tap'); $('fileIntro').click();
};
$('fileIntro').onchange = async e=>{
  const f=e.target.files[0]; e.target.value=''; if(!f) return;
  if(!S.admin) return toast('访客模式 · 仅管理员可编辑');
  toast('正在上传配图…');
  const url = await uploadImage(f);
  if(url){ S.introImage=url; renderIntro(); if(S.view==='intro') renderIntroPage();
    await persist(); tap('save'); toast('个人介绍配图已更新'); }
  else toast('配图上传失败，请重试');
};
$('lkAdd').onclick = ()=>{
  if(!S.admin) return toast('访客模式 · 仅管理员可编辑');
  const k = S.view, t=$('lkText').value.trim(), u=$('lkUrl').value.trim();
  if(!u) return toast('请填写链接地址');
  S.pages[k].links.push({text:t,url:u}); $('lkText').value=''; $('lkUrl').value='';
  renderLinks(k); renderModNav(); tap('save'); autoSave('链接已添加');
};
$('meDots').onclick = ()=>{ tap('tap'); openProfileSheet(); };
$('railBtn').onclick = ()=>toggleRail();
$('backBtn').onclick = ()=>{ tap('back'); nav('dash'); };
$('railBack').onclick = ()=>{ tap('back'); toggleRail(false); };
function openProfileSheet(){
  if(!S.admin){
    openSheet({ title:S.me.name, sub:S.me.role + ' · 访客只读', groups:[[
      { id:'login', label:'管理员登录', run:openLoginSheet }
    ],[
      { id:'home', label:'返回控制台', run:()=>nav('dash') }
    ]]});
    return;
  }
  openSheet({ title:S.me.name, sub:S.me.role + ' · 管理员', groups:[[
    { id:'av', label:'更换头像', run:()=>$('fileAvatar').click() },
    { id:'name', label:'修改名字', run:()=>{
        askText({ title:'修改名字', value:S.me.name, onOk:v=>{ S.me.name=v; $('meName').textContent=v; renderIntro();
          if(S.view==='intro') renderIntroPage(); persist(); toast('名字已更新'); } }); } },
    { id:'role', label:'修改签名', run:()=>{
        askText({ title:'修改签名', value:S.me.role, onOk:v=>{ S.me.role=v; $('meRole').textContent=v; renderIntro(); persist(); toast('签名已更新'); } }); } }
  ],[
    { id:'theme', label:'外观主题', sub:THEME_NAME[S.theme], run:()=>{
        if(!S.admin) return toast('登录管理员后可切换外观');
        openSheet({ title:'外观主题', sub:'当前 · '+THEME_NAME[S.theme],
          groups:[ THEMES.map(t=>({ id:'th-'+t.id, label:THEME_NAME[t.id], sub:t.id===S.theme?'使用中':'', run:()=>{
            S.theme=t.id; applyTheme(); renderThemeDots(); renderMode(); persist(); toast('外观 · '+THEME_NAME[t.id]); } })) ]}); } },
    { id:'sound', label:'提示音', switch:true, on:S.soundOn, run:v=>{ S.soundOn=v; renderSound(); persist(); } }
  ],[
    { id:'home', label:'返回控制台', run:()=>nav('dash') }
  ]]});
}

/* 今日日签：农历换算（1900–2100 常用压缩表） + 每日轮换诗句 */
const LUNAR_INFO=[0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
 0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
 0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
 0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
 0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
 0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,
 0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
 0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,
 0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
 0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x05ac0,0x0ab60,0x096d5,0x092e0,
 0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
 0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
 0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
 0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
 0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
 0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,
 0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,
 0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,
 0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,
 0x052b0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,
 0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250];
const LUNAR_MONTH=['正','二','三','四','五','六','七','八','九','十','冬','腊'];
const LUNAR_DAY1=['一','二','三','四','五','六','七','八','九','十'];
const LUNAR_DAY2=['初','十','廿','三'];
function lunarYearDays(y){ let s=348; for(let i=0x8000;i>0x8;i>>=1){ s+=(LUNAR_INFO[y-1900]&i)?1:0; } return s+leapDays(y); }
function leapMonth(y){ return LUNAR_INFO[y-1900] & 0xf; }
function leapDays(y){ return leapMonth(y) ? ((LUNAR_INFO[y-1900] & 0x10000) ? 30 : 29) : 0; }
function lunarMonthDays(y,m){ return (LUNAR_INFO[y-1900] & (0x10000>>m)) ? 30 : 29; }
function lunarOf(date){
  let offset = Math.floor((date - Date.UTC(1900,0,31)) / 86400000);
  let y, temp = 0;
  for(y = 1900; y < 2101 && offset > 0; y++){ temp = lunarYearDays(y); offset -= temp; }
  if(offset < 0){ offset += temp; y--; }
  const leap = leapMonth(y);
  let m = 1, isLeap = false;
  for(; offset > 0 && m < 13; m++){
    if(leap > 0 && m === leap + 1 && !isLeap){ --m; isLeap = true; temp = leapDays(y); }
    else { temp = lunarMonthDays(y, m); }
    if(isLeap && m === leap + 1) isLeap = false;
    offset -= temp;
  }
  if(offset === 0 && leap > 0 && m === leap + 1){
    if(isLeap){ isLeap = false; } else { isLeap = true; --m; }
  }
  if(offset < 0){ offset += temp; --m; }
  return { y, m, d: offset + 1, isLeap };
}
function lunarDayCN(d){
  const ten = LUNAR_DAY2[Math.floor((d-1)/10)], one = LUNAR_DAY1[(d-1)%10];
  if(d === 10) return '初十'; if(d === 20) return '二十'; if(d === 30) return '三十';
  return ten + one;
}
const QUOTES = [
  ['山川皆过往','眉目成春秋'],
  ['白日莫闲过','青春不再来'],
  ['浮云一别后','流水十年间'],
  ['人间枝头','各自乘流'],
  ['与岁月握手','同温柔言和'],
  ['心怀星河','慢煮生活'],
  ['万事顺遂','毫无蹉跎'],
  ['清安喜乐','次第花开'],
  ['步履不停','山海自平'],
  ['春风得意','马蹄疾疾']
];
function renderSign(){
  const d = new Date();
  $('signDay').textContent = d.getDate();
  const l = lunarOf(d);
  $('signLunar').textContent = LUNAR_MONTH[l.m-1] + '月' + lunarDayCN(l.d);
  $('signGreg').textContent = `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
  const doy = Math.floor((d - new Date(d.getFullYear(),0,0)) / 86400000);
  const q = (S.quote && S.quote.length) ? S.quote : QUOTES[doy % QUOTES.length];
  $('signQuote').innerHTML = q.map(col=>`<span>${esc(col)}</span>`).join('');
  $('signQuote').title = S.admin ? '点击编辑日签文案（日期自动生成，不可改）' : '';
}
/* 管理员编辑日签文案：日期/农历保持自动生成，仅诗句可自定义 */
function editQuote(){
  if(!S.admin) return toast('访客模式 · 仅管理员可编辑日签文案');
  tap('tap');
  const cur = (S.quote && S.quote.length) ? S.quote : [];
  const submit = ()=>{
    const a = $('qA') ? $('qA').value.trim() : '', b = $('qB') ? $('qB').value.trim() : '';
    if(!a && !b) return toast('请至少输入一句，或选择恢复每日轮换');
    closeSheet();
    setTimeout(async ()=>{
      S.quote = [a, b].filter(Boolean);
      renderSign(); await persist(); tap('save'); toast('日签文案已更新 · 云端同步');
    }, 130);
  };
  openSheet({ title:'编辑日签文案', sub:'诗句每句 2–8 字为宜 · 日期与农历自动生成',
    groups:[
      [
        { id:'qA', input:true, type:'text', value:cur[0]||'', placeholder:'第一句（显示在右）', run:submit },
        { id:'qB', input:true, type:'text', value:cur[1]||'', placeholder:'第二句（显示在左，可留空）', run:submit },
        { id:'ok', label:'保存', run:submit }
      ],
      [
        { id:'reset', label:'恢复每日轮换诗句', break:true, sub:'取消自定义文案', run:()=>{
          closeSheet(); setTimeout(async ()=>{
            S.quote = null; renderSign(); await persist(); tap('save'); toast('已恢复每日轮换诗句');
          }, 120);
        } }
      ]
    ]});
  setTimeout(()=>{ const el=$('qA'); if(el) el.focus(); }, 520);
}
$('signQuote').onclick = editQuote;
$('signEditHint').onclick = e=>{ e.stopPropagation(); editQuote(); };

/* 滚动：标题栏收拢（iOS 大标题折叠质感） */
$('views').addEventListener('scroll', function(){
  $('topbar').classList.toggle('compact', this.scrollTop > 6);
}, {passive:true});

/* 全局快捷键：⌘H 控制台 / ⌘M 菜单 / ⌘P 个人介绍 / Esc 返回控制台 */
document.addEventListener('keydown', e=>{
  const meta = e.metaKey || e.ctrlKey;
  if(meta && e.key.toLowerCase()==='h'){ e.preventDefault(); nav('dash'); }
  else if(meta && e.key.toLowerCase()==='m'){ e.preventDefault(); openCommandSheet(); }
  else if(meta && e.key.toLowerCase()==='p'){ e.preventDefault(); nav('intro'); }
  else if(e.key==='Escape' && !sheet.classList.contains('on')) nav('dash');
});

/* 光明暗：侧栏卡片明/暗模式切换（记住上一次的明亮主题） */
let lastLight = 'dawn';
function renderMode(){
  const dark = S.theme === 'dusk';
  const sw = $('modeSw'); if(sw) sw.checked = dark;
  $('modeTxt').textContent = dark ? '暮夜模式' : '明亮 · ' + THEME_NAME[S.theme];
}
$('modeSw').onchange = e=>{
  tap('tap');
  if(!S.admin){ toast('登录管理员后可切换外观'); renderMode(); return; }
  if(e.target.checked){ if(S.theme!=='dusk') lastLight = S.theme; S.theme = 'dusk'; }
  else { S.theme = lastLight; }
  applyTheme(); renderThemeDots(); renderMode();
  persist(); toast(e.target.checked ? '已切换 · 暮夜' : '已切换 · 明亮');
};

/* toast（iOS 胶囊通知） */
let toastTmr;
function toast(msg){ const t=$('toast');
  t.innerHTML = `<svg class="tick" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg><span>${msg}</span>`;
  t.classList.add('show'); buzz('select');
  clearTimeout(toastTmr); toastTmr=setTimeout(()=>t.classList.remove('show'),1800); }

/* ================= 启动 ================= */
(async ()=>{
  await boot();
  applyTheme();
  const d = new Date();
  TODAY = `${d.getFullYear()} 年 ${d.getMonth()+1} 月 ${d.getDate()} 日 · 周${'日一二三四五六'[d.getDay()]}`;
  $('today').textContent = TODAY;
  renderThemeDots(); renderModNav(); renderRecent(); renderSign();
  renderAvatar(); renderIntro(); renderMusic(); renderSound(); renderMode(); applyRole();
  bindNav();
  nav(S.view||'dash');
})();
</script>
</body>
</html>
