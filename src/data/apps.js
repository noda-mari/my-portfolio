export const apps = [
  {
    slug: "atte",
    title: "勤怠管理アプリ",
    duration: "2024/12～2024/02",
    tags: [
      { label: "laravel", color: "bg-red" },
      { label: "PHP", color: "bg-acent text-white" },
    ],
    description: "出退勤機能を持つ勤怠管理アプリを作成いたしました。",
    gitHubUrl: "https://github.com/noda-mari/20240215_nodamari_atte.git",
    date: "2023/11 ～ 2023/12（約2ヶ月）",
    menber: "PG1名（個人開発）",
    task: "Google Spread Sheetで作業工程表を作成して管理",
    version: "Githubを使用したバージョン管理",
    inCharge: "詳細設計、開発、テスト",
    featureList: [
      "会員登録機能",
      "ログイン機能",
      "ログアウト機能",
      "勤務開始機能",
      "勤務終了機能",
      "休憩開始機能",
      "休憩終了機能",
      "日付別勤怠情報取得機能",
      "ページネーション機能",
      "メール認証機能",
      "ユーザー別勤怠情報取得機能",
      "パスワードリセット機能",
    ],
    techList: [
      "Windows 11",
      "Linux（Ubuntu）",
      "PHP v7",
      "Laravel v8",
      "MySQL v8",
      "Docker",
      "VSCode",
      "Github",
      "GoogleSpreadSheet",
    ],
    imageList: [
      "/atte-login.png",
      "/atte-home.png",
      "/atte-timeView.png",
      "/atte-userView.png",
    ],
  },
  {
    slug: "rese",
    title: "飲食店予約アプリ",
    duration: "2024/1 ~ 2024/2",
    tags: [
      { label: "laravel", color: "bg-red" },
      { label: "PHP", color: "bg-acent text-white" },
      { label: "jQuery", color: "bg-yellow text-white" },
    ],
    description:
      "飲食店予約やお気に入り登録、レビュー等の機能を持つ飲食店予約アプリを作成いたしました。",
    gitHubUrl: "https://github.com/noda-mari/20240227_noda_rese.git",
    date: "2024/1 ～ 2024/2（約2ヶ月）",
    menber: "PG1名（個人開発）",
    task: "Google Spread Sheetで作業工程表を作成して管理",
    version: "Githubを使用したバージョン管理",
    inCharge: "詳細設計、開発、テスト",
    featureList: [
      "会員登録機能",
      "ログイン機能",
      "メール認証機能",
      "ログアウト機能",
      "ユーザー情報取得機能",
      "ユーザー飲食店お気に入り一覧取得機能",
      "ユーザー飲食店予約情報取得機能",
      "飲食店一覧取得機能",
      "飲食店詳細取得機能",
      "飲食店お気に入り追加機能",
      "飲食店お気に入り削除機能",
      "飲食店予約情報追加機能",
      "飲食店予約情報削除機能",
      "エリアで検索機能",
      "ジャンルで検索機能",
      "店名で検索機能",
    ],
    techList: [
      "Windows 11",
      "Linux（Ubuntu）",
      "PHP v7",
      "Laravel v8",
      "JQuery v3",
      "MySQL v8",
      "Docker",
      "VSCode",
      "Github",
      "GoogleSpreadSheet",
    ],
    imageList: [
      "/rese-login.png",
      "/rese-home.png",
      "/rese-storePage.png",
      "/rese-userPage.png",
    ],
  },
  {
    slug: "dictionary",
    title: "辞書アプリ",
    duration: "2024/11 ~ 現在（作成中）",
    tags: [
      { label: "laravel", color: "bg-red" },
      { label: "Next.js", color: "bg-blue" },
      { label: "TypeScript", color: "bg-mint text-white" },
    ],
    description:
      "調べた単語や、文章を登録できる自分専用の辞書作成アプリを作成中です",
    gitHubUrl: "https://github.com/noda-mari/myDictionary_next_laravel.git",
    date: "2024/11 ~ 現在（作成中）",
    menber: "PG1名（個人開発）",
    task: "Notion で要件定義書を作成　タスク管理は出来ていません",
    version: "Githubを使用したバージョン管理",
    inCharge: "詳細設計、開発、テスト",
    featureList: [
      "会員登録機能",
      "ログイン機能",
      "ログアウト機能",
      "ユーザー情報取得機能",
      "単語登録/意味・例文の登録機能",
      "登録した単語・例文の編集機能",
      "検索機能",
      "お気に入り機能（しおり機能）",
      "クイズ機能",
    ],
    techList: [
      "Windows 11",
      "Linux（Ubuntu）",
      "PHP v8",
      "Laravel v11",
      "MySQL v8",
      "next.js v15",
      "react",
      "typescript",
      "Docker",
      "VSCode",
      "Github",
      "Notion",
    ],
    imageList: [
      "/dictionary-home.png",
      "/dictionary-wordView.png",
      "/dictionary-categoryView.png",
    ],
  },
  {
    slug: "recruit",
    title: "就職・採用マッチングアプリ開発",
    duration: "2024/09 ~ 2024/10（２か月）",
    tags: [
      { label: "Next.js", color: "bg-blue" },
      { label: "TypeScript", color: "bg-mint text-white" },
      { label: "GraphQL", color: "bg-pink text-white" },
    ],
    description:
      "就職・採用マッチングアプリのリニューアルに参画し、UI等の修正を担当させていただきました。",
    gitHubUrl: "",
    date: "2024/11 ~ 現在（作成中）",
    menber: "フロント：PM1名、PG1名　バックエンド：複数名",
    task: "Trelloによるチケット管理",
    version: "Githubを使用したバージョン管理",
    inCharge: "開発・テスト・修正",
    featureList: [
      "プロフィール登録機能",
      "経歴登録機能",
      "仕事に対するこだわり等の登録機能",
      "ユーザー情報取得機能",
      "レスポンシブデザイン",
    ],
    techList: [
      "Windows 11",
      "Linux（Ubuntu）",
      "PHP v8",
      "Laravel v11",
      "MySQL v8",
      "next.js v15",
      "react",
      "typescript",
      "chakla UI",
      "Docker",
      "VSCode",
      "Github",
      "Figma",
      "Trello",
    ],
    imageList: [
      "/recruit-home.png",
      "/recruit-profile.png",
      "/recruit-responsive.png",
      "/recruit-carrer.png",
    ],
  },
  {
    slug: "labo",
    title: "研究業績マネジメントアプリ開発",
    duration: "2025/01 ~ 2025/05（５か月）",
    tags: [
      { label: "Dynamics", color: "bg-[#ad5059]" },
      { label: "Nuxt.js", color: "bg-nuxt text-black" },
      { label: "JavaScript", color: "bg-yellow text-white" },
    ],
    description:
      "研究業績マネジメントアプリの開発に参画し、テーブル設計からフロント開発まで幅広く担当させていただきました。",
    gitHubUrl: "",
    date: "2024/11 ~ 現在（作成中）",
    menber: "PM1名、PG6名",
    task: "excelでの課題管理",
    version: "Githubを使用したバージョン管理",
    inCharge: "開発・テスト・修正",
    featureList: [
      "ユーザー情報取得機能",
      "ユーザー情報自動入力機能",
      "研究業績登録機能",
      "研究業績OUKA登録機能",
      "研究業績ステータス自動変遷機能",
      "承認メール送信機能",
      "researchmapAPIでのデータ更新機能",
      "DMP作成・編集機能",
    ],
    techList: [
      "Windows 11",
      "Linux（Ubuntu）",
      "Nuxt.js",
      "typescript",
      "PowerApps",
      "Dynamics 365",
      "PowerAutomate",
      "Dataverse",
      "Azure",
      "VSCode",
      "Github",
      "excel",
      "Theams",
    ],
    imageList: [
      "/labo-researcherView.png",
      "/labo-achiev.png",
      "/labo-projectView.png",
      "/labo-dmpForm.png",
    ],
  },
];
