export default function FloatingWhatsAppButton() {
  const message = `你好，我想查詢課程。
學生年級：__
科目：__
目標：補底/拔尖（選一）
可上課時段：__`;

  const href = `https://wa.me/85257651008?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp 文字查詢（周二至周日 10:00–19:00；不接來電）"
      title="WhatsApp 文字查詢（周二至周日 10:00–19:00；不接來電）"
      className="
        group fixed z-[9999]
        right-[max(16px,env(safe-area-inset-right))]
        bottom-[max(16px,env(safe-area-inset-bottom))]
        h-14 w-14 rounded-full
        bg-[#25D366]
        grid place-items-center
        transition active:translate-y-[1px] hover:brightness-95
        focus-visible:outline focus-visible:outline-4 focus-visible:outline-cyan-200

        shadow-[0_10px_24px_rgba(0,0,0,0.20)]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)]

        before:content-['']
        before:absolute before:inset-[-10px] before:rounded-full
        before:bg-[radial-gradient(circle,rgba(34,211,238,0.35)_0%,rgba(34,211,238,0.18)_35%,transparent_70%)]
        before:blur-md before:opacity-80
        before:transition before:duration-200
        group-hover:before:opacity-100
      "
    >
      <img src="/icons/whatsapp.svg" alt="WhatsApp" className="relative h-7 w-7" draggable={false} />
    </a>
  );
}




