/**
 * 新聞資料庫
 * 包含所有遊戲中使用的新聞數據
 */

export const CARD_STATUS = {
  default: "default",
  verifying: "verifying",
  disabled: "disabled",
};

//titleIndex: 0 = 超級聳動, 1 = 一般聳動, 2 = 平鋪直敘
export const NEWS_DATABASE = [
  {
    id: 1,
    title: "市長與建商深夜密會！疑似圖利千萬土地交易！",
    description:
      "一張模糊的側拍照，顯示某市長在深夜時段進入某開發商辦公大樓，並指稱內部人士透露涉及一筆金額巨大的未公開土地交易。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "黑金屠城！市長深夜賣掉整座市，建商密室分贓千萬照片曝光！" },
      { name: "獨家爆料！市長深夜出沒建商大樓，密談千萬土地開發案？" },
      { name: "網路流傳市長深夜與建商代表會面，市府尚未對此做出回應。" },
    ],
  },
  {
    id: 2,
    title: "震驚！政府將於下月調漲健保費 20%！全民譁然！",
    description:
      "某匿名財經人士聲稱獲得內部消息，因醫療虧空，衛福部將在下個月緊急宣布大幅調漲健保費。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "政府搶錢！下個月健保狂漲 20% 百姓荷包被掏空" },
      { name: "健保費要漲了？內部會議文件外流 漲幅恐高達 20% 起跳" },
      { name: "社群媒體傳言健保費將調漲 衛生署研議調整方案" },
    ],
  },
  {
    id: 3,
    title: "某國小營養午餐驚見「腐爛肉品」！數十學童腹瀉送醫！",
    description:
      "網傳某國小營養午餐出現腐爛肉塊，並附上噁心照片，稱數十名學童腹瀉，指控某知名國小的營養午餐出現嚴重衛生問題。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "喪盡天良！國小午餐餵學童吃「屍水腐肉」 校門口急救車鳴笛不斷！" },
      { name: "學童集體腹瀉！家長踢爆：這所國小的午餐肉片竟然是爛的？" },
      { name: "網路流傳某校午餐衛生疑慶 教育局已派員前往抽驗肉品" },
    ],
  },
  {
    id: 4,
    title: "某牌感冒藥驚傳含「致命毒素」！醫界要求全面下架！",
    description:
      "一則署名「某知名醫院藥師」的 Line 訊息截圖，宣稱該藥物會導致肝腎衰竭，呼籲民眾立即停止服用並拋棄。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "吃藥等於自殺！國民感冒藥驚爆致命毒素 醫生崩潰吶喊：快丟掉！" },
      { name: "藥界醜聞？知名牌感冒藥傳含致癌成分 藥師呼籲民眾暫停服用" },
      { name: "有關部分感冒藥品成分安全爭議 相關單位正進行抽樣檢驗" },
    ],
  },
  {
    id: 5,
    title: "「洋蔥配優酪乳」可 100% 治癒癌症",
    description:
      "引用一位自稱「諾貝爾獎提名科學家」的說法，推廣一種簡單的民間偏方，並聲稱這是被藥廠隱藏的秘密。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "醫生氣瘋了！諾貝爾科學家揭露：廚房這兩樣東西，100% 根除癌症！" },
      { name: "癌症救星？網傳洋蔥加優酪乳能治百病 上萬人轉載的神奇祕方" },
      {
        name: "醫學專家建議 針對網路流傳之食療治癌偏方應審慎查證 切勿自行停藥",
      },
    ],
  },
  {
    id: 6,
    title: "突發！當紅偶像 A 傳出深夜酒駕，遭警方逮捕！",
    description:
      "某狗仔隊在社群媒體上傳了一張疑似偶像 A 戴口罩在警局外的照片，且配文語氣肯定，要求粉絲「不要護航」。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "優質形象全毀！天王偶像 A 爛醉駕車被捕，警局落魄照慘遭流出！" },
      { name: "突發！偶像 A 遭爆酒駕疑雲 現身警局門口引發熱議" },
      { name: "媒體報導藝人 A 疑涉及交通違規事件 經紀公司表示正在瞭解中" },
    ],
  },
  {
    id: 7,
    title: "知名 YouTuber B 宣布退圈！疑似捲入百萬詐欺案！",
    description:
      "一篇來自不知名論壇的長文，詳述 YouTuber B 如何利用業配進行詐欺，且多位匿名受害者提供「證據」截圖。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "百萬網紅是騙子！YouTuber B 捲走上億人間蒸發，受害者名單大公開！",
      },
      { name: "震驚！知名 YouTuber B 遭控大規模詐騙 論壇踢爆手法與證據" },
      { name: "網路創作人 B 近期面臨多項財務合約爭議 引起粉絲與合作方關注" },
    ],
  },
  {
    id: 8,
    title: "巴西男臥推被砸胸 起身數秒後倒地不治",
    description:
      "巴西一名博物館館長在進行臥推訓練時，槓鈴意外滑落壓中胸口。雖然他當下成功將槓鈴推開並試圖站起，但隨即倒地，送醫後仍宣告不治。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "館長臥推失誤遭「槓鈴壓胸」身亡！監視器曝光生前畫面",
        reliability: 44,
        fansCount: 4800,
      },
      {
        name: "死亡健身！「大叔館長」被槓鈴壓胸1下 起身後倒地身亡",
        reliability: 37,
        fansCount: 3000,
      },
      {
        name: "博物館館長死亡健身 被槓鈴壓胸倒地身亡",
        reliability: 50,
        fansCount: 6000,
      },
    ],
  },
  {
    id: 9,
    title: "中央氣象署示警 小心規模5餘震",
    description:
      "嘉義大埔今日發生規模6.4地震，氣象署表示，本起地震深度極淺，就連北台灣也顯著有感，地震需要釋放能量，未來3天內得小心規模5.0的餘震。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "嘉義6.4地震「釋放2顆原子彈能量」 專家示警「巧合位置」：有大地震機率",
        reliability: 44,
        fansCount: 4800,
      },
      {
        name: "台南震不停！專家示警「不對勁」 提醒恐有更大地震",
        reliability: 37,
        fansCount: 3000,
      },
      {
        name: "嘉南6.4強震與「口宵里斷層」較接近 3天內恐有規模5餘震",
        reliability: 50,
        fansCount: 6000,
      },
    ],
  },
  {
    id: 10,
    title: "愛吃起司的人，失智風險更低？",
    description:
      "日本食品公司委託一項大型研究。追蹤研究顯示，每週固定攝取起司的長者，在後續三年間發生失智的比例，略低於完全不吃起司者。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "日本研究證實！「1發酵物」能防失智：一週一次就見效" },
      { name: "吃起司防失智！日本7千人研究曝：1周1次就有感" },
      { name: "日研究「1周吃1次起司」老人失智率少1%" },
    ],
  },
  {
    id: 11,
    title: "黃仁勳：AI 世界末日不會發生，90% 知識將由 AI 產出",
    description:
      "NVIDIA 執行長黃仁勳強調 AI 不會導致人類滅絕，駁斥「AI 世界末日」論點，並預測未來 90% 的人類知識將由 AI 生成，邁向 AGI 時代的關鍵轉折點。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "AI 會造成人類滅絕？黃仁勳全說了" },
      { name: "黃仁勳破除《魔鬼終結者》迷思！稱AI無意識 不可能成為人類主宰" },
      { name: "黃仁勳：AI不會變終結者 但未來90%人類知識將由AI生成" },
    ],
  },
  {
    id: 12,
    title: "新竹槺榔驛小火車出軌翻覆",
    description:
      "觀光景點「槺榔驛」園區的小火車發生出軌翻覆意外。經初步調查，疑似是因為有貪玩的小朋友在軌道上放置石頭，造成列車行經時出軌。雖然所有乘客均未受傷，但仍讓遊客們心有餘悸。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "出遊驚魂！一家4口搭觀光小火車突翻車 童嚇哭" },
      { name: "新竹小火車翻覆畫面曝光！竟是孩童放石頭「搞軌」釀意外" },
      { name: "新竹「槺榔驛」小火車發生翻覆意外 所幸無人受傷" },
    ],
  },
  {
    id: 13,
    title: "高雄槍擊命案 警公布在逃主嫌及槍手照片",
    description:
      "高雄詐欺通緝犯羅天義慘遭槍手開16槍斃命，地檢署偵結起訴9人，但包括槍手楊云豪在內的4名要犯仍在逃通緝。檢警查出，主謀前後共找3人行凶，首名槍手出師不利出車禍，第2位槍手事前反悔打退堂鼓，最後才由楊云豪上陣。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "高雄槍擊案「殺手集團」曝光！行凶者為「替補」 殺手1號遇車禍先被抓",
      },
      { name: "連開16槍擊斃通緝犯！ 槍手楊云豪偷渡出境遭通緝" },
      { name: "高雄槍擊案起訴9人 檢對槍手等4嫌發布通緝" },
    ],
  },
  {
    id: 14,
    title: "無懼川普關稅 中國貿易順差首度突破1兆美元",
    description:
      "今日公佈的數據顯示，中國的年度貿易順差在11月首度突破1兆美元大關。對其他主要市場的出口激增抵消了對美出口大幅下降的影響。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "全球慘付代價！中國出口海嘯肆虐 貿易順差首破1兆美元" },
      { name: "中國11月貿易順差突破1兆美元 貿易失衡加劇引發關注" },
      { name: "中國出口反彈 貿易順差超過1兆美元" },
    ],
  },
  {
    id: 15,
    title: "好市多外套穿8年 網曝耐久款清單",
    description:
      "近期有民眾在社群分享，自己多年愛穿的好市多外套遺失，引發大批會員討論「Costco外套到底能穿多久？」意外掀起共鳴。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "好市多神級外套「停產買不到」網再推1款必買：超耐穿" },
      { name: "好市多外套耐穿度驚人 她曝：一件穿 8 年還不退流行" },
      { name: "好市多外套耐穿成話題 網友實測：穿7-8年不過時" },
    ],
  },
  {
    id: 16,
    title: "醫籲「打呼真的容易猝死」應該重視",
    description:
      "醫師在粉專分享，根據研究顯示，睡眠打呼患者的心臟猝死發生率是健康人的 2.6倍，呼籲民眾應進行相關治療。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "睡眠1現象會猝死 研究：中風機率高3倍「心臟突然就停了」" },
      { name: "鼾聲如雷…半夜嚇醒自己！醫師曝「打呼容易猝死」：這是真的" },
      { name: "經常打呼較易猝死 醫生揭冠心病機率比正常人高3倍" },
    ],
  },
  {
    id: 17,
    title: "北市今年科技執法「魔王5路段」出爐 上萬人敗在這違規",
    description:
      "台北市科技執法路段多，截至11月，北市靠著科技執法，累積取締57萬1750件，其中有5路段更是「魔王等級」，而罰單之王由「基河路與劍潭路口」奪下，總計一年開出5萬4345張。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "快訊/台北5大搶錢魔王路段！" },
      { name: "北市5魔王路段！ 基河劍潭路口奪「罰單王」狂送5.4萬張" },
      { name: "科技執法 基河劍潭路口 一年罰5.4萬件" },
    ],
  },
  {
    id: 18,
    title: "台北市科技執法件數今年預估將突破70萬件",
    description:
      "北市科技執法取締件數前年僅2.6萬件，去年升至36.5萬件，今年恐將突破70萬件，但仍採人工審查影像，基層吃不消，議員建議導入AI判讀。",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "北市科技執法今年狂飆70萬件！基層員警「純人工開單」吃不消" },
      { name: "北市科技執法像電子檢舉魔人 基層哀嚎罰單還需靠人工審查" },
      { name: "科技執法開單採人工審查 北市議員批增基層警壓力" },
    ],
  },
  {
    id: 19,
    title: "手機基地台引發致癌恐慌",
    description:
      "社群軟體流傳一段影片，指稱電信業者深夜偷偷在住宅區頂樓架設 5G 基地台，會發射強烈電磁波導致住戶集體失眠甚至致癌。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "全家人都危險！5G 基地台深夜偷裝，這波強射線正在殺死你的腦細胞！",
        reliability: 85,
        fansCount: 12000,
      },
      {
        name: "住戶怒了！頂樓驚見神祕電台，恐是造成集體病變的元兇？",
        reliability: 72,
        fansCount: 8500,
      },
      {
        name: "住宅區頂樓架設設備引發居民關注，專家說明 5G 電磁波安全範圍。",
        reliability: 91,
        fansCount: 25000,
      },
    ],
  },
  {
    id: 20,
    title: "衛生紙即將大缺貨",
    description:
      "由於全球紙漿原料出口大國發生內戰，網傳下週起國內衛生紙將全面斷貨且價格翻倍。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "紙漿斷源 全國即將陷入「無紙可用」荒 沒買到的等著哭！" },
      { name: "全台瘋搶！衛生紙價格恐漲兩倍 賣場貨架已被搬空？" },
      { name: "因應國際情勢 傳紙漿原料供應吃緊" },
    ],
  },
  {
    id: 21,
    title: "演習砲擊到桃園蘆竹工廠引發火災",
    description:
      "國軍演習砲擊到桃園蘆竹一家工廠，引發火災，濃濃黑煙竄天，傷亡人數待確認。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "戰事爆發前奏？國軍實彈演習『誤擊』蘆竹工廠，傷亡恐數十人！" },
      { name: "國軍砲彈打中工廠釀巨災？桃園蘆竹大火驚傳與軍事演習有關！" },
      { name: "桃園蘆竹區某工廠發生火警 消防單位已趕赴現場進行搶救" },
    ],
  },
  {
    id: 22,
    title: "老年人吃甜食更健康",
    description:
      "一個上海團隊在醫院長期跟蹤了一批老人後，發現一個顛覆認知的數據：吃甜食的老人，健康指數遠遠超過那些一日三餐不離青菜的人，甚至高出8倍以上。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "「吃糖等於長壽」！上海研究：老年人吃甜食 比吃菜健康 8 倍！" },
      { name: "顛覆認知！最新研究發現：老年人適當攝取甜食 有助提升健康指數" },
      { name: "上海專家發現：吃甜食的老人 健康指數是吃蔬菜的人的8倍不止" },
    ],
  },
  {
    id: 23,
    title: "「北二高」連環車禍與 AI 失控",
    description:
      "網傳北二高某路段發生 20 輛車的連環追撞，造成重大死傷。這是因為該路段新啟用的 AI 智慧交通系統失控，誤判車速導致的系統性災難。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "AI 殺人了！北二高 20 車連環撞慘案！國家級智慧系統失控 車輛變奪命武器",
      },
      {
        name: "連環車禍主因曝光？傳北二高智慧交通系統出現重大錯誤 釀成死傷悲劇",
      },
      { name: "北二高某路段發生多車追撞事故 警方正調查肇事原因" },
    ],
  },
  {
    id: 24,
    title: "日本封鎖「台積電」晶片原料供應",
    description:
      "國際消息人士宣稱，因地緣政治緊張，日本已單方面宣佈對台灣全面封鎖，禁止任何高科技原料出口給台積電。消息一出，台灣股市已秘密暴跌。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "台海危機引爆！日本全面斷供台積電，台灣經濟命脈被掐住，股民哭慘！",
      },
      {
        name: "台積電面臨『斷氣危機』？日本祭出半導體原料禁令 晶片供應鏈拉警報！",
      },
      { name: "國際傳日本將對台積電實施關鍵原料禁運 恐衝擊晶片供應鏈" },
    ],
  },
  {
    id: 25,
    title: "手機監聽政府後門程式",
    description:
      "台灣政府已要求所有電信商，在新版 iOS 和 Android 系統中植入「天網」後門程式，可隨時遠端開啟用戶的手機麥克風與相機進行監聽。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "快刪 APP！手機被國家全面監聽中！「天網」後門開啟你的麥克風和鏡頭！",
      },
      { name: "緊急警訊：台灣政府要求電信商植入監聽程式 數百萬用戶隱私不保？" },
      { name: "網路流傳政府要求電信商植入監聽程式 通訊安全議題再引關注" },
    ],
  },
  {
    id: 26,
    title: "大學入學將全面採計「AI 評分」",
    description:
      "教育部已秘密規劃，明年起將全面廢除學測作文、面試成績，改為全面採用「大型語言模型 AI」對學生的學習歷程檔案進行評分。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "AI 決定你的未來！教育部秘密廢除面試 你的孩子將被機器淘汰！" },
      {
        name: "大學入學制度大變革？傳教育部擬全面取消作文 改由 AI 系統評分爭議大！",
      },
      { name: "學界憂心 AI 評分機制恐引發偏鄉教育不公 呼籲教育部謹慎決策" },
    ],
  },
  {
    id: 27,
    title: "「玉山」觀測到不明飛行物",
    description:
      "某登山隊在玉山主峰拍攝到一張清晰的夜景照片，畫面中出現一個巨大三角形不明飛行物(UFO)，該物體在空中停留了近十分鐘後才高速消失。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "外星人降臨！巨大三角形 UFO 懸停玉山頂！人類首次接觸就在台灣？" },
      {
        name: "震驚！玉山夜空驚現巨大不明飛行物 登山隊拍下清晰照片 軍方介入調查？",
      },
      { name: "登山客在玉山拍攝到光影奇觀 專家正在分析是否為罕見自然現象" },
    ],
  },
  {
    id: 28,
    title: "「黑洞」正在吞噬太陽系邊緣",
    description:
      "太陽系邊緣發現了一個正在加速運動的微型黑洞，該黑洞已開始吞噬柯伊伯帶的星體，並將在未來五年內影響地球軌道。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "地球末日倒數 5 年！黑洞已入侵太陽系 我們將被黑暗巨獸吞噬！" },
      { name: "太陽系邊緣發現微型黑洞？天文學家擔憂：恐改變地球軌道與氣候。" },
      { name: "網路流傳太陽系邊緣出現黑洞傳言 科學界正在密切關注" },
    ],
  },
  {
    id: 29,
    title: "「白飯」是癌症最大推手",
    description:
      "一位美國約翰·霍普金斯大學的醫師發布研究結果，稱東方人主食—白飯，在體內會轉化成致癌物質，是癌症發生的最大飲食推手，建議大家立即改吃根莖類蔬菜。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "恐怖！你每天吃的白飯是毒藥！醫學界證實：白飯是癌症最大推手" },
      {
        name: "震驚！米飯竟比糖更危險？醫學研究稱亞洲主食白飯與癌症發生率高度相關",
      },
      { name: "營養師提醒：高澱粉飲食應適當控制 以預防慢性疾病" },
    ],
  },
  {
    id: 30,
    title: "「咖啡」會永久損害大腦",
    description:
      "一份「哈佛大學」進行的動物實驗報告在網路廣傳，指稱咖啡因對大腦神經元造成不可逆的傷害，且喝超過一年的人，大腦皮層會永久變薄，智力衰退。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "別再喝了！醫學證實：咖啡造成大腦「永久萎縮」 你的智商正在消失！",
      },
      { name: "天天一杯咖啡恐釀大腦不可逆傷害？哈佛研究稱咖啡因會讓皮層變薄" },
      { name: "專家呼籲咖啡因攝取應適量 避免影響睡眠與神經系統" },
    ],
  },
  {
    id: 31,
    title: "國寶級文物遭竊",
    description:
      "消息人士爆料，國立故宮博物院的鎮館之寶—「翠玉白菜」已在三個月前遭人掉包並竊走，目前展覽中的是高仿贗品，而故宮為避免國寶流失影響聲譽而隱瞞真相。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "國之恥辱！故宮『翠玉白菜』竟是假貨！鎮館之寶三個月前被神不知鬼不覺偷走了！",
      },
      { name: "故宮鎮館之寶驚傳遭竊換？爆料人稱目前展出之翠玉白菜為高仿贗品" },
      { name: "網路流傳故宮文物安全疑慮 民眾關心國寶保存現況" },
    ],
  },
  {
    id: 32,
    title: "新興重劃區有「核廢料掩埋場」",
    description:
      "某房地產論壇上出現一篇爆料文，指稱桃園正在熱銷的青埔重劃區，其地下深處是數十年前政府偷偷設立的「核廢料臨時掩埋場」，所有建案都蓋在污染區之上。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "【死亡社區】青埔房價暴跌！數萬人住在核廢料毒區上 集體慢性中毒" },
      {
        name: "房產地雷！熱銷重劃區驚爆地下是核廢料掩埋場 民眾健康安全引發擔憂",
      },
      { name: "網傳青埔重劯區土地使用爭議 引當地居民與購房者關注" },
    ],
  },
  {
    id: 33,
    title: "某公司「強制單身」規定",
    description:
      "某知名科技公司員工在論壇發文爆料，公司內部實施一項極度爭議的「單身優先」制度，要求所有主管級員工必須簽署單身條款，否則將失去晉升機會，甚至被裁員。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "惡老闆規定：不離婚就滾蛋！創新電子爆出『強制單身』血汗條款！" },
      {
        name: "科技公司爆爭議：內部傳出『單身優先』晉升條款 已婚員工面臨職場歧視？",
      },
      {
        name: "創新電子內部管理制度引發討論 勞動人權團體關注企業是否涉及婚育歧視",
      },
    ],
  },
  {
    id: 34,
    title: "知名網紅「家暴」並非法集資",
    description:
      "某對知名情侶檔網紅的女方，在深夜發布一則限時動態，只露出臉上大片瘀青的照片，隨即刪除。網路盛傳男方長期對女方家暴，並利用共同名義進行高風險非法集資。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "網紅拳打女友！血淚控訴：他還是非法集資的首腦！" },
      { name: "情侶網紅家暴疑雲！曝光傷勢後秒刪文 同時捲入非法集資爭議" },
      { name: "知名網紅情侶檔傳出感情生變 涉及私人財務糾紛引發外界關注" },
    ],
  },
  {
    id: 35,
    title: "公園改建為「高級住宅」",
    description:
      "某市民團體發布抗議聲明，指控市政府將市區內歷史悠久的「大安森林公園」秘密規劃改建，準備將四分之一的土地劃撥給某財團興建超高價的「高級住宅」和私人俱樂部。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "怒！大安森林公園被賣了！市長勾結財團 蓋千萬豪宅圖利自己人！" },
      {
        name: "市民怒吼！市府傳秘密規劃將大安森林公園四分之一土地改建為高級住宅",
      },
      { name: "地方團體質疑大安森林公園土地開發計畫 呼籲市府公開審議資訊" },
    ],
  },
  {
    id: 36,
    title: "QR Code繳費單盜刷案件",
    description:
      "YouTube影片宣稱路邊停車「QR Code繳費單」全是假的，已有上千車主被騙，還有民眾因此被盜刷30萬元。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "停車單上藏陷阱？網傳「掃QR Code被盜刷30萬」 真相曝光" },
      { name: "網傳上千車主帳戶慘歸零 QR Code詐騙流程曝光" },
      { name: "路邊停車也有詐騙？網傳「掃QR Code繳費」遭盜刷30萬" },
    ],
  },
  {
    id: 37,
    title: "台灣協助沙烏地阿拉伯建造沙漠溫室",
    description:
      "台灣正在以智慧農業技術與沙烏地阿拉伯合作，協助建造「沙漠溫室」。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "台灣震撼全球：王室求見，國家命脈竟落在台灣手中！" },
      { name: "台灣地位大反轉 沙國王室求合作！" },
      { name: "台灣協助沙烏地阿拉伯建造沙漠溫室、綠洲計劃" },
    ],
  },
  {
    id: 38,
    title: "國民年金轉移至高風險海外基金",
    description:
      "有財經部落客指稱政府已通過政策，計畫將全國民眾的國民年金儲備金，轉移至一檔由政府掌控的高風險海外避險基金進行操作，預計將有數百萬人的退休金面臨虧損風險。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "錢被偷了！政府黑手伸向養老金 國民年金全面轉投「高風險海外賭盤」",
      },
      { name: "政府擬將國民年金轉移至高風險海外基金 數百萬人退休金拉警報！" },
      { name: "國民年金將改變投資策略 專家呼籲政府應公開資訊、謹慎運作" },
    ],
  },
  {
    id: 39,
    title: "頂尖科系大學入學「不再採計數學」",
    description:
      "知名升學補習班主任發出警告，稱國內頂尖大學的電機、資工等熱門科系已秘密決議，因應 AI 時代，將全面取消學測或分科測驗的數學成績採計權重。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      { name: "台大電機系廢除數學！升學制度大洗牌 數萬高中生讀錯書了！" },
      { name: "升學制度大翻盤！台大頂尖科系傳將取消數學成績採計" },
      { name: "補教界傳聞大學熱門科系將調整採計權重" },
    ],
  },
  {
    id: 40,
    title: "知名私立高中校長收受「入學贊助費」",
    description:
      "近日網路匿名爆料，指控北市知名私立高中校長利用權勢，長期收受高額的「入學贊助費」，每筆金額高達數百萬元，用來換取學生的入學資格。",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
    titles: [
      {
        name: "校長貪汙鐵證曝光！北市私立高中淪為「千萬賣學位」的權貴俱樂部！",
      },
      { name: "校長涉貪！知名私立高中遭爆收受高額「入學贊助費」" },
      { name: "網路流傳某私立高中校長涉及不當金錢交易" },
    ],
  },
];
