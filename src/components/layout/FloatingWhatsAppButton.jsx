import Link from "next/link";

const WHATSAPP_HREF = "https://wa.me/923020441525";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2a9.93 9.93 0 0 0-8.57 14.95L2.05 22l5.17-1.35A9.9 9.9 0 0 0 12.04 22h.01A9.94 9.94 0 0 0 22 12.07a9.84 9.84 0 0 0-2.95-7.16Zm-7 15.41h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.8.82-2.99-.19-.31a8.23 8.23 0 1 1 6.93 3.82Zm4.51-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.07-.25-.13-1.04-.39-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function FloatingWhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-[1200] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_14px_28px_rgba(8,38,74,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 lg:hidden"
    >
      <WhatsAppIcon />
    </Link>
  );
}
