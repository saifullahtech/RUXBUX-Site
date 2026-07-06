import Link from "next/link";
import Image from "next/image";
import MobileHeroSection from "./MobileHeroSection";

const features = [
  { label: "Saves Space", icon: BoxIcon },
  { label: "Easy to Use", icon: ThumbIcon },
  { label: "Premium Quality", icon: ShieldCheckIcon },
  { label: "Neat & Organized", icon: HangerIcon },
];

const trustPoints = [
  { label: "Cash on Delivery", icon: CashIcon },
  { label: "Free Shipping above Rs 3000", icon: TruckIcon },
  { label: "7 Days Easy Returns", icon: ShieldCheckIcon },
  { label: "WhatsApp Support", icon: WhatsAppIcon },
];

const heroTypography = {
  family: '"Segoe UI", "Sogo", Arial, sans-serif',
  eyebrow: "text-[8px] font-extrabold uppercase tracking-[0.05em] lg:text-[11px] lg:tracking-[0.08em]",
  title: "text-[27px] font-bold leading-[0.94] sm:text-[50px] lg:text-[56px] lg:leading-[0.98]",
  body: "text-[13px] font-semibold leading-[1.4] lg:text-[15px] lg:leading-7",
  featureLabel: "text-[12px] font-bold leading-4",
  primaryButton: "text-xl font-bold",
  offerPercent: "text-[34px] font-bold leading-none",
  offerText: "text-[27px] font-bold uppercase leading-none",
  offerCaption: "text-xs font-sembold",
  trustLabel: "text-[12px] font-bold leading-5 sm:text-[13px]",
};

function SparkleIcon({ className = "h-4 w-4" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.8 3.6 2.4 5.2 6 6-3.6.8-5.2 2.4-6 6-.8-3.6-2.4-5.2-6-6 3.6-.8 5.2-2.4 6-6Z" />
    </svg>
  );
}

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

function BoxIcon({ className = "h-6 w-6" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="m12 2.8 8 4.4v9.6l-8 4.4-8-4.4V7.2l8-4.4Z" />
      <path d="m4.4 7.3 7.6 4.2 7.6-4.2" />
      <path d="M12 11.5v9.2" />
      <path d="m8.1 5.2 7.8 4.4" />
    </svg>
  );
}

function ThumbIcon({ className = "h-6 w-6" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      <path d="M7 11 11 2a3 3 0 0 1 3 3v4h5.2a2.4 2.4 0 0 1 2.3 3l-1.6 7A3 3 0 0 1 17 22H7V11Z" />
    </svg>
  );
}

