const A='./assets/images/';
const projects={
  sourcing:{kind:'CORE CASE 01 · 7 CHAPTERS',title:'AI 人才 Sourcing Agent',lead:'从 20+ 位内部用户调研出发，重新定义开放式人才寻访 Agent，并完成产品架构、质量机制与效果验证。',accent:'#60d5cc',bg:'#dfe8ff',cover:'sourcing-cover.png',metrics:[['20+','内部用户调研'],['17','人才渠道'],['38','轮任务测试'],['90%+','寻访提效']],chapters:[
    ['真实问题不是搜索慢','旧产品受到人才库规模小、候选人画像陈旧和推荐不准的共同限制。', 'image','sourcing-v1.png','EVIDENCE 01 · 初期对话任务'],
    ['从单渠道 Demo 到开放式 Agent','根据业务反馈重设产品边界，让系统同时兼容完整 JD、岗位关键词和模糊需求。','flow',[['BEFORE','单渠道搜索 Demo'],['INSIGHT','来源与证据才是瓶颈'],['AFTER','开放式人才 Sourcing Agent']]],
    ['把复杂寻访拆成可控流程','围绕需求理解、人才画像、渠道策略、候选人审核和用户干预，完成 12 份 RFC 与 5 份 ADR。','flow',[['01','理解招聘需求'],['02','规划渠道策略'],['03','跨渠道搜索'],['04','深度审核与用户干预']]],
    ['17 类渠道，不是简单堆接口','针对岗位特点配置检索策略，并支持精准寻访与批量扩库两类不同任务。公开版隐去真实候选人资料，只呈现产品机制。','flow',[['精准寻访','高证据门槛'],['批量扩库','宽召回策略'],['17 类渠道','按岗位动态规划']]],
    ['推荐必须能够回到原始证据','设置可调证据门槛；证据达标人才至少保留 3 条原始来源，同时支持跨任务复用与画像更新。','flow',[['SOURCE','保留原始来源'],['REVIEW','证据达标后入库'],['REUSE','跨任务复用画像'],['UPDATE','持续更新候选人信息']]],
    ['用评测判断产品，而不是感觉','38 轮任务累计发现 257 名候选人，深度审核 59 人；抽样严格匹配率 70%，明确触达信息覆盖率 90%。','data',[['257','累计发现'],['59','深度审核'],['70%','严格匹配'],['90%','触达覆盖']]],
    ['一次真实任务的结果','Agent 工程师任务中，19 分钟完成 12 人初筛与 6 人深度审核，最终交付 1 名含 5 条证据及联系方式的候选人。','data',[['19 min','完成任务'],['12 → 6','筛选漏斗'],['5','原始证据'],['¥1.57','Token 成本']]]]},
  tunnel:{kind:'CORE CASE 02 · 7 CHAPTERS',title:'AI 隧道工程智能助手',lead:'让大模型理解里程区间、地质风险与历史案例，完成专业工程资料检索、风险分析和报告生成。',accent:'#dfff47',bg:'#dce7d5',cover:'tunnel-risk.png',metrics:[['1216','地质资料'],['24.32km','覆盖里程'],['182万+','知识库字数'],['4','核心功能']],chapters:[
    ['工程知识为什么难被复用','地质素描资料分散、历史经验难检索、人工报告编制慢，现场人员需要的是能理解工程语义的助手。','flow',[['01','地质信息检索'],['02','施工风险分析'],['03','相似案例分析'],['04','综合报告生成']]],
    ['从原始 JSON 到行业知识库','完成字段裁剪、空值归一、里程标准化和文本清洗，并对 10 类地质风险指标进行结构化抽取。','data',[['1216','原始 JSON'],['182万+','语料字数'],['93.2%','整体抽取准确率'],['97.9%','重点字段准确率']]],
    ['普通 RAG 解决不了区间问题','用户查询区间与原始记录区段往往不一致。系统以起止里程为数值元数据，通过区间重叠召回与边界裁剪组合答案。','flow',[['QUERY','DK1013+180 — 220'],['RECALL','召回重叠区段 A / B / C'],['CROP','按查询边界裁剪'],['OUTPUT','组合可追溯结果']]],
    ['工作流不是一条直线','意图识别、参数提取、知识召回、多分支分析与结果汇总共同组成完整 Agent。','wide','tunnel-workflow.png','SYSTEM MAP · 完整工作流横向浏览'],
    ['四类任务，一套专业入口','同一对话界面支持检索、风险分析、相似案例和综合报告，让用户无需理解底层工作流。','gallery',['tunnel-search.png','tunnel-risk.png','tunnel-case.png','tunnel-report.png']],
    ['专项测试暴露失败模式','用 24 条测试集定位意图混淆、无回复和虚构里程问题，并逐轮修正节点与兜底策略。','data',[['80 → 100%','意图准确率'],['15 → 0%','无回复率'],['24','专项测试'],['3','核心失败类型']]],
    ['当前阶段：可运行 Demo','项目已完成内部功能测试，尚未进入目标现场用户验证。下一阶段将围绕真实施工任务测试可用性和报告质量。','image','tunnel-report.png','STATUS · INTERNAL VALIDATION'] ]},
  vision:{kind:'RESEARCH 01 · 5 CHAPTERS',title:'复杂隧道场景下不良地质智能识别',lead:'针对正常类占优、出水与断裂带视觉证据异质的问题，构建条件门控异构特征残差级联网络，并从类别性能、稳定性与可解释性三个层面验证。',accent:'#ff6b45',bg:'#f2e2da',cover:'vision-paper-hero.jpg',metrics:[['2749','独立影像'],['413','固定测试集'],['97.09%','准确率'],['第一作者','个人角色']],chapters:[
    ['真实现场中的三类视觉证据','正常、出水与断裂带影像同时受到钢筋、拱架、设备和不均匀光照干扰，少数类线索更容易被背景结构掩盖。','gallery',['vision-paper-water.jpg','vision-paper-fracture.jpg']],
    ['固定测试集上的类别表现','模型在413幅测试影像上取得97.09%准确率和88.89%宏平均F1，主要误差来自不良地质被漏判为正常。','image','vision-paper-confusion.jpg','FIGURE · 测试集混淆矩阵'],
    ['少数类排序能力','出水与断裂带类别的平均精确率分别为86.81%和90.46%，断裂带在较高召回区间保持更高精确率。','image','vision-paper-pr.png','FIGURE · PR 曲线'],
    ['模型到底看见了什么','Grad-CAM用于检查三条异构分支是否聚焦湿润、流动水迹与粗糙碎裂结构，而非设备和钢筋背景。','image','vision-paper-gradcam-selected.png','FIGURE · 异构分支 Grad-CAM'],
    ['主动保留错误样本','12幅误分类影像中，8幅为不良地质漏检；错误样本用于揭示反光、遮挡和弱纹理条件下的能力边界。','image','vision-paper-errors-selected.png','FIGURE · 代表性误分类样本']]},
  hunan:{kind:'RESEARCH 02 · 5 CHAPTERS',title:'湖南省地质灾害评估与 Web 可视化',lead:'在县、乡与 4km 网格三种尺度上比较统计模型与 LightGBM 集成模型，并完成风险结果可视化。',accent:'#ffc95d',bg:'#e8eadb',cover:'hunan-maps.png',metrics:[['3','空间尺度'],['6','对比模型'],['0.829','最佳 AUC'],['优秀论文','本科毕业设计']],chapters:[
    ['同一风险，需要从不同尺度观察','分别在县级、乡级和 4km 网格尺度开展评估，比较尺度变化对风险分区精度的影响。','flow',[['SCALE 01','县级行政'],['SCALE 02','乡级行政'],['SCALE 03','4km 网格']]],
    ['统计模型与机器学习组合','使用 IV、CF、FR 获取初步风险分布，再训练 LightGBM-IV、LightGBM-CF 和 LightGBM-FR。','flow',[['BASE','IV / CF / FR'],['ENSEMBLE','LightGBM × 3'],['COMPARE','多尺度精度评价']]],
    ['六种模型的空间结果','不同方法总体趋势一致，但集成模型对高风险区域呈现更细致的空间区分。','image','hunan-maps.png','FIGURE · 县级风险评估结果'],
    ['4km 网格尺度表现最佳','网格尺度 LightGBM-IV 的 Accuracy、Precision、Recall、F1 与 AUC 均取得最佳或领先结果。','data',[['0.752','Accuracy'],['0.757','Precision'],['0.753','Recall'],['0.829','AUC']]],
    ['把研究结果变成可浏览产品','基于 ThingJS 设计风险等级可视化大屏，支持尺度切换、弹窗展示、风险分析与风险预测。','image','hunan-system.png','SYSTEM · Web 可视化总体结构']]},
  sci:{kind:'RESEARCH 03 · 4 CHAPTERS',title:'多源地理数据与空间聚类建模',lead:'融合多源地理数据、Geo-SOM 与线性混合模型，解释综合地质灾害指数的空间异质性。',accent:'#b12028',bg:'#dbe8ec',cover:'sci-paper-cover.png',metrics:[['121','县级单元'],['5','空间聚类'],['0.214','最佳 σ'],['SCI','第二作者']],chapters:[
    ['综合地质灾害指数','将五类灾害整合为县域尺度的 GI 风险底图。','image','sci-fig1-hazard-index.png','综合地质灾害指数空间分布'],
    ['地理位置改变聚类结果','Geo-SOM 形成更明确、连续的空间分区。','image','sci-fig4-clusters.png','SOM 与 Geo-SOM 聚类对比'],
    ['从组件平面筛选关键因素','年均降水、剖面曲率和坡度与 GI 保持稳定关联。','image','sci-fig5-components.png','影响因子组件平面'],
    ['解释区域异质性','混合效应模型揭示同一因素在不同空间聚类中的响应差异。','gallery',['sci-fig6-mixed-effects.png','sci-fig7-context-effects.png']]]},
  stickers:{kind:'SIDE PROJECT 01 · 3 CHAPTERS',title:'把自己做成一套获奖表情包',lead:'从个人照片、角色一致性到微信表情平台发布：一项真正被用户使用的多模态内容实验。',accent:'#00c66b',bg:'#dcf4df',cover:'sticker-pack.png',metrics:[['605','累计下载'],['3,006','累计发送'],['2025','优秀表情艺术家'],['原创','微信平台']],chapters:[
    ['把个人特征变成可复用角色','围绕帽子、眼镜、发型和服装建立稳定角色，再生成适合聊天语境的情绪动作。','image','sticker-pack.png','WECHAT STICKER PACK'],
    ['上线之后，用户真的在发送','作品在微信表情开放平台正式上线，累计获得 605 次下载和 3,006 次发送。','data',[['605','下载次数'],['3,006','发送次数'],['原创','作品类型'],['已上线','平台状态']]],
    ['平台认可','入选微信表情开放平台「2025 年度优秀表情艺术家」。','image','sticker-award.png','AWARD · 2025 年度优秀表情艺术家']]},
  cat:{kind:'SIDE PROJECT 02 · 3 CHAPTERS',title:'研究生猫格测试',lead:'把研究生生活观察转化成 16 种猫咪人格，并完成从内容、交互到上线的完整产品闭环。',accent:'#f4cf34',bg:'#e6eff8',cover:'cat-site-home.png',metrics:[['16','猫格类型'],['20','情境问题'],['已上线','pg-cat-ti.top'],['Vue','实现']],chapters:[
    ['真实线上首页','首页由 16 只猫咪持续滚动，建立测试的第一印象。','image','cat-site-home.png','LIVE PRODUCT HOME'],
    ['从问题到猫格匹配','用户完成 20 道情境问题后，系统匹配对应猫格。','image','cat-site-test.png','LIVE TEST FLOW'],
    ['结果必须值得分享','结果页融合角色、标签、描述与雷达图。','image','cat-site-result.png','LIVE RESULT']],},
  resume:{kind:'SIDE PROJECT 03 · 2 CHAPTERS',title:'AI 简历解析与 JD 匹配助手',lead:'将非结构化简历转成候选人画像，并结合岗位描述生成结构化匹配分析。',accent:'#5267ff',bg:'#e5e8f8',cover:'resume-jd.png',metrics:[['PDF','简历输入'],['JD','岗位解析'],['RAG','知识查询'],['Agent','流程编排']],chapters:[
    ['上传简历，再输入目标岗位','系统先完成简历解析，再依次进行 JD 分析、匹配评分和评估报告生成。','image','resume-jd.png','INPUT · RESUME + JD'],
    ['从匹配分数回到能力证据','结果支持查询候选人的技能、教育、项目和实习经历，帮助用户理解具体差距。','image','resume-result.png','OUTPUT · STRUCTURED ANALYSIS']]}
};

