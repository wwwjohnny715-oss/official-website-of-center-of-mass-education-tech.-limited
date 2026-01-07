import type { Metadata } from 'next'
import { Noto_Sans_HK } from 'next/font/google'
import './globals.css'

const notoSansHK = Noto_Sans_HK({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-hk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '香港質心教育｜小班教學・補底拔尖・中英數・DSE M2 理化生',
  description: '香港質心教育提供小班教學，採用名校題目，針對補底與拔尖分流教學。課程涵蓋小學至高中（DSE）中文、英文、數學、M2、物理、化學、生物。WhatsApp 查詢：57651008',
  keywords: ['補習', '小班教學', 'DSE', '中文補習', '英文補習', '數學補習', 'M2', '物理', '化學', '生物', '香港補習', '香港質心教育'],
  authors: [{ name: '香港質心教育' }],
  openGraph: {
    title: '香港質心教育｜小班教學・補底拔尖・中英數・DSE M2 理化生',
    description: '小班教學｜名校題目｜補底與拔尖分流｜WhatsApp 查詢：57651008',
    type: 'website',
    locale: 'zh_HK',
    siteName: '香港質心教育',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant-HK" className={notoSansHK.variable}>
      <body className="bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  )
}

