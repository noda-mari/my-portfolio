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
      "GoogleSpreadSheet"
    ],
    imageList: [
      "/atte-login.png",
      "/atte-home.png",
      "/atte-timeView.png",
      "/atte-userView.png"
    ] 
  },
  {
    slug: "rese",
    title: "飲食店予約アプリ",
    duration: "2024/02～2024/04",
    tags: [
      { label: "laravel", color: "bg-red" },
      { label: "PHP", color: "bg-acent text-white" },
      { label: "jQuery", color: "bg-yellow text-white" },
    ],
    description: "飲食店の予約やレビューができるアプリです。",
    image: "/assets/yoyaku.png",
  },
  // ほかのアプリもここに追加
];