const homeResearch=[['vision','97.09%','复杂隧道场景下不良地质智能识别','国家重点研发计划 · 第一作者'],['hunan','0.829','湖南省地质灾害评估与 Web 可视化','优秀本科毕业论文'],['sci','SCI','多源地理数据与空间聚类建模','Scientific Reports · 第二作者']];
const homeLab=[['stickers','把自己做成一套获奖表情包','sticker-items/sticker-01.webp','605 下载 · 3,006 发送'],['cat','研究生猫格测试','cat-site-result.png','已上线 · 16 种猫格'],['resume','AI 简历与 JD 匹配助手','resume-jd.png','个人 AI 工具']];
const app=document.querySelector('#app');

function home(){return `<section class="hero hero-rebuilt" id="home"><div class="hero-grid"></div><div class="hero-copy"><p class="eyebrow"><i></i> AI PRODUCT MANAGER · CHENGDU / CHINA</p><p class="hero-greeting"><span>HELLO / 你好</span><strong>欢迎来到我的作品现场。</strong><i aria-hidden="true"></i></p><h1><span class="cn-name" aria-label="周子渊"><i aria-hidden="true">周</i><i aria-hidden="true">子</i><i aria-hidden="true">渊</i></span><span class="outline en-name" aria-label="ZIVEN"><i aria-hidden="true">Z</i><i aria-hidden="true">I</i><i aria-hidden="true">V</i><i aria-hidden="true">E</i><i aria-hidden="true">N</i></span></h1><p class="hero-statement">把复杂问题，做成<mark>真正可用</mark>的 AI 产品。</p><div class="hero-desc"><p class="hero-manifesto"><span>AI 时代真正稀缺的，不是模型本身，而是<mark>定义关键问题</mark>、设计可靠方案，并持续验证关键判断。</span><span>我的工作，就是从真实场景出发，用<mark>调研与实验验证判断</mark>，再将模型能力转化为用户能够理解、信任并使用的产品。</span></p></div><div class="hero-actions"><a href="#work">浏览代表项目 ↓</a><a href="#contact">和我聊聊 ↗</a></div></div><figure class="hero-photo-card"><img src="${A}ziven-snow.jpg" alt="周子渊在雪山阳光下的个人照片"><figcaption><span>BETWEEN ALTITUDE &amp; AMBITION</span><b>在更高处，保持好奇。</b></figcaption><i>01 / PERSONAL FRAME</i></figure><div class="hero-foot"><span>SELECTED WORK / RESEARCH / EXPERIMENTS</span><b>SCROLL TO EXPLORE ↓</b></div></section><aside class="hero-method" aria-label="工作方法"><span class="method-label">HOW I WORK / ALWAYS IN MOTION</span><div class="method-word"><i>01</i><strong>DEFINE</strong><small>走近用户，定义真正的问题</small></div><div class="method-word"><i>02</i><strong>BUILD</strong><small>把判断变成可运行的产品</small></div><div class="method-word"><i>03</i><strong>VERIFY</strong><small>用测试与证据持续校准</small></div><div class="method-signal"><b></b><span>PRODUCT × RESEARCH × AI</span></div></aside>
<div class="marquee"><div class="marquee-track">${'<span>LISTEN → DEFINE → PROTOTYPE → TEST → ITERATE → EVIDENCE → </span>'.repeat(8)}</div></div><div class="home-pulse-strip" aria-hidden="true"><span>USER INSIGHT</span><i></i><span>AGENT SYSTEM</span><i></i><span>FIELD RESEARCH</span><i></i><span>VISUAL STORY</span></div>
<section class="section core-section" id="work"><header class="section-head reveal"><span class="micro">01 / SELECTED WORK</span><h2><span class="title-line core-title-single">不是演示 AI，而是把它放进真实工作。</span></h2></header><div class="core-showcase">
  <a class="core-feature sourcing-feature reveal route-link" id="home-sourcing" href="#project/sourcing"><div class="core-copy"><span class="micro">CORE CASE 01 · AGENT PRODUCT</span><h3>AI 人才<br>Sourcing Agent</h3><p>20+ 位内部用户调研 · 17 类渠道 · 38 轮测试</p><b>查看产品进化 ↗</b></div><figure class="core-art sourcing-art"><img src="${A}sourcing-logo-centered-v1.jpg" alt="AI 人才 Sourcing Agent 标志" width="600" height="600" loading="eager" decoding="async"><span>V1 → V2 → V3</span></figure></a>
  <a class="core-feature tunnel-feature reveal route-link" id="home-tunnel" href="#project/tunnel"><div class="core-copy"><span class="micro">CORE CASE 02 · DOMAIN AI</span><h3>AI 隧道工程<br>智能助手</h3><p>1216 份资料 · 182 万+ 字知识库 · 93.2% 抽取准确率</p><b>查看工程工作流 ↗</b></div><div class="core-art tunnel-art"><img class="tunnel-art-image" src="${A}tunnel-blueprint-card-v1.jpg" alt="AI 辅助隧道工程扫描与风险识别示意图" width="1672" height="940" loading="eager" decoding="async"><div class="tunnel-line"><span>+109.0</span><b></b><span>+602.9</span></div><small>24.32 KM · KNOWLEDGE RANGE</small></div></a>
</div></section>
<section class="section research-section" id="research"><header class="section-head reveal"><span class="micro">02 / RESEARCH LAB</span><h2>研究，是另一种产品基本功。</h2></header><div class="research-list">${homeResearch.map((x,i)=>`<a class="research-row reveal route-link" id="home-${x[0]}" href="#project/${x[0]}"><span class="index">0${i+1}</span><div><small>${x[3]}</small><h3>${x[2]}</h3><p>问题定义 · 数据治理 · 实验设计 · 结果验证</p></div><strong>${x[1]}</strong><span class="go">↗</span></a>`).join('')}</div></section>
<section class="section experiments-section" id="lab"><header class="section-head reveal"><span class="micro">03 / SIDE EXPERIMENTS</span><h2 class="single-line-title">小东西，也要真正做出来。</h2></header><div class="experiment-list">
  <a class="experiment-row sticker-row reveal route-link" id="home-stickers" href="#project/stickers"><span class="exp-no">01</span><div><small>WECHAT · RELEASED</small><h3>个人卡通表情包</h3><p>605 下载 · 3,006 发送 · 年度优秀表情艺术家</p></div><figure><img src="${A}sticker-items/sticker-01.webp" alt="个人卡通表情作品"></figure><b>↗</b></a>
  <a class="experiment-row cat-row reveal route-link" id="home-cat" href="#project/cat"><span class="exp-no">02</span><div><small>WEB · LIVE</small><h3>研究生猫格测试</h3><p>把研究生生活观察做成 16 种可分享猫格</p></div><figure class="cat-cover-art"><span>16 PERSONALITIES</span><div class="cover-device"><img src="${A}cat-home-new.png" alt="研究生猫格测试真实首页"></div><i>PG CAT-TI</i></figure><b>↗</b></a>
  <a class="experiment-row resume-row reveal route-link" id="home-resume" href="#project/resume"><span class="exp-no">03</span><div><small>AI TOOL · PROTOTYPE</small><h3>简历与 JD 匹配助手</h3><p>解析简历，定位岗位匹配证据与能力差距</p></div><figure class="resume-cover-art"><img class="cover-overview" src="${A}resume-evidence-overview.png" alt="候选人能力分析"><img class="cover-skills" src="${A}resume-evidence-skills.png" alt="岗位技能匹配"><span>PDF → JD → EVIDENCE</span></figure><b>↗</b></a>
</div></section>
<section class="section beyond-section" id="beyond"><header class="section-head reveal"><span class="micro">04 / BEYOND THE WORK</span><h2 class="single-line-title">履历之外，是持续向前的生活。</h2></header><div class="beyond-freeform reveal"><article class="honor-ribbon"><header><span>01 / HONORS</span><h3>荣誉不是终点，<br>而是一次次被验证。</h3></header><ol><li><time>2022.07</time><div><b>全国特等奖</b><p>全国大学生测绘创新创业智能大赛 · 虚拟仿真数字测图比赛</p></div><strong>全国第 16</strong></li><li><time>2022.12</time><div><b>湖南省一等奖</b><p>湖南省第五届大学生测绘综合技能大赛 · GIS 应用赛项</p></div><strong>全省第 3</strong></li><li><time>2023.11</time><div><b>创新创业先进个人</b><p>把研究能力持续转化为可落地的实践</p></div><strong>PERSONAL</strong></li><li><time>2024.06</time><div><b>校级优秀毕业论文</b><p>湖南省地质灾害评估与 Web 可视化研究</p></div><strong>THESIS</strong></li><li><time>2020—2026</time><div><b>连续获得校级奖学金</b><p>本科至研究生阶段持续获得学业认可</p></div><strong>6 YEARS</strong></li></ol></article><article class="campus-journey"><span>02 / CAMPUS ROLES</span><h3>在集体中，<br>把事情组织起来。</h3><div class="campus-route"><div><i>本科 · 班级</i><b>组宣委员</b><p>负责班级宣传、活动组织与信息协同。</p></div><div><i>本科 · 学院党校</i><b>考监部副部</b><p>参与培训考核、考务组织与纪律监督。</p></div><div><i>研究生 · 学院</i><b>办公室副部</b><p>协助学院日常协作、材料统筹与活动支持。</p></div></div></article><article class="interest-scape"><span>03 / OFF DUTY</span><h3>离开屏幕，<br>也保持节奏与判断。</h3><div class="interest-words"><i>徒步爬山<small>向上走</small></i><i>羽毛球<small>速度与反应</small></i><i>数独<small>安静推演</small></i><i>象棋<small>全局判断</small></i><i>RAP<small>表达与节奏</small></i></div><p>体力、策略、专注与表达——这些兴趣也在塑造我处理问题的方式。</p></article></div></section>
<section class="section manifesto reveal"><div><h2>技术是解决问题的<span>杠杆</span>，<br>不是最终目的。</h2><p>我喜欢走近真实用户，从模糊的问题中找到关键约束；也愿意亲自搭建 Demo、构造测试集，让每一个产品判断都能回到证据。</p></div></section>
<footer class="contact" id="contact"><h2>LET'S MAKE SOMETHING REAL.</h2><div class="contact-row"><div><p>周子渊 · AI 产品经理</p><small>19971820537@163.com</small></div><button id="copy-email">复制邮箱</button><small>PORTFOLIO · 2026</small></div></footer>`}

