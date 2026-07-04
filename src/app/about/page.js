import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Practical products",
    text: "We choose storage items that solve daily wardrobe and home organization problems.",
  },
  {
    title: "Reliable quality",
    text: "Our focus is on durable materials, clean finishing, and products that can handle regular use.",
  },
  {
    title: "Clear service",
    text: "Customers should get simple product details, honest support, and smooth order guidance.",
  },
];

const facts = [
  "Based in Lahore, Pakistan",
  "Focused on smart storage solutions",
  "Built around everyday home needs",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
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

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDF8] text-[#08264A]">
      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#B86F00]">
                About Us
              </p>

              <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-[#08264A] sm:text-4xl lg:text-5xl">
                RUXBUX makes home storage simpler.
              </h1>

              <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-[#303846] sm:text-base">
                RUXBUX is a smart storage brand focused on practical products
                for everyday homes. We started with StackSmart Organizer to help
                people keep folded clothes neat, visible, and easier to manage.
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {facts.map((fact) => (
                  <div
                    key={fact}
                    className="flex items-center gap-2 rounded-md border border-[#EADCC8] bg-white px-3 py-2 text-xs font-bold text-[#303846] shadow-[0_8px_22px_rgba(8,38,74,0.04)]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FBF4EA] text-[#D99000]">
                      <CheckIcon />
                    </span>
                    {fact}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#EADCC8] bg-white shadow-[0_14px_38px_rgba(8,38,74,0.08)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src="/product-images/9.jpeg"
                  alt="RUXBUX StackSmart organizers"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-lg border border-[#EADCC8] bg-[#FFF8EF] p-5 sm:p-6">
              <h2 className="text-xl font-extrabold text-[#08264A] sm:text-2xl">
                Our Story
              </h2>

              <div className="mt-3 h-px w-10 bg-[#D99000]" />

              <div className="mt-4 space-y-3 text-sm font-semibold leading-7 text-[#303846] sm:text-base">
                <p>
                  We noticed that wardrobes often become messy because normal
                  shelves do not keep folded clothes stable or easy to access.
                </p>

                <p>
                  StackSmart Organizer was created to reduce that daily mess:
                  stack clothes cleanly, use shelf space better, and make
                  wardrobes easier to maintain.
                </p>
              </div>
            </section>

            <section className="rounded-lg border border-[#EADCC8] bg-white p-5 shadow-[0_14px_38px_rgba(8,38,74,0.05)] sm:p-6">
              <h2 className="text-xl font-extrabold text-[#08264A] sm:text-2xl">
                Our Mission
              </h2>

              <div className="mt-3 h-px w-10 bg-[#D99000]" />

              <p className="mt-4 text-sm font-semibold leading-7 text-[#303846] sm:text-base">
                To bring useful, space-saving storage products to homes in a
                way that feels simple, reliable, and affordable.
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {["Space saving", "Easy to use", "Durable design", "Neat storage"].map(
                  (point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 rounded-md bg-[#FBF4EA] px-3 py-2 text-sm font-bold text-[#08264A]"
                    >
                      <span className="text-[#D99000]">
                        <CheckIcon />
                      </span>
                      {point}
                    </div>
                  )
                )}
              </div>
            </section>
          </div>

          <section className="mt-6 rounded-lg border border-[#CFE6E3] bg-[#F3FCFB] p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[260px_1fr] lg:items-start">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#B86F00]">
                  What We Believe
                </p>
                <h2 className="mt-2 text-xl font-extrabold text-[#08264A] sm:text-2xl">
                  Values behind RUXBUX
                </h2>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-md border border-[#DCEDEA] bg-white p-4"
                  >
                    <h3 className="text-base font-extrabold text-[#08264A]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[#303846]">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-lg bg-[#08264A] px-5 py-4 text-white sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-extrabold sm:text-xl">
                  Need product details?
                </h2>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#D9E6F5]">
                  Our team can guide you about StackSmart sizing, usage, and
                  ordering.
                </p>
              </div>

              <div className="flex flex-col gap-2 min-[420px]:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-extrabold text-[#08264A] transition hover:bg-[#F8EFE2]"
                >
                  Contact Us
                  <ArrowRightIcon />
                </Link>
                <Link
                  href="/products/stacksmart-organizer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#D99000] px-4 py-2 text-sm font-extrabold text-[#F4B04A] transition hover:bg-[#0B315E]"
                >
                  View Product
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
