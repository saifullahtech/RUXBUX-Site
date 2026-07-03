const termsSections = [
  {
    number: "01",
    title: "Overview",
    text: `Welcome to RUXBUX. The terms "we", "us", and "our" refer to RUXBUX. We operate this website and related services to offer practical home-organization products, including the StackSmart Organizer. By visiting, using, or purchasing from our Services, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use our website or place an order.`,
  },
  {
    number: "02",
    title: "Eligibility and Information Accuracy",
    text: `You confirm that you are legally able to place an order in your jurisdiction. You also agree to provide accurate and complete contact, billing, and shipping information so we can process and deliver your order successfully.`,
  },
  {
    number: "03",
    title: "Product Information",
    text: `We try to present product details, dimensions, colors, and photos as accurately as possible. Minor differences may occur because of lighting, packaging updates, or screen settings. We may update or discontinue products without prior notice.`,
  },
  {
    number: "04",
    title: "Orders",
    text: `Placing an order is an offer to purchase. RUXBUX may accept, reject, or cancel an order if stock is unavailable, details are incomplete, pricing errors occur, or the order cannot be fulfilled. Returns and exchanges are handled according to our Refund Policy.`,
  },
  {
    number: "05",
    title: "Pricing and Payment",
    text: `Prices may change without notice. Unless clearly stated otherwise, shipping, taxes, and promotional discounts are applied according to the checkout shown at the time of order. You agree to provide valid payment and delivery details.`,
  },
  {
    number: "06",
    title: "Shipping and Delivery",
    text: `Delivery timelines are estimates and may vary because of city coverage, courier delays, weather conditions, or public holidays. Shipment risk passes when the parcel is handed to the courier, subject to applicable consumer law.`,
  },
  {
    number: "07",
    title: "Intellectual Property",
    text: `All website content, including text, graphics, logos, images, and product descriptions, belongs to RUXBUX or its licensors and may not be copied, reused, or commercially exploited without permission.`,
  },
  {
    number: "08",
    title: "Third-Party Links and Services",
    text: `We may link to third-party services, courier tools, or social media platforms for convenience. We are not responsible for third-party content, policies, or service interruptions on those external platforms.`,
  },
  {
    number: "09",
    title: "Reviews and Feedback",
    text: `Any reviews, comments, or feedback you submit may be used by RUXBUX for customer support, marketing, and product-improvement purposes without compensation to you, unless prohibited by law.`,
  },
  {
    number: "10",
    title: "Prohibited Uses",
    text: `You agree not to misuse the website, submit fraudulent orders, provide false information, interfere with site security, copy our content without permission, or use the Services in any unlawful way.`,
  },
  {
    number: "11",
    title: "Termination",
    text: `We may restrict or terminate access to the Services if we believe these Terms have been violated or if fraudulent or abusive behavior is detected.`,
  },
  {
    number: "12",
    title: "Disclaimer of Warranties",
    text: `The Services are provided on an "as is" and "as available" basis. To the maximum extent permitted by law, we disclaim warranties except those that cannot legally be excluded.`,
  },
  {
    number: "13",
    title: "Limitation of Liability",
    text: `To the extent permitted by law, RUXBUX will not be liable for indirect, incidental, special, or consequential damages arising from your use of the Services or purchase of our products.`,
  },
  {
    number: "14",
    title: "Indemnification",
    text: `You agree to indemnify and hold harmless RUXBUX from claims, losses, or costs arising from your misuse of the Services or violation of these Terms.`,
  },
  {
    number: "15",
    title: "Governing Law",
    text: `These Terms are governed by the laws of Pakistan.`,
  },
  {
    number: "16",
    title: "Changes to Terms",
    text: `We may update these Terms from time to time. Continued use of the Services after changes are posted means you accept the revised Terms.`,
  },
  {
    number: "17",
    title: "Contact Information",
    text: `Questions about these Terms may be sent to us by email.`,
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
  title: "Terms and Conditions | RUXBUX",
  description:
    "Read the RUXBUX terms and conditions for website use, orders, payments, shipping, and customer responsibilities.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#08264A]">
      <section className="relative overflow-hidden border-b border-[#EADCC8] bg-gradient-to-b from-[#FFFDF8] to-[#F8EFE2]">
        <div className="pointer-events-none absolute left-0 top-16 hidden h-56 w-56 rounded-full bg-[#E8D4B8]/30 blur-3xl lg:block" />
        <div className="pointer-events-none absolute right-0 top-10 hidden h-64 w-64 rounded-full bg-[#D99000]/10 blur-3xl lg:block" />

        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D99000] sm:text-sm sm:tracking-[0.25em]">
            Legal Information
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#08264A] sm:text-5xl lg:text-6xl">
            Terms of Service
          </h1>

          <div className="mx-auto mt-5 flex w-fit max-w-full items-center gap-2 rounded-full border border-[#E6D4BE] bg-white px-4 py-2 text-xs font-medium text-[#334155] shadow-sm sm:px-5 sm:text-sm">
            <span className="text-[#D99000]">
              <CalendarIcon />
            </span>
            <span>Last updated: March 27, 2026</span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#334155] sm:text-lg">
            Please read these terms carefully before using RUXBUX or placing an
            order.
          </p>
        </div>
      </section>

      <section className="px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <article className="rounded-2xl border border-[#EADCC8] bg-white px-4 py-6 shadow-[0_20px_70px_rgba(8,38,74,0.10)] sm:rounded-3xl sm:px-8 sm:py-8 lg:px-12 lg:py-12">
            {termsSections.map((section, index) => (
              <section
                key={section.number}
                className={`flex min-w-0 flex-col gap-3 min-[420px]:flex-row min-[420px]:gap-4 sm:gap-6 ${
                  index !== termsSections.length - 1
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

                  <p className="mt-2 text-sm leading-7 text-[#26364A] sm:mt-3 sm:text-base sm:leading-8">
                    {section.text}
                  </p>

                  {section.title === "Contact Information" && (
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
              Questions about these Terms? Email us at{" "}
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
