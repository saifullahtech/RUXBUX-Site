const faqs = [
  {
    question: "How many clothes can one StackSmart Organizer hold?",
    answer: "It depends on fabric thickness, but one organizer is ideal for neatly stacking shirts, t-shirts, jeans, scarves, or everyday folded clothes.",
  },
  {
    question: "Is StackSmart easy to assemble?",
    answer: "Yes. The trays stack together with support clips, so no tools are needed and setup only takes a few seconds.",
  },
  {
    question: "Will it fit inside my wardrobe?",
    answer: "StackSmart is designed for standard wardrobe shelves and helps use vertical shelf space more efficiently.",
  },
  {
    question: "Does the design keep clothes fresh?",
    answer: "Yes. The ventilated tray design allows airflow between layers, helping clothes stay neat and fresh.",
  },
  {
    question: "Is Cash on Delivery available?",
    answer: "Yes, Cash on Delivery is available across Pakistan for eligible orders.",
  },
  {
    question: "Can I use it for items other than clothes?",
    answer: "Absolutely. It works well for towels, kidswear, accessories, light linens, and daily wardrobe essentials.",
  },
];

function PlusIcon({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function FaqSection() {
  return (
    <section className="bg-[#fffdf8] px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-5 lg:px-8">
      <div className="mx-auto max-w-[1040px]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#e2c99f] bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d8952f] shadow-sm">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#08264a] sm:text-4xl">
            Questions Before You Organize?
          </h2>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-[#eadfcd] bg-white shadow-[0_12px_32px_rgba(8,38,74,0.06)] open:border-[#d8952f]/55"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-extrabold leading-snug text-[#08264a] marker:hidden sm:px-6">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f0ea] text-[#d8952f] transition group-open:rotate-45 group-open:bg-[#08264a]">
                  <PlusIcon className="h-4 w-4" />
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm font-semibold leading-6 text-[#334155] sm:px-6">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
