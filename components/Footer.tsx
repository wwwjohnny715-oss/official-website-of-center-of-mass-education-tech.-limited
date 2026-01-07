export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} 香港質心教育</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Center of Mass Education Tech. Limited</span>
          </div>
          <p className="text-center sm:text-right text-xs text-gray-400">
            個人資料只用於課程查詢及教學服務，不會作其他用途
          </p>
        </div>
      </div>
    </footer>
  )
}

