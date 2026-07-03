import Image from "next/image";
import Link from "next/link";

function BagIcon({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M6.5 8.5h11l1 11h-13l1-11Z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2a9.93 9.93 0 0 0-8.57 14.95L2.05 22l5.17-1.35A9.9 9.9 0 0 0 12.04 22h.01A9.94 9.94 0 0 0 22 12.07a9.84 9.84 0 0 0-2.95-7.16Zm-7 15.41h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.8.82-2.99-.19-.31a8.23 8.23 0 1 1 6.93 3.82Zm4.51-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.07-.25-.13-1.04-.39-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function BottomCtaSection() {
  return (
    <section className="bg-[#fffdf8] px-4 pb-12 pt-2 sm:px-6 sm:pb-14 lg:px-8">
      <div className="mx-auto max-w-[1040px] overflow-hidden rounded-2xl bg-[#eadcc6] shadow-[0_22px_58px_rgba(8,38,74,0.12)]">
        <div className="grid min-h-[260px] items-center gap-5 px-5 py-7 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:px-10 lg:py-0">
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="mx-auto max-w-[420px] text-3xl font-extrabold leading-tight text-[#08264a] sm:text-4xl lg:mx-0">
              Ready to Organize Your Wardrobe?
            </h2>
            <p className="mx-auto mt-3 max-w-[400px] text-sm font-semibold leading-6 text-[#344256] sm:text-base lg:mx-0">
              Order now and enjoy a clutter-free life!
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/products/stacksmart-organizer"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[#08264a] px-6 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(8,38,74,0.22)] transition hover:bg-[#0b315e]"
              >
                <span className="text-[#d8952f]">
                  <BagIcon />
                </span>
                Shop Now
              </Link>
              <Link
                href="https://wa.me/923020441525"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[#d8952f] px-6 text-sm font-extrabold text-[#08264a] shadow-[0_14px_28px_rgba(216,149,47,0.24)] transition hover:bg-[#e3a94f]"
              >
                <WhatsAppIcon />
                Order on WhatsApp
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-[210px] w-full max-w-[460px] lg:h-[300px] lg:max-w-none">
            <Image
              src="/hero/stacksmart-organizer.PNG"
              alt="StackSmart organizer with neatly folded clothes"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-contain object-center drop-shadow-[0_22px_28px_rgba(8,38,74,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
