const privacyHighlights = [
  {
    title: "Information we collect",
    text: "We collect information you provide directly, technical site data, and details from trusted service partners.",
  },
  {
    title: "How we use it",
    text: "Your information helps us process orders, communicate updates, improve service, and protect the business.",
  },
  {
    title: "Your rights",
    text: "Depending on applicable law, you may request access, correction, deletion, or marketing opt-out support.",
  },
];

const sharingRows = [
  {
    category: "Contact and order information",
    recipients:
      "Courier partners, payment handlers, fulfillment providers, and customer support tools",
  },
  {
    category: "Usage and device information",
    recipients: "Analytics, advertising, and website performance partners",
  },
  {
    category: "Support communications",
    recipients:
      "Internal support staff and tools used to manage inquiries or returns",
  },
];

const privacySections = [
  {
    number: "01",
    title: "Overview",
    paragraphs: [
      `This Privacy Policy describes how RUXBUX (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase through our website or otherwise communicate with us regarding the Site (collectively, the "Services"). For the purpose of this Privacy Policy, "you" means a website visitor, customer, or anyone whose information we collect through the Services.`,
      `Please read this Privacy Policy carefully. By using our Services, you agree to the collection, use, and disclosure of your information as described here. If you do not agree, please do not use the Site or place an order.`,
    ],
  },
  {
    number: "02",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      `We may update this Privacy Policy from time to time for operational, legal, or regulatory reasons. Any updated version will be posted on this page with a new "Last updated" date.`,
    ],
  },
  {
    number: "03",
    title: "How We Collect and Use Personal Information",
    paragraphs: [
      `To provide the Services, we collect personal information from a variety of sources depending on how you interact with us. We use this information to process orders, communicate with you, improve our Services, protect our business, and comply with legal obligations.`,
    ],
  },
  {
    number: "04",
    title: "Information We Collect Directly from You",
    paragraphs: ["Information you provide directly may include:"],
    bullets: [
      "Contact details such as your name, address, phone number, and email address.",
      "Order details such as billing information, shipping address, selected quantity, and transaction details.",
      "Customer support information including messages, photos, videos, or other details you share when requesting help.",
    ],
  },
  {
    number: "05",
    title: "Information We Collect Automatically",
    paragraphs: [
      `We may automatically collect certain technical and usage information when you browse or use our Site. This may include your IP address, browser type, device information, pages visited, time spent on pages, and general site interaction data.`,
    ],
  },
  {
    number: "06",
    title: "Information We Receive from Third Parties",
    paragraphs: [
      `We may receive information about you from service providers and business partners who support hosting, analytics, marketing, payment handling, fulfillment, or customer support operations.`,
    ],
  },
  {
    number: "07",
    title: "How We Use Your Information",
    bullets: [
      "To process, confirm, and deliver your orders.",
      "To contact you about purchases, returns, delivery updates, and support requests.",
      "To improve our products, website experience, and customer service.",
      "To prevent fraud, abuse, or unauthorized activity.",
      "To send promotional messages where permitted by law or where you have opted in.",
    ],
  },
  {
    number: "08",
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      `Like many websites, we use cookies and similar technologies to remember your preferences, measure traffic, analyze usage, and improve site performance. You can usually control cookies through your browser settings, but disabling them may affect some site functionality.`,
    ],
  },
  {
    number: "09",
    title: "How We Share Personal Information",
    paragraphs: [
      `We may share your information with service providers and other parties when it is necessary to run our business, fulfill orders, comply with legal duties, or protect our rights.`,
    ],
    table: sharingRows,
  },
  {
    number: "10",
    title: "Marketing and Advertising",
    paragraphs: [
      `We may use limited information for advertising, remarketing, and performance measurement where permitted by law. You can opt out of promotional messages at any time by following the unsubscribe instructions or contacting us directly.`,
    ],
  },
  {
    number: "11",
    title: "Data Retention",
    paragraphs: [
      `We keep personal information only as long as reasonably necessary to provide the Services, maintain records, resolve disputes, enforce our agreements, and comply with legal obligations.`,
    ],
  },
  {
    number: "12",
    title: "Security",
    paragraphs: [
      `We use reasonable safeguards to protect personal information, but no system is completely secure. You should avoid sending sensitive information through insecure channels unless requested and verified by our support team.`,
    ],
  },
  {
    number: "13",
    title: "Your Rights",
    paragraphs: ["Depending on applicable law, you may have rights such as:"],
    bullets: [
      "Requesting access to the personal information we hold about you.",
      "Requesting correction of inaccurate or incomplete information.",
      "Requesting deletion of personal information, subject to legal exceptions.",
      "Withdrawing marketing consent where processing is based on consent.",
    ],
  },
  {
    number: "14",
    title: "Children's Privacy",
    paragraphs: [
      `Our Services are not intended for children, and we do not knowingly collect personal information from children in violation of applicable law.`,
    ],
  },
  {
    number: "15",
    title: "Third-Party Links",
    paragraphs: [
      `Our Site may contain links to third-party websites or services. We are not responsible for the privacy or security practices of those third parties, and we encourage you to review their policies separately.`,
    ],
  },
  {
    number: "16",
    title: "Contact",
    paragraphs: [
      `If you have questions about this Privacy Policy or want to make a privacy request, please contact us at ruxbuxofficial@gmail.com or visit us at House 115, Street 1, G Block, DHA Phase 8, Lahore 54000, Pakistan.`,
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

function ShieldIcon() {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.94a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7Z" />
      <path d="m9 12 2 2 4-4" />
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

export const metadata = {
  title: "Privacy Policy | RUXBUX",
  description:
    "Learn how RUXBUX collects, uses, shares, and protects personal information when you visit, use services, or make a purchase.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#08264A]">
      <section className="relative overflow-hidden border-b border-[#EADCC8] bg-gradient-to-b from-[#FFFDF8] to-[#F8EFE2]">
        <div className="pointer-events-none absolute left-0 top-12 hidden h-60 w-60 rounded-full bg-[#E8D4B8]/35 blur-3xl lg:block" />
        <div className="pointer-events-none absolute right-0 top-8 hidden h-64 w-64 rounded-full bg-[#D99000]/10 blur-3xl lg:block" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_340px] lg:px-8 lg:py-20">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D99000] sm:text-sm sm:tracking-[0.25em]">
              Privacy & Data
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#08264A] sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#334155] sm:text-lg lg:mx-0">
              How RUXBUX collects, uses, and discloses personal information
              when you visit, communicate with us, or place an order.
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
              <ShieldIcon />
            </div>
            <h2 className="mt-5 text-xl font-bold text-[#08264A]">
              Clear and practical
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#334155]">
              This policy explains the data connected to orders, support,
              delivery, analytics, marketing, security, and your privacy rights.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {privacyHighlights.map((item) => (
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
            {privacySections.map((section, index) => (
              <section
                key={section.number}
                className={`flex min-w-0 flex-col gap-3 min-[420px]:flex-row min-[420px]:gap-4 sm:gap-6 ${
                  index !== privacySections.length - 1
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

                  {section.table && (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#EADCC8]">
                      <div className="grid bg-[#FFF8ED] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#8A5B20] sm:grid-cols-[0.8fr_1.2fr]">
                        <span>Category</span>
                        <span className="hidden sm:block">
                          Examples of Recipients
                        </span>
                      </div>

                      {section.table.map((row) => (
                        <div
                          key={row.category}
                          className="grid gap-1 border-t border-[#EADCC8] px-4 py-4 text-sm leading-6 text-[#26364A] sm:grid-cols-[0.8fr_1.2fr] sm:gap-4"
                        >
                          <h3 className="font-bold text-[#08264A]">
                            {row.category}
                          </h3>
                          <p>{row.recipients}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.title === "Contact" && (
                    <a
                      href="mailto:ruxbuxofficial@gmail.com"
                      className="mt-3 inline-block break-all font-semibold text-[#D99000] transition hover:text-[#B86F00]"
                    >
                      ruxbuxofficial@gmail.com
                    </a>
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
              Privacy questions? Email us at{" "}
              <a
                href="mailto:ruxbuxofficial@gmail.com"
                className="break-all font-bold text-[#D99000] hover:text-[#B86F00]"
              >
                ruxbuxofficial@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
