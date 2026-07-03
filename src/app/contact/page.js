import Link from "next/link";

const contactRows = [
  {
    label: "Trade Name",
    value: "RUXBUX",
    icon: StoreIcon,
  },
  {
    label: "Phone",
    value: "+92 302 044 1525",
    href: "tel:+923020441525",
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "ruxbuxofficial@gmail.com",
    href: "mailto:ruxbuxofficial@gmail.com",
    icon: MailIcon,
  },
  {
    label: "Address",
    value: "House 115, Street 1, G Block, DHA Phase 8, Lahore 54000, Pakistan",
    href: "https://maps.google.com/?q=House 115 Street 1 G Block DHA Phase 8 Lahore Pakistan",
    icon: LocationIcon,
  },
];

const contactCards = [
  {
    title: "Call or WhatsApp",
    text: "Speak directly with our team for urgent delivery updates or product guidance.",
    value: "+92 302 044 1525",
    href: "https://wa.me/923020441525",
    icon: WhatsAppIcon,
  },
  {
    title: "Email Support",
    text: "Send detailed inquiries, order concerns, or bulk order requests.",
    value: "ruxbuxofficial@gmail.com",
    href: "mailto:ruxbuxofficial@gmail.com",
    icon: MailIcon,
  },
  {
    title: "Visit Address",
    text: "Our office is in DHA Phase 8, Lahore. You can visit us during business hours.",
    value: "View Location",
    href: "https://maps.google.com/?q=House 115 Street 1 G Block DHA Phase 8 Lahore Pakistan",
    icon: LocationIcon,
  },
];

function StoreIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m3 9 2-5h14l2 5" />
      <path d="M5 13v7h14v-7" />
      <path d="M3 9h18" />
      <path d="M8 13v7" />
      <path d="M16 13v7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.05 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
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

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.78a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2a9.93 9.93 0 0 0-8.57 14.95L2.05 22l5.17-1.35A9.9 9.9 0 0 0 12.04 22h.01A9.94 9.94 0 0 0 22 12.07a9.84 9.84 0 0 0-2.95-7.16Zm-7 15.41h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.8.82-2.99-.19-.31a8.23 8.23 0 1 1 6.93 3.82Zm4.51-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.07-.25-.13-1.04-.39-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

function ArrowRightIcon() {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF8] text-[#08264A]">
      <section className="px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#EADCC8] bg-[#FBF4EA] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#B86F00] sm:mb-7 sm:px-5 sm:py-2.5 sm:text-sm">
              <MailIcon />
              Contact Us
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#08264A] sm:text-4xl lg:text-5xl">
              Contact Information
            </h1>

            <p className="mt-4 text-sm font-semibold leading-7 text-[#303846] sm:mt-5 sm:text-lg sm:leading-8">
              Have a question, need support, or looking for product details?
              Our team is ready to assist you with quick and friendly service.
            </p>
          </div>

          <div className="mt-8 grid gap-6 rounded-2xl border border-[#EADCC8] bg-gradient-to-br from-[#FFF8EF] to-white p-4 shadow-[0_18px_50px_rgba(8,38,74,0.06)] sm:mt-10 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:p-8 lg:p-10">
            <div className="flex min-w-0 flex-col gap-4 min-[420px]:flex-row min-[420px]:gap-5 md:border-r md:border-[#EADCC8] md:pr-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FBF4EA] text-[#D99000] sm:h-16 sm:w-16">
                <WhatsAppIcon />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#B86F00] sm:text-sm sm:tracking-[0.2em]">
                  Support Desk
                </p>

                <h2 className="mt-3 text-xl font-extrabold text-[#08264A] sm:mt-4 sm:text-2xl">
                  Fast answers for every order
                </h2>

                <p className="mt-3 text-sm font-semibold leading-7 text-[#303846] sm:mt-4 sm:text-base">
                  Share your order number, city, and question about StackSmart
                  Organizer. We&apos;ll guide you through delivery updates,
                  quantity deals, and return support.
                </p>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-4 border-t border-[#EADCC8] pt-6 min-[420px]:flex-row min-[420px]:gap-5 md:border-t-0 md:pl-8 md:pt-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FBF4EA] text-[#D99000] sm:h-16 sm:w-16">
                <LocationIcon />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#B86F00] sm:text-sm sm:tracking-[0.2em]">
                  Visit Us in Lahore
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-[#303846] sm:mt-4 sm:text-lg sm:leading-8">
                  Our support point is located in DHA Phase 8, with access to
                  major courier routes across the city.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#EADCC8] bg-white p-4 shadow-[0_18px_50px_rgba(8,38,74,0.06)] sm:mt-8 sm:rounded-3xl sm:p-8">
            <div className="divide-y divide-[#F1E7D6]">
              {contactRows.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="grid min-w-0 grid-cols-[44px_1fr] gap-x-3 gap-y-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[56px_140px_1fr_32px] sm:items-center sm:gap-4"
                  >
                    <div className="row-span-2 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FBF4EA] text-[#D99000] sm:row-span-1 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Icon />
                    </div>

                    <p className="font-extrabold text-[#08264A]">
                      {item.label}
                    </p>

                    {item.href ? (
                      <Link
                        href={item.href}
                        className="min-w-0 break-words text-sm font-extrabold leading-7 text-[#B86F00] hover:text-[#08264A] sm:text-lg"
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-sm font-semibold leading-7 text-[#303846] sm:text-lg">
                        {item.value}
                      </p>
                    )}

                    {item.href && (
                      <Link
                        href={item.href}
                        className="hidden text-[#08264A] transition hover:translate-x-1 hover:text-[#D99000] sm:block"
                        aria-label={`Open ${item.label}`}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        <ArrowRightIcon />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#EADCC8] bg-white p-5 shadow-[0_14px_40px_rgba(8,38,74,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(8,38,74,0.1)] sm:rounded-3xl sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBF4EA] text-[#D99000] sm:h-14 sm:w-14">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-[#08264A] sm:mt-5 sm:text-xl">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-[#303846] sm:text-base">
                    {card.text}
                  </p>

                  <Link
                    href={card.href}
                    className="mt-5 flex min-h-12 items-center justify-between gap-3 rounded-2xl bg-[#FBF4EA] px-4 py-3 text-sm font-extrabold text-[#08264A] transition hover:bg-[#F7EBDD] hover:text-[#B86F00] sm:mt-6 sm:px-5"
                    target={
                      card.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      card.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    <span className="min-w-0 break-all">{card.value}</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl bg-[#08264A] p-5 shadow-[0_20px_60px_rgba(8,38,74,0.22)] sm:mt-8 sm:rounded-3xl sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Need help with your order?
                </h2>

                <p className="mt-2 text-sm font-semibold leading-6 text-[#F7EAD4] sm:text-base">
                  We&apos;re here to make your experience smooth and
                  stress-free.
                </p>
              </div>

              <Link
                href="https://wa.me/923020441525"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl bg-[#D99000] px-5 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(217,144,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#B86F00] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                Order on WhatsApp
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-[#EADCC8] pt-6 text-center sm:mt-10">
            <p className="text-sm font-semibold leading-7 text-[#303846] sm:text-base">
              <span className="font-extrabold text-[#08264A]">
                Business Hours:
              </span>{" "}
              Monday - Saturday, 10:00 AM - 7:00 PM (PKT)
            </p>

            <p className="mt-1 text-sm font-semibold text-[#303846]">
              We are closed on Sundays and public holidays.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
