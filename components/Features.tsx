const features = [
  {
    icon: '👥',
    title: '小班教學',
    description: '更密切跟進每位學生進度，確保學習效果',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '📝',
    title: '名校題目',
    description: '針對校內測驗及考核，熟悉出題模式',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: '📈',
    title: '補底 + 拔尖',
    description: '按程度分流教學，各取所需穩步進步',
    gradient: 'from-blue-500 to-teal-500',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50/50 section-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            為什麼選擇<span className="gradient-text">香港質心教育</span>？
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我們專注於提供高質素的補習服務，讓每位學生都能在適合自己的節奏下進步
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-card card-hover tech-glow-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-50 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

