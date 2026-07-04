const benefits = [
  {
    title: "Maximize Space",
    description: "Stack vertically to utilize unused space in your wardrobe.",
    icon: StackIcon,
  },
  {
    title: "Ventilated Design",
    description: "Smart ventilation keeps your clothes fresh and odor-free.",
    icon: VentIcon,
  },
  {
    title: "Heavy-Duty Build",
    description: "Made from strong, durable plastic for long-lasting use.",
    icon: DiamondIcon,
  },
  {
    title: "Easy to Assemble",
    description: "No tools required. Set up in seconds and start organizing.",
    icon: CheckIcon,
  },
];

const steps = [
  {
    number: "01",
    title: "Unbox",
    description: "Open the box and take out all parts.",
    icon: BoxIcon,
  },
  {
    number: "02",
    title: "Assemble",
    description: "Stack the trays together with the support clips.",
    icon: StackIcon,
  },
  {
    number: "03",
    title: "Organize",
    description: "Place your clothes and enjoy an organized space.",
    icon: FoldedClothesIcon,
  },
];

function StackIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 17 8 4 8-4" />
    </svg>
  );
}

function VentIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M5 6h9" />
      <path d="M5 12h13" />
      <path d="M5 18h9" />
      <circle cx="17.5" cy="6" r="1.8" />
      <circle cx="9" cy="12" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  );
}

function DiamondIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
      <path d="M6.2 4h11.6L22 9l-10 11L2 9l4.2-5Z" />
      <path d="M2 9h20" />
      <path d="m8 9 4 11 4-11" />
      <path d="m6.2 4 1.8 5 4-5 4 5 1.8-5" />
    </svg>
  );
}

function CheckIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.2 2.4 2.5 5.4-5.7" />
    </svg>
  );
}

function BoxIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="m12 3 8 4.4v9.2L12 21l-8-4.4V7.4L12 3Z" />
      <path d="m4.4 7.6 7.6 4.2 7.6-4.2" />
      <path d="M12 11.8V21" />
      <path d="m8 5.2 7.8 4.3" />
    </svg>
  );
}

function FoldedClothesIcon({ className = "h-8 w-8" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <rect x="5" y="5" width="14" height="4.2" rx="1.4" />
      <rect x="4" y="10" width="16" height="4.2" rx="1.4" />
      <rect x="5" y="15" width="14" height="4.2" rx="1.4" />
      <path d="M8 7h8" />
      <path d="M8 12h8" />
      <path d="M8 17h8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-16 text-[#9aa4b2]" viewBox="0 0 72 18" fill="none">
      <path d="M2 9h64" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" strokeDasharray="4 5" />
      <path d="m62 4 6 5-6 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function HowStackSmartWorksSection() {
  return (
    <section className="bg-[#faf7f1] px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
      <div className="mx-auto max-w-[980px]">
        <h2 className="text-center text-[22px] font-extrabold leading-tight text-[#08264a] sm:text-[28px]">
          How <span className="text-[#d8952f]">StackSmart Organizer</span> Works
        </h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-4">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <div key={title} className="contents">
              <article className="relative flex min-w-0 items-center gap-4 rounded-xl bg-white/80 px-4 py-3 sm:px-5 lg:bg-transparent lg:px-0 lg:py-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#08264a] text-[11px] font-extrabold text-white shadow-[0_10px_22px_rgba(8,38,74,0.18)]">
                  {number}
                </span>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5f0ea] text-[#b9812e] sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[14px] font-extrabold leading-tight text-[#08264a] sm:text-[15px]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[12px] font-semibold leading-[1.35] text-[#26364a] sm:text-[13px]">
                    {description}
                  </p>
                </div>
              </article>

              {index < steps.length - 1 ? (
                <div className="hidden justify-center lg:flex">
                  <ArrowIcon />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StackSmartInfoSections() {
  return (
    <section className="bg-white">
      <div className="bg-[#08264a] px-3 py-4 sm:px-5 sm:py-5 lg:px-8 lg:py-7">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[22px] font-extrabold leading-tight text-white sm:text-[26px] lg:text-[30px]">
            Built for a Cleaner, Smarter Wardrobe
          </h2>
        </div>

        <div className="mx-auto mt-3 grid max-w-[980px] grid-cols-2 gap-2 sm:mt-4 lg:mt-6 lg:grid-cols-4 lg:gap-0">
          {benefits.map(({ title, icon: Icon }, index) => (
            <article
              key={title}
              className={`flex min-w-0 flex-col items-center rounded-lg bg-white/7 px-2 py-3 text-center lg:rounded-none lg:bg-transparent lg:px-4 lg:py-0 ${
                index % 2 === 1 ? "border-l border-white/12 lg:border-l-0" : ""
              } ${
                index > 0 ? "lg:border-l lg:border-white/20" : ""
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#d8952f] ring-1 ring-white/12 sm:h-12 sm:w-12 lg:h-16 lg:w-16">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
              </span>
              <h3 className="mt-2 text-[12px] font-extrabold leading-tight text-white sm:text-[13px] lg:mt-4 lg:text-base">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>

      <HowStackSmartWorksSection />
    </section>
  );
}
