const courseData = [
  {
    level: '小學',
    subjects: ['中文', '英文', '數學'],
    color: 'cyan',
    icon: '🎒',
  },
  {
    level: '初中',
    subjects: ['中文', '英文', '數學'],
    color: 'teal',
    icon: '📖',
  },
  {
    level: '高中（DSE）',
    subjects: ['中文', '英文', '數學', 'M2', '物理', '化學', '生物'],
    color: 'blue',
    icon: '🎓',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            課程範圍
          </h2>
          <p className="text-gray-600">
            涵蓋小學至高中各級主要科目
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {courseData.map((course, index) => (
            <div
              key={course.level}
              className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-card card-hover overflow-hidden"
            >
              {/* Background decoration */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${course.color}-100/50 rounded-full blur-2xl`} />
              
              {/* Header */}
              <div className="relative flex items-center gap-4 mb-6">
                <span className="text-4xl">{course.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {course.level}
                </h3>
              </div>

              {/* Subjects */}
              <div className="relative flex flex-wrap gap-2">
                {course.subjects.map((subject) => (
                  <span
                    key={subject}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                      ${course.color === 'cyan' ? 'bg-cyan-50 text-cyan-700' : ''}
                      ${course.color === 'teal' ? 'bg-teal-50 text-teal-700' : ''}
                      ${course.color === 'blue' ? 'bg-blue-50 text-blue-700' : ''}
                    `}
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




