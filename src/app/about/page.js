import Link from "next/link";

const missionPoints = [
  "Space-saving",
  "Heavy-duty",
  "Ventilated design",
  "Easy to stack",
];

const values = [
  {
    title: "Practical Design",
    text: "We design products that solve real problems in everyday home storage.",
    icon: "▣",
  },
  {
    title: "Durable Quality",
    text: "We use strong materials that are built to last and handle daily use.",
    icon: "◇",
  },
  {
    title: "Made for Real Homes",
    text: "Our products are designed for compact spaces, family needs, and local storage habits.",
    icon: "⌂",
  },
  {
    title: "Honest & Reliable",
    text: "We believe in honest communication, fair service, and long-term customer trust.",
    icon: "♡",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF8] text-[#08264A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#EFD8B6]/40 blur-3xl" />
        <div className="pointer-events-none absolute right-[-100px] top-20 h-96 w-96 rounded-full bg-[#DDF4EF]/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D99000]" />
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#08264A]">
                About RUXBUX
              </p>
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-[#08264A] sm:text-6xl lg:text-7xl">
              Smart storage for real homes.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#183B63] sm:text-xl sm:leading-9">
              At RUXBUX, we believe an organized home creates a calmer, happier
              everyday life. That&apos;s why we design practical storage
              solutions that make wardrobes neat, visible, and easy to manage.
            </p>

            <div className="mt-10">
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-2xl bg-[#08264A] px-8 py-4 text-base font-bold text-white shadow-[0_18px_35px_rgba(8,38,74,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0B315E]"
              >
                Explore StackSmart
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#EADCC8] bg-white/80 p-8 shadow-[0_22px_70px_rgba(8,38,74,0.10)] backdrop-blur sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7EBDD] text-3xl text-[#C97900]">
              ◎
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#08264A]">
              Our Mission
            </h2>

            <div className="mt-4 h-px w-14 bg-[#D99000]" />

            <p className="mt-6 text-lg leading-8 text-[#183B63]">
              To make everyday storage simpler, cleaner, and more satisfying
              with durable products made for real homes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {missionPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl bg-[#FBF4EA] px-4 py-3 text-sm font-bold text-[#08264A]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#D99000] text-xs text-[#D99000]">
                    ✓
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#CFE6E3] bg-[#F3FCFB] px-6 py-10 shadow-sm sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="border-b border-[#BFD8D5] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#B86F00]">
                Our Story
              </p>

              <div className="mt-4 h-px w-12 bg-[#D99000]" />

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#08264A] sm:text-4xl">
                We started with one simple observation.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-[#183B63]">
              <p>
                Wardrobes in most homes get messy not because people are
                careless, but because storage products are not practical enough.
              </p>

              <p>
                Folding clothes takes time, stacks fall over, and shelf space is
                wasted.
              </p>

              <p>
                So we created StackSmart Organizer to help families store folded
                clothes neatly, save space, and keep wardrobes easier to manage.
              </p>

              <p>
                This is just the beginning. We will continue to create smart,
                useful storage products that support real homes and real
                lifestyles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#B86F00]">
              What We Believe
            </p>

            <div className="mx-auto mt-4 h-px w-16 bg-[#D99000]" />

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-[#08264A] sm:text-4xl">
              Our values guide everything we build.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-[#EADCC8] bg-white p-8 text-center shadow-[0_18px_50px_rgba(8,38,74,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(8,38,74,0.10)]"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FBF4EA] text-4xl text-[#08264A]">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#08264A]">
                  {value.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-[#183B63]">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are For */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#EADCC8] bg-[#FFF8EF] px-6 py-10 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#B86F00]">
                Who We&apos;re For
              </p>

              <div className="mt-4 h-px w-12 bg-[#D99000]" />

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#08264A] sm:text-4xl">
                Made for Pakistani homes, lifestyles, and wardrobes.
              </h2>
            </div>

            <div className="border-t border-[#E4CBAA] pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-lg leading-8 text-[#183B63]">
                From compact cupboards to larger wardrobes, our products are
                selected with real local needs in mind, so they fit the way
                people actually organize at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#08264A] px-6 py-10 shadow-[0_20px_60px_rgba(8,38,74,0.22)] sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-center gap-6">
              <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#D99000] text-4xl text-[#D99000] sm:flex">
                ▤
              </div>

              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to organize better?
                </h2>

                <p className="mt-3 text-base leading-7 text-[#D9E6F5] sm:text-lg">
                  Explore StackSmart and make your wardrobe easier to manage.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-bold text-[#08264A] transition hover:-translate-y-0.5 hover:bg-[#F8EFE2]"
              >
                Order on WhatsApp
              </Link>

              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-2xl border border-[#D99000] px-7 py-4 text-base font-bold text-[#F4B04A] transition hover:-translate-y-0.5 hover:bg-[#0B315E]"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}