import Image from "next/image";
import Link from "next/link";

const features = [
  { label: "Saves space", icon: BoxIcon },
  { label: "Easy to use", icon: ThumbIcon },
  { label: "Premium quality", icon: ShieldCheckIcon },
  { label: "Neat and organized", icon: HangerIcon },
];

const trustItems = [
  { label: "COD", icon: CashIcon },
  { label: "Fast delivery", icon: TruckIcon },
  { label: "7-day returns", icon: ReturnIcon },
  { label: "Support", icon: HeadsetIcon },
];

const avatarPhotos = [
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=47",
];

function BagIcon({ className = "h-7 w-7" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M6.5 8.5h11l1 11h-13l1-11Z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-7 w-7" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2a9.93 9.93 0 0 0-8.57 14.95L2.05 22l5.17-1.35A9.9 9.9 0 0 0 12.04 22h.01A9.94 9.94 0 0 0 22 12.07a9.84 9.84 0 0 0-2.95-7.16Zm-7 15.41h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.8.82-2.99-.19-.31a8.23 8.23 0 1 1 6.93 3.82Zm4.51-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.07-.25-.13-1.04-.39-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

function BoxIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="m12 2.8 8 4.4v9.6l-8 4.4-8-4.4V7.2l8-4.4Z" />
      <path d="m4.4 7.3 7.6 4.2 7.6-4.2" />
      <path d="M12 11.5v9.2" />
    </svg>
  );
}

function ThumbIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      <path d="M7 11 11 2a3 3 0 0 1 3 3v4h5.2a2.4 2.4 0 0 1 2.3 3l-1.6 7A3 3 0 0 1 17 22H7V11Z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function HangerIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M12 7a2 2 0 1 0-2-2" />
      <path d="M12 7v3.5" />
      <path d="m4 18 8-7.5 8 7.5" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CashIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <rect width="17" height="11" x="3" y="7" rx="1.8" />
      <path d="M7 7V5h14v10h-1" />
      <circle cx="11.5" cy="12.5" r="2.3" />
      <path d="M6.5 10h.01M16.5 15h.01" />
    </svg>
  );
}

function TruckIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M14 18V7a2 2 0 0 0-2-2H4v13h2" />
      <path d="M14 9h4l3 4v5h-2" />
      <path d="M8 18h7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function ReturnIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M3 12a9 9 0 0 1 15.4-6.4" />
      <path d="M18.5 2.5v4h-4" />
      <path d="M21 12a9 9 0 0 1-15.4 6.4" />
      <path d="M5.5 21.5v-4h4" />
    </svg>
  );
}

function HeadsetIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v4a2 2 0 0 0 2 2h1v-8H6a2 2 0 0 0-2 2Z" />
      <path d="M20 13v4a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z" />
      <path d="M14 21h-2" />
    </svg>
  );
}

