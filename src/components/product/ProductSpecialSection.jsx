import Image from "next/image";

const highlights = [
  "Keeps folded clothes neat, visible, and easy to access",
  "Stackable trays help maximize wardrobe shelf space",
  "Strong frame supports everyday closet organization",
  "Easy pull-out design for quick outfit selection",
  "Ideal for shirts, sweaters, jeans, towels, and seasonal wear",
  "Clean, modular look that upgrades your wardrobe instantly",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function ProductSpecialSection() {
  return (
    <section className="bg-[#08264a] px-4 py-7 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1040px] overflow-hidden bg-[#e9f0fb] lg:grid-cols-[420px_minmax(0,1fr)]">
        <div className="relative aspect-square bg-[#f6eddd]">
          <Image
            src="/img-1.png"
            alt="StackSmart organizer transforming a closet"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-contain"
          />
        </div>

        <div className="flex items-center px-5 py-6 sm:px-8 lg:px-12">
          <div className="max-w-[540px]">
            <h2 className="text-[24px] font-extrabold leading-tight text-[#111827] sm:text-[30px]">
              What Makes StackSmart So Special?
            </h2>

            <ul className="mt-5 grid gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] font-medium leading-6 text-[#1f2937] sm:text-[15px]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#37ad4b] text-white">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
