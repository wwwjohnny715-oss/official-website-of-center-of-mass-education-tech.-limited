const WHATSAPP_MESSAGE = `你好，我想查詢課程。
學生年級：__
科目：__
目標：補底/拔尖（選一）
可上課時段：__`

const WHATSAPP_LINK = `https://wa.me/85257651008?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const tracks = [
  {
    title: '補底班',
    subtitle: '穩固根基・逐步提升',
    icon: '🏗️',
    color: 'teal',
    points: [
      '打好學科基礎',
      '補回過往漏洞',
      '穩定提升成績',
      '建立學習信心',
    ],
  },
  {
    title: '拔尖班',
    subtitle: '進階訓練・衝刺高分',
    icon: '🚀',
    color: 'cyan',
    points: [
      '進階題型訓練',
      '名校真題操練',
      '挑戰高難度題目',
      '衝擊更高成績',
    ],
  },
]

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 bg-gray-50/50 section-pattern scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            補底 vs 拔尖
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            按學生程度分流教學，無論是需要鞏固基礎還是追求卓越，都能找到適合的課程
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {tracks.map((track) => (
            <div
              key={track.title}
              className={`relative bg-white rounded-2xl p-8 shadow-card card-hover overflow-hidden border-t-4 ${
                track.color === 'teal' ? 'border-teal-400' : 'border-cyan-400'
              }`}
            >
              {/* Background decoration */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 ${
                track.color === 'teal' ? 'bg-teal-100/40' : 'bg-cyan-100/40'
              } rounded-full blur-3xl`} />

              {/* Header */}
              <div className="relative flex items-center gap-4 mb-6">
                <span className="text-4xl">{track.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {track.title}
                  </h3>
                  <p className={`text-sm font-medium ${
                    track.color === 'teal' ? 'text-teal-600' : 'text-cyan-600'
                  }`}>
                    {track.subtitle}
                  </p>
                </div>
              </div>

              {/* Points */}
              <ul className="relative space-y-3">
                {track.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      track.color === 'teal' ? 'bg-teal-500' : 'bg-cyan-500'
                    }`}>
                      ✓
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-lg rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            了解適合你的課程
          </a>
        </div>
      </div>
    </section>
  )
}

