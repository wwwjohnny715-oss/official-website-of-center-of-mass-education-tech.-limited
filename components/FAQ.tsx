'use client'

import { useState } from 'react'

const WHATSAPP_MESSAGE = `你好，我想查詢課程。
學生年級：__
科目：__
目標：補底/拔尖（選一）
可上課時段：__`

const WHATSAPP_LINK = `https://wa.me/85257651008?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const TRIAL_BOOKING_LINK = 'https://trial-booking-system.pages.dev/'

const faqs = [
  {
    question: '會點樣分班？',
    answer: '我們會根據學生的程度分為補底班或拔尖班。補底班著重鞏固基礎，拔尖班則提供進階訓練。具體分班安排可透過 WhatsApp 查詢。',
  },
  {
    question: '可否試堂？',
    answer: '歡迎查詢試堂安排。請點擊',
    trialLink: true,
  },
  {
    question: '上課時間如何安排？',
    answer: '我們提供不同時段的課堂選擇，具體時間表會按學生需求而定。請透過 WhatsApp 查詢最新可選時段。',
    hasLink: true,
  },
  {
    question: '缺席或補堂安排？',
    answer: '如需請假或了解補堂安排，請提前透過 WhatsApp 通知我們，我們會盡量配合安排。',
    hasLink: true,
  },
  {
    question: '收費方式及付款方式？',
    answer: '收費會根據課程級別及科目而定。詳細收費及付款方式，請透過 WhatsApp 查詢。',
    hasLink: true,
  },
  {
    question: '多久會回覆查詢？',
    answer: '我們會於辦公時間內（周二至周日 10:00–19:00）盡快回覆 WhatsApp 訊息。請耐心等候，我們會逐一處理每個查詢。',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gray-50/50 section-pattern scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            常見問題
          </h2>
          <p className="text-gray-600">
            有其他問題？歡迎透過 WhatsApp 查詢
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-card overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                  {faq.trialLink && (
                    <a
                      href={TRIAL_BOOKING_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-600 hover:text-cyan-700 font-medium underline underline-offset-2"
                    >
                      這裏
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {faq.trialLink && '預約試課'}
                  {faq.hasLink && (
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-cyan-600 hover:text-cyan-700 font-medium"
                    >
                      WhatsApp 查詢
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

