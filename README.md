# 質心教育官方網站

一頁式 Landing Page，專為香港補習社「質心教育」設計。白色科技感主題，手機優先，全靜態部署。

## 功能特點

- 📱 **手機優先設計** - 響應式佈局，在所有設備上都有良好體驗
- 🎨 **白色科技感主題** - 淡青色/藍綠色漸層點綴，現代簡潔
- 💬 **WhatsApp 快速查詢** - 所有 CTA 導向 WhatsApp click-to-chat
- ⚡ **純靜態部署** - 無需後端，可直接部署到 Vercel
- ♿ **無障礙友好** - 適當的 aria-label、焦點樣式、對比度

## 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **部署**: Vercel (靜態輸出)

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看網站。

### 建置生產版本

```bash
npm run build
```

建置完成後，靜態檔案會輸出到 `out/` 目錄。

### 本地預覽生產版本

```bash
npx serve out
```

## 部署到 Vercel

### 方法一：Vercel CLI

```bash
npm i -g vercel
vercel
```

### 方法二：GitHub 整合

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 連接 GitHub 倉庫
3. Vercel 會自動檢測 Next.js 專案並部署

## 專案結構

```
├── app/
│   ├── globals.css      # 全局樣式
│   ├── layout.tsx       # 根佈局
│   └── page.tsx         # 主頁面
├── components/
│   ├── Header.tsx       # 頂部導航
│   ├── Hero.tsx         # 首屏橫幅
│   ├── Features.tsx     # 賣點卡片
│   ├── Courses.tsx      # 課程範圍
│   ├── Tracks.tsx       # 補底/拔尖分流
│   ├── Teaching.tsx     # 教學安排
│   ├── FAQ.tsx          # 常見問題
│   ├── Contact.tsx      # 聯絡區塊
│   ├── Footer.tsx       # 頁腳
│   └── FloatingWhatsAppButton.tsx  # 浮動 WhatsApp 按鈕
├── public/
│   ├── branding/
│   │   └── no-background-name-logo.jpeg  # Logo 圖片
│   ├── reference/
│   │   └── image.jpeg   # 參考風格圖
│   └── icons/
│       └── whatsapp.svg # WhatsApp 圖標
└── ...配置文件
```

## 素材要求

請確保以下素材已放置到正確位置：

1. **Logo**: `/public/branding/no-background-name-logo.jpeg`
2. **參考圖片**: `/public/reference/image.jpeg`

## 營運資訊

- **WhatsApp**: 5765 1008
- **辦公時間**: 周二至周日 10:00–19:00
- **政策**: 只接受 WhatsApp 文字查詢（不接來電）

## 自訂配置

### 修改 WhatsApp 號碼

在以下文件中搜索 `85257651008` 並替換：
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/Tracks.tsx`
- `components/FAQ.tsx`
- `components/Contact.tsx`
- `components/FloatingWhatsAppButton.tsx`

### 修改預填訊息

WhatsApp 預填訊息在各組件中定義為 `WHATSAPP_MESSAGE` 常量。

## License

© 質心教育 (Center of Mass Education Tech. Limited)




