import Image from 'next/image'

const WHATSAPP_MESSAGE = `你好，我想查詢課程。
學生年級：__
科目：__
目標：補底/拔尖（選一）
可上課時段：__`

const WHATSAPP_LINK = `https://wa.me/85257651008?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-teal-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-50/50 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="gradient-text">小班教學</span>
              <span className="text-gray-400 mx-2">｜</span>
              <span className="text-gray-800">名校題目</span>
              <br className="hidden sm:block" />
              <span className="text-gray-400 mx-2 sm:hidden">｜</span>
              <span className="gradient-text">補底 + 拔尖分流</span>
            </h1>

            <div className="space-y-3 mb-8">
              <p className="text-lg sm:text-xl text-gray-600">
                <span className="font-medium text-gray-800">小學／初中：</span>
                中文、英文、數學
              </p>
              <p className="text-lg sm:text-xl text-gray-600">
                <span className="font-medium text-gray-800">高中（DSE）：</span>
                中文、英文、數學、M2、物理、化學、生物
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-lg rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp 立即查詢
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                辦公時間：周二至周日 10:00–19:00
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center gap-2 text-amber-600 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                只接受 WhatsApp 文字查詢（不接來電）
              </div>
            </div>

            {/* Free Trial Button */}
            <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
              <a
                href="https://trial-booking-system.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full shadow-[0_8px_30px_rgba(249,115,22,0.7)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.9)] hover:scale-110 transition-all duration-300 border-4 border-yellow-400 animate-bounce"
              >
                {/* Star icon */}
                <span className="text-yellow-300 text-2xl">⭐</span>
                
                <span className="text-white font-black text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">立即登記</span>
                <span 
                  className="font-black text-2xl"
                  style={{
                    color: '#FFFF00',
                    textShadow: '-2px -2px 0 #FF4500, 2px -2px 0 #FF4500, -2px 2px 0 #FF4500, 2px 2px 0 #FF4500, 0 0 12px #FF4500'
                  }}
                >
                  免費試堂
                </span>
                <span className="text-yellow-300 text-2xl">⭐</span>
              </a>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <span>*填寫好表格並提交後，會有職員盡快聯絡閣下。</span>
                <span className="text-lg">👍</span>
              </p>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto">
              {/* Decorative glow background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-200/30 via-teal-100/20 to-transparent rounded-[2rem] blur-2xl" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-white/50">
                <Image
                  src="/images/storefront.jpg"
                  alt="香港質心教育補習社門面"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Fixed badges */}
              <div className="absolute -left-6 top-1/4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-cyan-500/15 px-4 py-3 border border-cyan-100">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <span className="font-medium text-gray-700">名校題目</span>
                </div>
              </div>
              <div className="absolute -right-6 bottom-1/4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-teal-500/15 px-4 py-3 border border-teal-100">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <span className="font-medium text-gray-700">4人小班</span>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full shadow-lg shadow-cyan-500/30 px-5 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎯</span>
                  <span className="font-medium text-sm">DSE 補習班</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

