const refundHighlights = [
  {
    title: "7-day window",
    text: "Return or exchange requests must be made within 7 days of receiving your order.",
  },
  {
    title: "Inspection first",
    text: "Refunds are approved after the returned item is received and checked by our team.",
  },
  {
    title: "Support ready",
    text: "Start your request by contacting us with your order number, city, and reason.",
  },
];

const refundSections = [
  {
    number: "01",
    title: "Overview",
    paragraphs: [
      "We want you to be happy with your StackSmart Organizer. If something is not right with your order, please review the return, exchange, and refund terms below.",
    ],
  },
  {
    number: "02",
    title: "7-Day Return Window",
    paragraphs: [
      "You may request a return or exchange within 7 days of receiving your order, subject to the following conditions:",
    ],
    bullets: [
      "The product must be unused, undamaged, and returned in its original condition.",
      "Original packaging, inserts, and proof of purchase should be included where available.",
      "Returns may be refused for items that are broken after delivery, altered, incomplete, or not in resellable condition.",
    ],
  },
  {
    number: "03",
    title: "Refunds",
    paragraphs: [
      "Once the returned item is received and inspected, we will inform you whether the refund is approved.",
      "If approved, refunds are typically processed within 3 to 7 working days through the original payment method or bank transfer for eligible COD orders.",
      "Shipping charges are non-refundable unless the wrong item was sent or the product arrived damaged due to our error.",
    ],
  },
  {
    number: "04",
    title: "Exchanges",
    paragraphs: [
      "We offer exchanges for defective, damaged, or incorrectly delivered items, subject to stock availability.",
      "If the same item is unavailable, we may offer a replacement, store adjustment, or refund depending on the situation.",
    ],
  },
  {
    number: "05",
    title: "Return Process",
    steps: [
      "Contact us by WhatsApp or email with your order number, city, and reason for the return request.",
      "Our support team will confirm eligibility and guide you through the next steps.",
      "You may be asked to share photos or videos of the item and packaging before approval.",
      "Once approved, the product may need to be sent back through a courier service or arranged pickup where available.",
      "After inspection, we will process the refund or dispatch the approved replacement.",
    ],
  },
  {
    number: "06",
    title: "Non-Returnable Situations",
    bullets: [
      "Change-of-mind returns after the 7-day window.",
      "Items damaged because of misuse, mishandling, or improper storage after delivery.",
      "Bulk or promotional orders marked as final sale, if clearly communicated at checkout.",
    ],
  },
  {
    number: "07",
    title: "Need Help?",
    paragraphs: [
      "If you have any questions or want to start a return, please contact us:",
    ],
    contacts: [
      { label: "Email", value: "ruxbuxofficial@gmail.com", href: "mailto:ruxbuxofficial@gmail.com" },
      { label: "WhatsApp", value: "+923020441525", href: "https://wa.me/923020441525" },
    ],
  },
];

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ReturnIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10a6 6 0 0 1 0 12h-2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2a9.93 9.93 0 0 0-8.57 14.95L2.05 22l5.17-1.35A9.9 9.9 0 0 0 12.04 22h.01A9.94 9.94 0 0 0 22 12.07a9.84 9.84 0 0 0-2.95-7.16Zm-7 15.41h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.8.82-2.99-.19-.31a8.23 8.23 0 1 1 6.93 3.82Zm4.51-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.07-.25-.13-1.04-.39-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export const metadata = {
  title: "Refund Policy | RUXBUX",
  description:
    "Read the RUXBUX refund policy for StackSmart Organizer returns, exchanges, refund timelines, return process, and support contact details.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#08264A]">
      <section className="relative overflow-hidden border-b border-[#EADCC8] bg-gradient-to-b from-[#FFFDF8] to-[#F8EFE2]">
        <div className="pointer-events-none absolute left-0 top-12 hidden h-60 w-60 rounded-full bg-[#E8D4B8]/35 blur-3xl lg:block" />
        <div className="pointer-events-none absolute right-0 top-8 hidden h-64 w-64 rounded-full bg-[#D99000]/10 blur-3xl lg:block" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_340px] lg:px-8 lg:py-20">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D99000] sm:text-sm sm:tracking-[0.25em]">
              Returns & Support
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#08264A] sm:text-5xl lg:text-6xl">
              Refund Policy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#334155] sm:text-lg lg:mx-0">
              Return, exchange, and refund terms for your StackSmart Organizer
              order.
            </p>

            <div className="mx-auto mt-5 flex w-fit max-w-full items-center gap-2 rounded-full border border-[#E6D4BE] bg-white px-4 py-2 text-xs font-medium text-[#334155] shadow-sm sm:px-5 sm:text-sm lg:mx-0">
              <span className="text-[#D99000]">
                <CalendarIcon />
              </span>
              <span>Last updated: March 27, 2026</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-2xl border border-[#E2C9A5] bg-white/80 p-5 shadow-[0_20px_70px_rgba(8,38,74,0.10)] backdrop-blur sm:p-6 lg:mx-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5EBDD] text-[#B86F00]">
              <ReturnIcon />
            </div>
            <h2 className="mt-5 text-xl font-bold text-[#08264A]">
              Start within 7 days
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#334155]">
              Keep the product unused, in original condition, and contact us
              quickly with your order details so our team can guide the next
              step.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {refundHighlights.map((item) => (
              <section
                key={item.title}
                className="rounded-2xl border border-[#EADCC8] bg-white px-4 py-5 shadow-sm sm:px-5"
              >
                <h2 className="text-base font-bold text-[#08264A]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#334155]">
                  {item.text}
                </p>
              </section>
            ))}
          </div>

          <article className="mt-6 rounded-2xl border border-[#EADCC8] bg-white px-4 py-6 shadow-[0_20px_70px_rgba(8,38,74,0.10)] sm:mt-8 sm:rounded-3xl sm:px-8 sm:py-8 lg:px-12 lg:py-12">
            {refundSections.map((section, index) => (
              <section
                key={section.number}
                className={`flex min-w-0 flex-col gap-3 min-[420px]:flex-row min-[420px]:gap-4 sm:gap-6 ${
                  index !== refundSections.length - 1
                    ? "mb-6 border-b border-[#EADCC8] pb-6 sm:mb-8 sm:pb-8"
                    : ""
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5EBDD] text-sm font-bold text-[#B86F00] sm:h-10 sm:w-10 sm:rounded-xl">
                  {section.number}
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-bold tracking-tight text-[#08264A] sm:text-2xl">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-2 text-sm leading-7 text-[#26364A] sm:mt-3 sm:text-base sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[#26364A] sm:text-base">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D99000]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.steps && (
                    <ol className="mt-4 space-y-3 text-sm leading-7 text-[#26364A] sm:text-base">
                      {section.steps.map((item, stepIndex) => (
                        <li key={item} className="flex gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF8ED] text-xs font-bold text-[#B86F00] ring-1 ring-[#E2C9A5]">
                            {stepIndex + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.contacts && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {section.contacts.map((contact) => (
                        <a
                          key={contact.href}
                          href={contact.href}
                          className="rounded-2xl border border-[#EADCC8] bg-[#FFF8ED] px-4 py-3 text-sm font-semibold text-[#08264A] transition hover:border-[#D99000] hover:bg-white"
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          <span className="block text-xs uppercase tracking-[0.12em] text-[#8A5B20]">
                            {contact.label}
                          </span>
                          <span className="mt-1 block break-all text-[#D99000]">
                            {contact.value}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </article>

          <div className="mx-auto mt-6 flex max-w-2xl flex-col items-center justify-center gap-3 rounded-2xl border border-[#E2C9A5] bg-[#FFF8ED] px-4 py-5 text-center shadow-sm sm:mt-8 sm:flex-row sm:px-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#D99000] shadow-sm">
              <MailIcon />
            </div>

            <p className="min-w-0 text-sm font-medium text-[#08264A] sm:text-base">
              Need help with a return? Email{" "}
              <a
                href="mailto:ruxbuxofficial@gmail.com"
                className="break-all font-bold text-[#D99000] hover:text-[#B86F00]"
              >
                ruxbuxofficial@gmail.com
              </a>{" "}
              or message us on{" "}
              <a
                href="https://wa.me/923020441525"
                className="inline-flex items-center gap-1 font-bold text-[#D99000] hover:text-[#B86F00]"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