function HangerIcon({ className = "h-6 w-6" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M12 7a2 2 0 1 0-2-2" />
      <path d="M12 7v3.5" />
      <path d="m4 18 8-7.5 8 7.5" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CashIcon({ className = "h-9 w-9" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9">
      <rect width="17" height="11" x="3" y="7" rx="1.8" />
      <path d="M7 7V5h14v10h-1" />
      <circle cx="11.5" cy="12.5" r="2.3" />
      <path d="M6.5 10h.01M16.5 15h.01" />
    </svg>
  );
}

function TruckIcon({ className = "h-9 w-9" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9">
      <path d="M14 18V7a2 2 0 0 0-2-2H4v13h2" />
      <path d="M14 9h4l3 4v5h-2" />
      <path d="M8 18h7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "h-6 w-6" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#fffaf1]"
      style={{ fontFamily: heroTypography.family }}
    >
      <MobileHeroSection />

      <div className="hidden md:block">
        <div className="absolute inset-y-0 right-0 hidden w-[64%] lg:block">
          <Image
            src="/hero/stacksmart-organizer.jpg"
            alt="StackSmart Organizer in a wardrobe"
            fill
            priority
            sizes="(min-width: 980px) 64vw, 0px"
            className="object-cover object-[60%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fffaf1_0%,rgba(255,250,241,0.94)_8%,rgba(255,250,241,0.62)_25%,rgba(255,250,241,0.08)_46%,rgba(255,250,241,0)_100%)]" />
        </div>

        <div className="absolute left-0 top-0 hidden h-full w-36 bg-[radial-gradient(circle,#eadfcd_1.4px,transparent_1.6px)] bg-[length:18px_18px] opacity-70 md:block" />

        <div className="relative mx-auto max-w-[1366px] px-8 py-10 lg:min-h-[540px] lg:px-20 lg:py-7">
          <div className="grid items-start gap-8 lg:grid-cols-[44%_56%]">
            <div className="relative z-10 mx-auto max-w-[680px] text-center lg:mx-0 lg:max-w-[560px] lg:text-left">
              <div className={`inline-flex items-center gap-3 rounded-full border border-[#d99b43] bg-white/75 px-5 py-2.5 text-[#08264a] shadow-sm backdrop-blur ${heroTypography.eyebrow}`}>
                <span className="text-[#d8952f]">
                  <SparkleIcon />
                </span>
                Smart Storage. Maximum Space.
              </div>

              <h1 className={`mt-5 text-[#08264a] ${heroTypography.title}`}>
                An Organized Wardrobe.
                <span className="mt-2 block text-[#d09635]">The Smart Way.</span>
              </h1>

              <p className={`mx-auto mt-4 max-w-[500px] text-[#303846] lg:mx-0 ${heroTypography.body}`}>
                StackSmart Organizer keeps your clothes well-ventilated, neatly stored, and perfectly arranged.
              </p>

              <div className="mx-auto mt-5 grid max-w-[560px] grid-cols-4 gap-4 lg:mx-0 lg:mt-3 lg:max-w-[500px]">
                {features.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex min-w-0 flex-col items-center gap-3 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4ecdf] text-[#08264a]">
                      <Icon />
                    </span>
                    <span className={`min-h-8 text-[#08264a] ${heroTypography.featureLabel}`}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row lg:mt-3 lg:justify-start">
                <Link
                  href="/products/stacksmart-organizer"
                  className={`inline-flex h-14 items-center justify-center gap-4 rounded-lg bg-[#08264a] px-8 text-white shadow-[0_16px_36px_rgba(8,38,74,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0b315e] ${heroTypography.primaryButton}`}
                >
                  <span className="text-[#eba12b]">
                    <BagIcon />
                  </span>
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="relative z-0 mt-4 min-h-[420px] overflow-hidden rounded-2xl shadow-[0_22px_55px_rgba(8,38,74,0.14)] lg:mt-0 lg:min-h-[520px] lg:overflow-visible lg:rounded-none lg:shadow-none">
              <div className="absolute inset-0 lg:hidden">
                <Image
                  src="/hero/stacksmart-organizer.jpg"
                  alt="StackSmart Organizer in a wardrobe"
                  fill
                  priority
                  sizes="(min-width: 768px) 92vw, 0px"
                  className="object-cover object-[55%_55%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,241,0.08)_0%,rgba(255,250,241,0.02)_55%,rgba(255,250,241,0.72)_100%)]" />
              </div>
              <div className="absolute left-10 top-2 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#08264a] text-center text-white shadow-[0_16px_34px_rgba(8,38,74,0.35)] ring-2 ring-[#d8952f] ring-offset-4 ring-offset-[#08264a]">
                <span className="absolute top-3 text-[#d8952f]">
                  <SparkleIcon className="h-3 w-3" />
                </span>
                <span className={`text-[#d8952f] ${heroTypography.offerPercent}`}>10%</span>
                <span className={`text-[#d8952f] ${heroTypography.offerText}`}>Off</span>
                <span className={`mt-2 ${heroTypography.offerCaption}`}>Prepaid Orders</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 mx-auto mt-6 max-w-[640px] rounded-2xl bg-white/95 px-7 py-5 shadow-[0_22px_55px_rgba(8,38,74,0.16)] backdrop-blur lg:absolute lg:bottom-8 lg:right-20 lg:mt-0 lg:w-[600px] lg:max-w-none">
            <div className="grid grid-cols-4 gap-y-5">
              {trustPoints.map(({ label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={`flex min-w-0 flex-col items-center gap-2 px-3 text-center text-[#08264a] ${
                    index > 0 ? "border-l border-[#e8ded0]" : ""
                  }`}
                >
                  <Icon className="h-9 w-9" />
                  <span className={heroTypography.trustLabel}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
