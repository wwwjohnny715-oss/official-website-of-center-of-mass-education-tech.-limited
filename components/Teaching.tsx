const teachingPoints = [
  {
    icon: '👥',
    title: '小班教學',
    description: '名額有限，確保教學質素',
  },
  {
    icon: '📋',
    title: '課後跟進',
    description: '按需要提供功課講解支援',
  },
  {
    icon: '📊',
    title: '定期評估',
    description: '按需要安排小測，了解學習進度',
  },
  {
    icon: '📚',
    title: '針對性練習',
    description: '根據學生程度提供合適題目',
  },
]

export default function Teaching() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            教學安排
          </h2>
          <p className="text-gray-600">
            用心設計的教學模式，助學生有效學習
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingPoints.map((point, index) => (
            <div
              key={point.title}
              className="text-center p-6 rounded-2xl bg-white shadow-card card-hover"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center text-2xl">
                {point.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