function StarIcon({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

export default function MobileHeroSection() {
  return (
    <section className="w-full overflow-hidden bg-[#fffaf1] text-[#061F45] md:hidden">
      <div
        className="overflow-hidden pb-4"
        style={{ width: "100dvw", maxWidth: "100dvw" }}
      >
        <div className="relative h-[300px] w-full overflow-hidden bg-[#e9dac4]">
          <Image
            src="/hero/stacksmart-organizer.jpg"
            alt="StackSmart Organizer keeping shirts and jeans neatly stacked"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 0px"
            className="scale-[1.12] object-cover object-[54%_70%]"
          />
          <div className="absolute inset-x-0 top-0 z-10 h-20 bg-[linear-gradient(180deg,rgba(6,31,69,0.12),rgba(6,31,69,0))]" />
          <div className="absolute inset-x-0 -bottom-8 z-10 h-56 bg-[linear-gradient(0deg,#fffaf1_0%,#fffaf1_36%,rgba(255,250,241,0.98)_68%,rgba(255,250,241,0)_100%)]" />

          <div className="absolute left-1/2 top-4 z-20 flex h-10 w-[72%] -translate-x-1/2 items-center justify-center rounded-full border border-[#d6a14b] bg-[#fffaf1]/95 px-3 text-center text-[9px] font-extrabold uppercase tracking-[0.14em] shadow-[0_10px_24px_rgba(6,31,69,0.12)] ring-2 ring-white/80">
            <span className="absolute -left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#fffaf1] ring-1 ring-[#d6a14b]" />
            <span className="absolute -right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#fffaf1] ring-1 ring-[#d6a14b]" />
            Smart Storage. Maximum Space.
          </div>

          <div className="absolute right-12 top-[84px] z-20 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full border-[3px] border-[#d99a2b] bg-[#061F45] text-center text-white shadow-[0_18px_36px_rgba(6,31,69,0.34)]">
            <span className="text-[19px] font-extrabold leading-none text-[#f2c064]">10%</span>
            <span className="text-[16px] font-extrabold uppercase leading-none text-[#f2c064]">Off</span>
            <span className="mt-1 text-[7px] font-bold leading-none">Prepaid orders</span>
          </div>
        </div>

        <div className="relative z-30 -mt-32 px-4 text-center">
          <h1
            className="relative z-30 mx-auto max-w-[330px] text-[29px] font-bold leading-[0.96] text-[#061F45]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            An Organized Wardrobe.
            <span className="block text-[#c9902d]">The smart way</span>
          </h1>

          <p className="relative z-30 mx-auto mt-2 max-w-[330px] text-[14px] font-medium leading-[1.2] text-[#263241]">
            StackSmart Organizer keeps your clothes well-ventilated, neatly stored, and perfectly arranged.
          </p>

          <div className="mx-auto mt-4 grid max-w-[350px] grid-cols-4">
            {features.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-w-0 flex-col items-center gap-1 px-0.5 text-center"
              >
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#efd8b3] bg-[#fff7ea] text-[#061F45] [&>svg]:h-5 [&>svg]:w-5">
                  <Icon />
                </span>
                <span className="min-h-[25px] text-[10.5px] font-bold leading-[1.05] text-[#1f2937]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-3 flex max-w-[350px] flex-col gap-2">
            <Link
              href="/products/stacksmart-organizer"
              className="inline-flex h-[48px] items-center justify-center gap-3 rounded-xl border border-[#d99a2b] bg-[#061F45] px-6 text-[19px] font-extrabold text-white shadow-[0_14px_28px_rgba(6,31,69,0.24)]"
            >
              <span className="text-[#f2c064]">
                <BagIcon className="h-6 w-6" />
              </span>
              Shop now
            </Link>
            <Link
              href="https://wa.me/923020441525"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[44px] items-center justify-center gap-3 rounded-xl border-2 border-[#061F45] bg-white/80 px-5 text-[17px] font-extrabold text-[#061F45] shadow-[0_8px_20px_rgba(6,31,69,0.08)]"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Order on WhatsApp
            </Link>
          </div>

          <div className="mx-auto mt-3 flex max-w-[350px] items-center justify-center gap-2 text-left">
            <div className="flex -space-x-3 rounded-full border border-[#efd8b3] bg-[#fff7ea] px-2 py-1">
              {avatarPhotos.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt="Happy customer"
                  width={42}
                  height={42}
                  className="h-[32px] w-[32px] rounded-full object-cover ring-2 ring-[#fffaf1]"
                  style={{ zIndex: avatarPhotos.length - index }}
                />
              ))}
            </div>

            <span className="flex shrink-0 items-center gap-0.5 text-[#d99a2b]">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="h-[13px] w-[13px]" />
              ))}
            </span>
            <span className="shrink-0 text-[16px] font-extrabold text-[#061F45]">4.9/5</span>
            <span className="max-w-[72px] text-[10px] font-medium leading-[1.15] text-[#263241]">
              22,000+ happy customers
            </span>
          </div>

          <div className="mx-auto mt-3 max-w-[350px] rounded-xl border border-[#ead9be] bg-white/58 px-2 py-3 shadow-[0_12px_28px_rgba(6,31,69,0.06)]">
            <div className="grid grid-cols-4">
              {trustItems.map(({ label, icon: Icon }) => (
                <div key={label} className="flex min-w-0 flex-col items-center gap-1 px-1 text-center">
                  <span className="flex h-8 w-8 items-center justify-center text-[#a5661f] [&>svg]:h-6 [&>svg]:w-6">
                    <Icon />
                  </span>
                  <span className="text-[12px] font-medium leading-[1.1] text-[#252b33]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