function visual(c){const type=c[2],v=c[3],cap=c[4]||'';if(type==='image'||type==='wide')return `<div class="evidence-visual ${type==='wide'?'wide':''}"><img src="${A+v}" alt="${cap}"><div class="evidence-caption"><span>${cap}</span><span>VERIFIED ARTIFACT</span></div></div>`;if(type==='gallery')return `<div class="gallery">${v.map(x=>`<img src="${A+x}" alt="项目证据截图">`).join('')}</div>`;if(type==='flow')return `<div class="decision-flow">${v.map(x=>`<div><span>${x[0]}</span><b>${x[1]}</b></div>`).join('')}</div>`;return `<div class="data-display">${v.map(x=>`<div><strong class="count-up">${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div>`}
function metricStrip(items){return `<div class="case-metrics">${items.map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div>`}
function storyExit(homeId,homeName,nextId,nextKicker,nextName){return `<nav class="story-exit" aria-label="项目导航"><a class="story-home-link route-link" href="#home-${homeId}"><span>RETURN HOME</span><b>返回主页 · ${homeName}</b><i>↙</i></a><a class="story-next route-link" href="#project/${nextId}"><div><span class="story-kicker">${nextKicker}</span><h2>${nextName}</h2></div><span>↗</span></a></nav>`}
function sourcingStory(){return `<article class="case-study sourcing-case editorial-case">
  <section class="case-hero sourcing-hero"><div class="case-title"><span class="case-label">核心项目 01 · 人才寻访 Agent</span><h1><span class="nowrap">AI 人才</span> <span class="nowrap">Sourcing Agent</span></h1><p>把“搜索候选人”重做成一套可干预、可追溯、能够交付原始证据的寻访 Agent。</p></div><figure class="core-hero-screen"><img src="${A}sourcing-start.png" alt="AI 人才 Sourcing Agent 实时搜索过程"><figcaption><b>V3 · REAL-TIME AGENT</b><span>搜索 · 分析 · 验证 · 交付</span></figcaption></figure>${metricStrip([['20+','内部用户调研'],['17','人才渠道'],['38','任务测试'],['90%+','寻访提效']])}</section>
  <section class="case-panel evolution reveal"><header><span>01 / 产品进化</span><h2>三次重做，产品才真正成为 Agent。</h2><p>从对话 Demo 到任务工作台，再回到以自然语言驱动的开放式 Agent；每次变化都对应一轮真实使用反馈。</p></header><div class="version-stack"><figure><figcaption><b>V1</b><span>对话 Demo</span></figcaption><img src="${A}sourcing-v1.png" alt="V1 对话式人才寻访"></figure><figure><figcaption><b>V2</b><span>任务工作台</span></figcaption><img src="${A}sourcing-cover.png" alt="V2 任务工作台"></figure><figure><figcaption><b>V3</b><span>对话优先</span></figcaption><img src="${A}sourcing-v3-home.png" alt="V3 人才发现 Agent 首页"></figure></div></section>
  <section class="case-panel control reveal"><header><span>02 / 人机协同</span><h2><span class="title-line">Agent 负责执行，</span><span class="title-line">用户始终控制边界。</span></h2><p>搜索渠道、目标人数与执行状态都保持可见；用户可以确认、暂停或终止，而不是等待黑箱返回结果。</p></header><div class="control-grid"><figure class="screen-card primary-screen"><img src="${A}sourcing-start.png" alt="Agent 开始搜索并展示执行过程"><figcaption>实时过程 · 随时暂停或停止</figcaption></figure><figure class="screen-card modal-shot"><img src="${A}sourcing-channels.png" alt="用户选择人才搜索渠道"><figcaption>17 类渠道 · 由用户确认</figcaption></figure></div></section>
  <section class="case-panel strategy reveal"><header><span>03 / 搜索策略</span><h2>先理解要找什么人，再决定去哪里找。</h2><p>系统先形成候选人画像与关键词，再根据岗位特点规划渠道，避免把多渠道简单堆成接口列表。</p></header><figure class="edge-screen"><img src="${A}sourcing-strategy.png" alt="Agent 根据用户需求制定人才搜索策略"><figcaption>需求画像 · 关键词 · 渠道计划</figcaption></figure></section>
  <section class="case-panel evidence reveal"><header><span>04 / 证据交付</span><h2><span class="title-line">候选人不是一个分数，</span><span class="title-line">而是一组可核验的判断。</span></h2><p>匹配理由回到原始来源；无法验证的履历、联系方式与社区认可被明确标记为风险，而不是隐藏不确定性。</p></header><div class="evidence-pair"><figure class="screen-card private-shot"><img src="${A}sourcing-card.png" alt="候选人卡片与匹配证据"><i class="mask-name">公开展示 · 身份已隐藏</i><figcaption>匹配理由与能力证据</figcaption></figure><figure class="screen-card private-shot risk-shot"><img src="${A}sourcing-risk.png" alt="候选人风险与不确定项"><i class="mask-link">隐私信息已隐藏</i><figcaption>主动暴露无法验证的信息</figcaption></figure></div></section>
  <section class="case-panel outcome reveal"><header><span>05 / 真实验证</span><h2><span class="title-line">用真实任务验证，</span><span class="title-line">而不是只展示一个 Demo。</span></h2><p>一次 Agent 工程师寻访任务从 12 人初筛进入 6 人深审，最终交付 1 名具有五条原始证据的候选人。</p></header>${metricStrip([['257','累计发现'],['59','深度审核'],['70%','严格匹配'],['90%','触达覆盖']])}<div class="task-proof"><strong>19 MIN</strong><span class="proof-details"><span>12 人初筛 → 6 人深审 → 1 人交付</span><span>5 条原始证据 · ¥1.57 Token 成本</span></span></div></section>
  ${storyExit('sourcing','AI 人才 Sourcing Agent','tunnel','NEXT CORE CASE','AI 隧道工程智能助手')}</article>`}

function tunnelStory(){return `<article class="case-study tunnel-case editorial-case">
  <section class="case-hero tunnel-hero"><div class="case-title"><span class="case-label">核心项目 02 · 垂直领域 AI</span><h1><span class="nowrap">AI 隧道工程</span><br><span class="nowrap">智能助手</span></h1><p>让大模型理解里程区间、地质风险与历史案例，把分散工程资料变成可以直接调用的专业能力。</p></div><figure class="core-hero-screen"><img src="${A}tunnel-risk.png" alt="AI 隧道工程智能助手施工风险分析界面"><figcaption><b>DK1013+180 — DK1013+220</b><span>施工风险分析</span></figcaption></figure>${metricStrip([['1,216','地质资料'],['182万+','知识库字数'],['93.2%','抽取准确率'],['4','核心任务']])}</section>
  <section class="case-panel tunnel-problem reveal"><header><span>01 / 知识治理</span><h2>让复杂的工程资料，成为现场可调用的知识。</h2><p>先统一里程格式、清洗空值并提取十类风险字段，再让自然语言查询进入结构化知识库。</p></header><div class="knowledge-map"><div><b>1,216</b><span>分散 JSON</span></div><i>→</i><div><b>24.32km</b><span>标准化里程</span></div><i>→</i><div><b>93.2%</b><span>字段抽取</span></div><i>→</i><div class="active"><b>4</b><span>专业任务</span></div></div></section>
  <section class="case-panel workflow-panel reveal"><header><span>02 / Agent 系统</span><h2>一条自然语言请求，进入多分支工程工作流。</h2><p>意图识别后分别进入信息检索、风险分析、相似案例或报告生成，再统一返回可追溯结果。</p></header><div class="workflow-rail"><img src="${A}tunnel-workflow.png" alt="AI 隧道工程智能助手完整工作流"></div><div class="workflow-hint"><span>横向浏览完整工作流</span><i></i><b>SCROLL →</b></div></section>
  <section class="case-panel field-task reveal"><header><span>03 / 现场任务</span><h2>从风险判断，回到可以复用的工程经验。</h2><p>风险分析定位关键里程段，相似案例进一步返回共同特征与历史处置建议。</p></header><div class="field-layout"><figure class="screen-card main-task"><img src="${A}tunnel-risk.png" alt="指定里程段施工风险分析"><figcaption>施工风险分析 · 指定里程段</figcaption></figure><figure class="screen-card related-task"><img src="${A}tunnel-case.png" alt="相似地质案例分析"><figcaption>相似案例 · 经验借鉴</figcaption></figure></div></section>
  <section class="case-panel report-panel reveal"><header><span>04 / 最终交付</span><h2>最终交付不是聊天记录，而是一份结构化报告。</h2><p>指定里程范围后，系统整合地层、围岩、不良地质、风险与案例信息，自动生成地质综合分析报告。</p></header><figure class="edge-screen"><img src="${A}tunnel-report.png" alt="自动生成隧道地质综合分析报告"><figcaption>地质综合分析报告 · 自动生成</figcaption></figure></section>
  <section class="case-panel outcome tunnel-outcome reveal"><header><span>05 / 内部验证</span><h2>可运行 Demo，已经完成专项测试。</h2><p>当前结论来自内部功能验证；下一阶段仍需进入真实施工任务，继续测试报告质量与现场可用性。</p></header>${metricStrip([['80→100%','意图准确率'],['15→0%','无回复率'],['24','专项测试'],['97.9%','重点字段准确率']])}</section>
  ${storyExit('tunnel','AI 隧道工程智能助手','vision','NEXT · RESEARCH','复杂隧道场景下不良地质智能识别')}</article>`}

function visionStory(){return `<article class="vision-story">
  <section class="vision-hero">
    <div class="vision-hero-copy"><span>科研项目 01 · 国家重点研发计划 · 第一作者</span><h1><span>复杂结构里，</span><span>识别真正的</span><i>地质风险。</i></h1><p>针对正常样本占优、出水与断裂带视觉证据差异明显的问题，项目构建条件门控异构特征残差级联网络，让粗粒度不良地质上下文参与细粒度类型识别。</p></div>
    <figure class="vision-hero-image"><img src="${A}vision-paper-hero.jpg" alt="复杂钢筋与拱架背景中的隧道出水现场影像"><figcaption><b>真实施工影像</b><span>出水 · 钢筋网 · 拱架 · 设备干扰</span></figcaption></figure>
    <div class="vision-crosshair" aria-hidden="true"><i></i><i></i><b>FIELD / 01</b></div>
    ${metricStrip([['2,749','独立影像'],['413','固定测试集'],['97.09%','准确率'],['88.89%','宏平均 F1']])}
  </section>
  <section class="vision-panel vision-field reveal">
    <header><span>01 / 数据构成</span><h2>模型训练之前，先看清样本结构。</h2><p>以单幅独立影像为观察单位，采用固定随机种子42进行7∶1.5∶1.5分层划分，使训练、验证和测试集保持近似一致的类别比例。</p></header>
    <div class="vision-field-grid"><figure><img src="${A}vision-paper-water.jpg" alt="真实隧道出水样本"><figcaption><b>出水</b><span>渗流与湿润纹理叠加结构背景</span></figcaption></figure><figure><img src="${A}vision-paper-fracture.jpg" alt="真实隧道断裂带样本"><figcaption><b>断裂带</b><span>碎裂结构与钢筋、拱架边缘共存</span></figcaption></figure></div>
    <div class="vision-audit"><div><b>2,484</b><span>正常影像</span></div><div><b>128</b><span>出水影像</span></div><div><b>137</b><span>断裂带影像</span></div><div><b>7∶1.5∶1.5</b><span>分层划分</span></div></div>
  </section>
  <section class="vision-panel vision-result reveal">
    <header><span>02 / 固定测试结果</span><h2>总体准确之外，更关注少数类。</h2><p>固定测试集包含373幅正常、19幅出水和21幅断裂带影像。模型没有混淆出水与断裂带，主要误差来自不良地质被判为正常。</p></header>
    <div class="vision-matrix-pair">
      <figure class="vision-matrix vision-matrix-counts"><span>01 / COUNTS</span><img src="${A}vision-confusion-counts.png" alt="测试集原始计数混淆矩阵"><figcaption>原始计数</figcaption></figure>
      <figure class="vision-matrix vision-matrix-normalized"><span>02 / RATIO</span><img src="${A}vision-confusion-normalized.png" alt="按真实类别归一化的混淆矩阵"><figcaption>真实类别归一化</figcaption></figure>
    </div>
    <div class="vision-result-strip"><div><span>准确率</span><b>97.09%</b></div><div><span>宏平均 F1</span><b>88.89%</b></div><div><span>出水 F1</span><b>81.08%</b></div><div><span>断裂带 F1</span><b>87.18%</b></div></div>
  </section>
  <section class="vision-panel vision-robust reveal">
    <header><span>03 / 少数类排序性能</span><h2>只看准确率，会掩盖尾类风险。</h2><p>以连续后验概率绘制一对其余精确率–召回率曲线。断裂带在较高召回区间保持更高精确率，出水类内表观差异仍是主要限制。</p></header>
    <figure class="vision-chart"><img src="${A}vision-paper-pr.png" alt="出水与断裂带类别的精确率召回率曲线"><figcaption>固定测试集 · 出水与断裂带 Precision–Recall 曲线</figcaption></figure>
    <div class="vision-gains"><div><b>86.81%</b><span>出水平均精确率</span></div><div><b>90.46%</b><span>断裂带平均精确率</span></div></div>
  </section>
  <section class="vision-panel vision-explain reveal">
    <header><span>04 / 可解释性与边界</span><h2>不仅看结果，也检查模型看向哪里。</h2><p>Grad-CAM 用于核查三条异构表征分支的关注区域；错误样本被单独保留，用来暴露反光、钢筋网与设备遮挡造成的混淆。</p></header>
    <div class="vision-evidence-stage">
      <figure class="vision-cam"><img src="${A}vision-paper-gradcam-selected.png" alt="正常、出水和断裂带样本及异构表征分支的 Grad-CAM 激活图"><figcaption>原始影像 → 不良地质分支 → 出水与类型判别分支</figcaption></figure>
      <figure class="vision-errors"><img src="${A}vision-paper-errors-selected.png" alt="正常误报与不良地质漏检的代表性测试样本"><figcaption><b>12 幅误分类影像</b><span>8 幅不良地质漏检 · 4 幅正常影像误报</span></figcaption></figure>
    </div>
  </section>
  ${storyExit('vision','不良地质智能识别','hunan','NEXT RESEARCH','湖南省地质灾害评估与 Web 可视化')}
</article>`}

function stickerStory(){const stickers=Array.from({length:10},(_,i)=>`${A}sticker-items/sticker-${String(i+1).padStart(2,'0')}.webp`);return `<article class="mini-story sticker-story">
  <section class="mini-hero"><div class="mini-copy"><span>SIDE EXPERIMENT 01 · RELEASED</span><h1>把自己做成<br>一套表情包。</h1><p>从个人照片到稳定角色，再到微信平台上的真实使用。</p>${metricStrip([['605','累计下载'],['3,006','累计发送'],['原创','作品类型'],['2025','平台获奖']])}</div><div class="sticker-stage sticker-wall">${stickers.map((src,i)=>`<figure style="--i:${i}"><img src="${src}" alt="个人卡通表情 ${i+1}"></figure>`).join('')}<i>10 ORIGINAL STICKERS</i></div></section>
  <section class="mini-panel sticker-impact reveal"><div><span>REAL USAGE</span><h2><span class="title-line">不是生成一组图片，</span><span class="title-line">而是做出真正被发送的作品。</span></h2><div class="usage-bars"><i style="--v:60%"><b>605</b><small>DOWNLOADS</small></i><i style="--v:88%"><b>3,006</b><small>SENDS</small></i></div></div><figure><img src="${A}sticker-award.png" alt="2025 年度优秀表情艺术家奖励通知"><figcaption>微信表情开放平台 · 2025 年度优秀表情艺术家</figcaption></figure></section>
  <section class="mini-end sticker-end reveal"><span>FROM PHOTO → CHARACTER → RELEASE</span><div class="sticker-download-row"><h2>一次小型的多模态产品闭环。</h2><div class="sticker-qr"><div><strong>扫码下载表情包</strong><small>微信扫码即可打开</small></div><img src="${A}sticker-qr.png" alt="微信表情包下载二维码"></div></div></section>
  ${storyExit('stickers','个人卡通表情包','cat','NEXT EXPERIMENT','研究生猫格测试')}</article>`}

function catStory(){const scrollCats=Array.from({length:16},(_,i)=>`${A}cat-scroll/cat-${String(i+1).padStart(2,'0')}.webp`),resultCats=Array.from({length:16},(_,i)=>`${A}cat-results/result-${String(i+1).padStart(2,'0')}.webp`);return `<article class="mini-story cat-story">
  <section class="mini-hero cat-hero"><div class="mini-copy"><span>SIDE EXPERIMENT 02 · LIVE WEB</span><h1 class="cat-single-title">研究生猫格测试</h1><p>把研究生生活中的性格与状态，转化成 16 种值得分享的猫咪人格。</p>${metricStrip([['16','猫格类型'],['20','情境问题'],['LIVE','线上运行'],['Vue','前端实现']])}</div><figure class="phone-stage site-shot"><div class="cat-home-frame"><img src="${A}cat-home-custom.png" alt="研究生猫格测试真实首页"></div></figure></section>
  <section class="mini-panel cat-flow reveal"><header><span>REAL WEBSITE FLOW</span><h2 class="wide-line-title">从答题，到可分享猫格。</h2></header><div class="phone-pair"><figure class="test-crop"><img src="${A}cat-test-custom.png" alt="猫格测试真实答题页面"><figcaption>真实答题页面</figcaption></figure><i>→</i><figure class="result-mosaic"><div class="result-profile"><img src="${A}cat-result-profile-custom.png" alt="猫格角色形象与人格标签"></div><div class="result-radar"><img src="${A}cat-result-radar-custom.png" alt="猫格能力雷达图"></div><div class="result-copy"><img src="${A}cat-result-copy-custom.png" alt="猫格人格解释"></div><figcaption>角色形象 · 能力图谱 · 人格说明</figcaption></figure></div></section>
  <section class="cat-universe reveal"><div class="cat-universe-copy"><span>16 × 2 VISUAL SYSTEM</span><h2><span class="title-line">16 种猫格，不只是测试结果，</span><span class="title-line">更是一套可识别、可分享的视觉系统。</span></h2></div><div class="cat-ribbon scroll-ribbon">${[...scrollCats,...scrollCats].map((src,i)=>`<img src="${src}" alt="首页滚动猫咪 ${(i%16)+1}">`).join('')}</div><div class="cat-ribbon result-ribbon">${[...resultCats,...resultCats].map((src,i)=>`<img src="${src}" alt="猫格结果 ${(i%16)+1}">`).join('')}</div><a href="https://pg-cat-ti.top" target="_blank" rel="noreferrer">在线体验猫格测试 ↗</a></section>
  ${storyExit('cat','研究生猫格测试','resume','NEXT EXPERIMENT','AI 简历与 JD 匹配助手')}</article>`}

function resumeStory(){return `<article class="mini-story resume-story">
  <section class="mini-hero resume-hero"><div class="mini-copy"><span>SIDE EXPERIMENT 03 · AI TOOL</span><h1>AI 简历与 JD<br>匹配助手</h1><p>把非结构化简历转成候选人画像，并定位岗位匹配证据与能力差距。</p>${metricStrip([['PDF','简历输入'],['JD','岗位解析'],['RAG','知识查询'],['Agent','流程编排']])}</div><figure class="resume-stage"><img src="${A}resume-jd.png" alt="上传简历并输入岗位描述"></figure></section>
  <section class="mini-panel resume-result reveal"><header><span>INPUT → EVIDENCE</span><h2 class="wide-line-title">不只给匹配分，还要说明为什么。</h2></header><div class="resume-layout"><div class="resume-evidence-pair"><figure><img src="${A}resume-evidence-overview.png" alt="候选人技术栈与专业技能分析"></figure><figure><img src="${A}resume-evidence-skills.png" alt="岗位必备技能匹配结果"></figure></div><div class="ability-ledger"><div><b>01</b><span>简历结构化解析</span></div><div><b>02</b><span>岗位要求拆解</span></div><div><b>03</b><span>能力证据查询</span></div><div><b>04</b><span>差距与建议生成</span></div></div></div></section>
  <section class="mini-end resume-end reveal"><span>RUNNABLE PROTOTYPE · PUBLIC REPOSITORY</span><div class="resume-end-row"><h2>把求职判断变成可解释的分析。</h2><a class="repo-link" href="https://github.com/zzy127127/ai-recruitment-assistant" target="_blank" rel="noreferrer">查看项目仓库 ↗</a></div></section>
  ${storyExit('resume','AI 简历与 JD 匹配助手','sourcing','BACK TO CORE CASE','AI 人才 Sourcing Agent')}</article>`}

function hunanStory(){return `<article class="hunan-story">
  <section class="hunan-hero">
    <div class="hunan-hero-copy"><span>RESEARCH 02 · 优秀本科毕业论文</span><h1><span class="title-line">湖南省</span><span class="title-line">地质灾害</span><span class="title-line">评估 <i>× Web</i></span></h1><p>用三种空间尺度、六种模型，把 8082 处灾害记录转化为可浏览、可比较的风险决策界面。</p>${metricStrip([['8082','灾害记录'],['3','空间尺度'],['6','对比模型'],['0.829','最佳 AUC']])}</div>
    <figure class="hunan-hero-screen"><img src="${A}hunan-dashboard-risk.png" alt="湖南省地质灾害风险分析可视化大屏"><figcaption><b>WEBGL / THINGJS</b><span>风险分析 · 多尺度联动</span></figcaption></figure>
    <div class="hunan-stamp"><b>0.829</b><span>BEST AUC</span></div>
  </section>
  <section class="hunan-panel hunan-scope reveal">
    <header><span>01 / DATA → METHOD</span><h2>先看见 8082 个点，再建立一条评估链。</h2></header>
    <div class="hunan-source-grid">
      <figure class="hunan-disaster-map"><img src="${A}hunan-disasters.jpg" alt="湖南省 8082 处地质灾害分布图"><figcaption>2011—2021 · 湖南省地质灾害分布</figcaption></figure>
      <div class="hazard-ledger" aria-label="五类地质灾害数量"><div><b>5329</b><span>滑坡</span></div><div><b>856</b><span>斜坡</span></div><div><b>791</b><span>崩塌</span></div><div><b>753</b><span>地面塌陷</span></div><div><b>353</b><span>泥石流</span></div></div>
    </div>
  </section>
  <section class="hunan-panel hunan-models reveal">
    <header><span>02 / MODEL COMPARISON</span><h2>同样的模型，换一个尺度再验证。</h2><p>集成模型在三种尺度上均优于单一统计模型；尺度越细，预测表现越高。</p></header>
    <div class="roc-deck">
      <figure><span>COUNTY</span><img src="${A}hunan-roc-county.png" alt="县级行政尺度六种模型 ROC 曲线"><figcaption><b>0.766</b> LightGBM-IV AUC</figcaption></figure>
      <figure><span>TOWNSHIP</span><img src="${A}hunan-roc-town.png" alt="乡级行政尺度六种模型 ROC 曲线"><figcaption><b>0.818</b> LightGBM-IV AUC</figcaption></figure>
      <figure><span>4KM GRID</span><img src="${A}hunan-roc-grid.png" alt="4km 网格尺度六种模型 ROC 曲线"><figcaption><b>0.829</b> LightGBM-IV AUC</figcaption></figure>
    </div>
  </section>
  <section class="hunan-panel hunan-scale reveal">
    <header><span>03 / MULTI-SCALE RESULT</span><h2>从行政区划，走向 4km 风险网格。</h2></header>
    <div class="scale-ladder">
      <figure><div><b>01</b><span>县级行政</span><strong>AUC 0.766</strong></div><img src="${A}hunan-best-county.jpg" alt="县级尺度 LightGBM-IV 风险评估结果"></figure>
      <figure><div><b>02</b><span>乡级行政</span><strong>AUC 0.818</strong></div><img src="${A}hunan-best-town.jpg" alt="乡级尺度 LightGBM-IV 风险评估结果"></figure>
      <figure><div><b>03</b><span>4km 网格</span><strong>AUC 0.829</strong></div><img src="${A}hunan-best-grid.jpg" alt="4km 网格尺度 LightGBM-IV 风险评估结果"></figure>
    </div>
    <div class="best-model"><span>BEST MODEL</span><b>LightGBM‑IV</b><p>Accuracy 0.752 · Precision 0.757 · Recall 0.753 · F1 0.755</p></div>
  </section>
  <section class="hunan-panel hunan-web reveal">
    <header><span>04 / RESEARCH → PRODUCT</span><h2>研究结果，最终变成可操作界面。</h2><p>尺度切换、单元弹窗、风险分析与风险预测被组织进同一个 3D Web 大屏。</p></header>
    <div class="dashboard-stack"><figure><img src="${A}hunan-dashboard-home.png" alt="湖南省地质灾害风险可视化大屏主界面"><figcaption>主界面 · 多尺度空间总览</figcaption></figure><figure><img src="${A}hunan-dashboard-predict.png" alt="湖南省地质灾害风险预测界面"><figcaption>风险预测 · 模型与精度联动</figcaption></figure></div>
    <div class="web-capabilities"><span>尺度切换</span><span>属性弹窗</span><span>风险分析</span><span>风险预测</span></div>
  </section>
  ${storyExit('hunan','湖南省地质灾害评估','sci','NEXT RESEARCH','多源地理数据与空间聚类建模')}
</article>`}

function sciStory(){return `<article class="sci-story">
  <section class="sci-hero">
    <div class="sci-hero-copy"><span>科研项目 03 · SCIENTIFIC REPORTS · 第二作者</span><h1><span>空间聚类</span><span><i>不是</i>最后一步。</span></h1><p>融合多源地理数据、Geo-SOM 与线性混合模型，解释综合地质灾害指数为何在不同区域呈现不同响应。</p>${metricStrip([['121','县级单元'],['5','空间聚类'],['9','数值因子'],['0.214','最佳 σ']])}</div>
    <figure class="sci-hero-figure"><img src="${A}sci-paper-cover.png" alt="Scientific Reports 论文首页标题与作者信息"><figcaption><span>论文首页</span><b>2025 · 开放获取</b></figcaption></figure>
    <div class="sci-paper-mark"><span>SCIENTIFIC</span><b>REPORTS</b><small>2025 · 15:1982</small></div>
  </section>
  <section class="sci-panel sci-scope reveal">
    <header><span>01 / 研究对象</span><h2>先把五类灾害，压缩成一张风险底图。</h2><p>五类灾害共同构成综合地质灾害指数（GI）。</p></header>
    <div class="sci-scope-grid"><figure><img src="${A}sci-fig1-hazard-index.png" alt="湖南省综合地质灾害指数空间分布"><figcaption>综合地质灾害指数空间分布</figcaption></figure><div class="sci-input-ledger"><div><b>121</b><span>县级样本</span></div><div><b>5</b><span>灾害类型</span></div><div><b>9 + 2</b><span>数值因子 + 分类因子</span></div><div><b>GI</b><span>综合地质灾害指数</span></div></div></div>
  </section>
  <section class="sci-panel sci-cluster reveal">
    <header><span>02 / 为什么需要空间信息</span><h2>加入地理位置后，聚类才真正属于空间。</h2></header>
    <figure class="cluster-comparison"><img src="${A}sci-fig4-clusters.png" alt="SOM 与 Geo-SOM 聚类空间分布对比"><figcaption><span>SOM：空间分布较零散</span><span>Geo-SOM：形成明确的连续区域</span></figcaption></figure>
    <div class="model-race"><div><span>GLS 基准模型</span><b>σ 0.413</b><small>AIC 38.227</small></div><i>→</i><div><span>LMM + SOM</span><b>σ 0.256</b><small>AIC 35.193</small></div><i>→</i><div class="winner"><span>LMM + GEO-SOM</span><b>σ 0.214</b><small>AIC 32.967 · 最优</small></div></div>
  </section>
  <section class="sci-panel sci-components reveal">
    <header><span>03 / 模型内部</span><h2>模型看见的，不只是一个聚类标签。</h2><p>组件平面揭示环境因子与 GI 的共同变化，并将稳定的驱动因素交给混合效应模型验证。</p></header>
    <figure><img src="${A}sci-fig5-components.png" alt="SOM 与 Geo-SOM 的 U-matrix 和影响因子组件平面"><figcaption>聚类距离与影响因子组件平面</figcaption></figure>
    <div class="factor-picks"><div><b>Pre</b><span>年均降水</span><small>与 GI 相关系数 0.753</small></div><div><b>Pro_cur</b><span>剖面曲率</span><small>与 GI 相关系数 0.714</small></div><div><b>Slo</b><span>坡度</span><small>与 GI 相关系数 0.623</small></div></div>
  </section>
  <section class="sci-panel sci-response reveal">
    <header><span>04 / 分区响应</span><h2 class="sci-response-title">相同因素，在不同区域作用不同。</h2><p>混合效应模型把空间聚类作为随机效应，进一步解释区域异质性。</p></header>
    <div class="response-grid"><figure><img src="${A}sci-fig6-mixed-effects.png" alt="不同 Geo-SOM 聚类下关键因子与 GI 的响应关系"><figcaption>三个关键因素在五类区域中的不同响应</figcaption></figure><figure><img src="${A}sci-fig7-context-effects.png" alt="森林与石灰岩比例对区域差异的解释"><figcaption>森林覆盖与石灰岩比例对区域差异的解释</figcaption></figure></div>
    <div class="context-results"><div><span>森林覆盖比例</span><b>R² 0.76</b><small>解释剖面曲率的区域响应差异</small></div><div><span>石灰岩比例</span><b>R² 0.85</b><small>解释坡度的区域响应差异</small></div><div class="author-role"><span>个人贡献</span><b>第二作者</b><small>数据治理 · 软件开发与实现 · 论文制图</small></div></div>
  </section>
  <section class="sci-download reveal"><span>SCIENTIFIC REPORTS · 2025</span><a href="./assets/downloads/zhou-ziyuan-sci-paper.pdf" download="周子渊-SCI论文原文.pdf">下载原文 <i aria-hidden="true">↓</i></a></section>
  ${storyExit('sci','空间聚类建模','stickers','NEXT EXPERIMENT','把自己做成一套获奖表情包')}
</article>`}

function story(key){if(key==='sourcing')return sourcingStory();if(key==='tunnel')return tunnelStory();if(key==='vision')return visionStory();if(key==='stickers')return stickerStory();if(key==='cat')return catStory();if(key==='resume')return resumeStory();if(key==='hunan')return hunanStory();if(key==='sci')return sciStory();const p=projects[key];if(!p)return home();const keys=Object.keys(projects),next=keys[(keys.indexOf(key)+1)%keys.length],np=projects[next];return `<article class="story" style="--story-bg:${p.bg};--story-accent:${p.accent}"><section class="story-hero"><div><span class="story-kicker">${p.kind}</span><h1>${p.title}</h1><p>${p.lead}</p><div class="metrics">${p.metrics.map(x=>`<div class="metric"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div></div><div class="story-cover"><img src="${A+p.cover}" alt="${p.title}代表图"></div></section>${p.chapters.map((c,i)=>`<section class="story-chapter reveal ${i%3===1?'tint':i%3===2?'dark':''}"><div class="chapter-copy"><span class="chapter-no">CHAPTER ${String(i+1).padStart(2,'0')}</span><h2>${c[0]}</h2><p>${c[1]}</p></div>${visual(c)}</section>`).join('')}<a class="story-next route-link" href="#project/${next}"><div><span class="story-kicker">NEXT PROJECT</span><h2>${np.title}</h2></div><span>↗</span></a></article>`}

function settleHomeTarget(targetId){const go=()=>{const target=targetId&&document.getElementById(targetId),root=document.documentElement,previous=root.style.scrollBehavior;root.style.scrollBehavior='auto';if(target){const documentTop=window.scrollY+target.getBoundingClientRect().top;window.scrollTo(0,Math.max(0,documentTop-74))}else if(!targetId)window.scrollTo(0,0);root.style.scrollBehavior=previous};go();requestAnimationFrame(()=>requestAnimationFrame(go))}
function prepareImages(){const priority='.hero-photo-card img,.core-hero-screen img,.vision-hero-image img,.hunan-hero-screen img,.sci-hero-figure img,.mini-hero img';document.querySelectorAll('img').forEach(img=>{img.decoding='async';if(img.matches(priority)){img.loading='eager';img.fetchPriority='high'}else{img.loading='lazy';img.fetchPriority='auto'}})}
function render(){const hash=location.hash||'#home',match=hash.match(/^#project\/(.+)$/),targetId=!match?hash.slice(1):'';document.body.classList.remove('menu-open');document.querySelector('.menu-button').textContent='MENU';document.querySelector('.menu-button').setAttribute('aria-expanded','false');document.body.classList.add('is-transitioning');document.querySelector('.transition-curtain').classList.add('show');setTimeout(()=>{app.innerHTML=match?story(match[1]):home();prepareImages();bind();settleHomeTarget(targetId);document.querySelector('.transition-curtain').classList.remove('show');document.body.classList.remove('is-transitioning')},420)}
function bind(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));const copy=document.querySelector('#copy-email');if(copy)copy.onclick=async()=>{await navigator.clipboard.writeText('19971820537@163.com');copy.textContent='已复制 ✓';setTimeout(()=>copy.textContent='复制邮箱',1600)};const menu=document.querySelector('.menu-button'),nav=document.querySelector('.topbar nav');menu.onclick=()=>{const open=document.body.classList.toggle('menu-open');menu.textContent=open?'CLOSE':'MENU';menu.setAttribute('aria-expanded',String(open))};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{document.body.classList.remove('menu-open');menu.textContent='MENU';menu.setAttribute('aria-expanded','false')})}
window.addEventListener('hashchange',render);window.addEventListener('scroll',()=>{const h=document.documentElement;document.querySelector('.scroll-progress i').style.width=`${scrollY/(h.scrollHeight-innerHeight)*100}%`},{passive:true});
const cursor=document.querySelector('.cursor-orbit');window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';cursor.classList.toggle('active',!!e.target.closest('a,button'))});
const canvas=document.querySelector('#ambient'),ctx=canvas.getContext('2d');let dots=[];function size(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.scale(devicePixelRatio,devicePixelRatio);dots=Array.from({length:Math.min(28,Math.floor(innerWidth/45))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.3+.3,v:Math.random()*.18+.05}))}function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);ctx.fillStyle='rgba(17,19,15,.25)';dots.forEach(d=>{d.y-=d.v;if(d.y<0)d.y=innerHeight;ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}addEventListener('resize',size);size();draw();
history.scrollRestoration='manual';const navigationEntry=performance.getEntriesByType('navigation')[0];if(navigationEntry?.type==='reload'&&!location.hash.startsWith('#project/')){history.replaceState(null,'',`${location.pathname}${location.search}#home`)}window.scrollTo(0,0);render();
