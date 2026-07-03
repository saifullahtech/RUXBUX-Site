"use client";

import Image from "next/image";
import { useState } from "react";

const productImages = [
  {
    src: "/hero/stacksmart-organizer.jpg",
    alt: "StackSmart wardrobe organizer in closet",
  },
  {
    src: "/hero/stacksmart-organizer.PNG",
    alt: "StackSmart organizer used for folded clothes",
  },
  {
    src: "/before-after/after.png",
    alt: "Organized wardrobe after using StackSmart",
  },
  {
    src: "/before-after/before.png",
    alt: "Wardrobe before using StackSmart organizer",
  },
  {
    src: "/hero/stacksmart-organizer.jpg",
    alt: "Close up of StackSmart material and frame",
  },
  {
    src: "/hero/stacksmart-organizer.PNG",
    alt: "Folded StackSmart organizer capacity view",
  },
];

const pricingTiers = [
  {
    qty: 6,
    subtitle: "Starter Pack",
    subtotal: 1400,
    discount: "0%",
    discountAmount: 0,
    shipping: 250,
    total: 1650,
    perPack: 1650,
  },
  {
    qty: 12,
    subtitle: "Most Popular",
    badge: "Most Popular",
    subtotal: 2800,
    discount: "10%",
    discountAmount: 280,
    shipping: 250,
    total: 2770,
    perPack: 1385,
  },
  {
    qty: 18,
    subtitle: "Family Pack",
    subtotal: 4200,
    discount: "15%",
    discountAmount: 630,
    shipping: 0,
    total: 3570,
    perPack: 1190,
  },
  {
    qty: 24,
    subtitle: "Best Value",
    badge: "Best Value",
    subtotal: 5600,
    discount: "20%",
    discountAmount: 1120,
    shipping: 0,
    total: 4480,
    perPack: 1120,
  },
  {
    qty: 30,
    subtitle: "Large Wardrobe Pack",
    subtotal: 7000,
    discount: "21.25%",
    discountAmount: 1488,
    shipping: 0,
    total: 5513,
    perPack: 1103,
  },
  {
    qty: 36,
    subtitle: "Home Reset Pack",
    subtotal: 8400,
    discount: "22.5%",
    discountAmount: 1890,
    shipping: 0,
    total: 6510,
    perPack: 1085,
  },
  {
    qty: 42,
    subtitle: "Extended Storage Pack",
    subtotal: 9800,
    discount: "23.75%",
    discountAmount: 2328,
    shipping: 0,
    total: 7473,
    perPack: 1068,
  },
  {
    qty: 48,
    subtitle: "Maximum Saving",
    badge: "Maximum Saving",
    subtotal: 11200,
    discount: "25%",
    discountAmount: 2800,
    shipping: 0,
    total: 8400,
    perPack: 1050,
  },
];

const featuredQuantities = [6, 12, 24, 48];
const extraQuantities = [18, 30, 36, 42];
const whatsappNumber = "923000000000";

const benefits = [
  "Stackable design saves wardrobe space",
  "Keeps clothes neat, visible, and accessible",
  "Strong frame for daily wardrobe use",
];

const trustBadges = [
  "Cash on Delivery",
  "Fast Delivery",
  "Easy Exchange",
  "WhatsApp Support",
];

const accordions = [
  {
    title: "What is included in the pack?",
    content:
      "You will receive the selected quantity of StackSmart Wardrobe Organizers. Each organizer is designed for folded clothes, seasonal items, and wardrobe storage.",
  },
  {
    title: "Delivery & returns",
    content:
      "Cash on Delivery is available. Delivery usually takes 3-5 working days. Exchange support is available if the product has a genuine issue.",
  },
  {
    title: "Why customers choose StackSmart?",
    content:
      "StackSmart helps keep wardrobes clean, visible, and organized while saving shelf space through its stackable design.",
  },
];

function formatPKR(value) {
  return `Rs.${Number(value).toLocaleString("en-PK")}`;
}

function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.8"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ChevronIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.6"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.6"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.02 3.2A12.72 12.72 0 0 0 5.04 22.35L3.5 28.8l6.61-1.49A12.72 12.72 0 1 0 16.02 3.2Zm0 22.98a10.22 10.22 0 0 1-5.2-1.43l-.38-.22-3.91.88.92-3.82-.25-.39a10.23 10.23 0 1 1 8.82 4.98Zm5.92-7.66c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.74.16-.22.32-.85 1.04-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.72 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.51 5.56 4.92.78.34 1.38.54 1.85.69.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.3-.21-.62-.37Z" />
    </svg>
  );
}

function BundleCard({ tier, selected, compact = false, onSelect }) {
  const hasSavings = tier.discount !== "0%";
  const isFreeShipping = tier.shipping === 0;

  return (
    <button
      type="button"
      onClick={() => onSelect(tier.qty)}
      className={[
        "relative rounded-2xl border bg-white text-left transition duration-200",
        "hover:-translate-y-0.5 hover:border-[#d8952f] hover:shadow-[0_14px_28px_rgba(8,38,74,0.08)]",
        selected
          ? "border-[#08264a] shadow-[0_14px_34px_rgba(8,38,74,0.12)] ring-2 ring-[#d8952f]/25"
          : "border-[#e7ddca]",
        compact ? "p-3" : "p-4",
      ].join(" ")}
    >
      {tier.badge ? (
        <span className="mb-3 inline-flex rounded-full bg-[#f5ead2] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.04em] text-[#8a5a12]">
          {tier.badge}
        </span>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-extrabold leading-none text-[#08264a]">Qty {tier.qty}</p>
          <p className="mt-1 text-xs font-bold text-[#667085]">{tier.subtitle}</p>
        </div>
        {selected ? (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#08264a] text-white">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
        ) : null}
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-sm font-extrabold text-[#08264a]">{formatPKR(tier.total)} total</p>
        <p className="text-xs font-semibold text-[#667085]">
          {formatPKR(tier.perPack)} per 6-pack
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {hasSavings ? (
          <span className="rounded-full bg-[#fff6e2] px-2 py-1 text-[11px] font-extrabold text-[#9a6516]">
            Save {tier.discount}
          </span>
        ) : null}
        {isFreeShipping ? (
          <span className="rounded-full bg-[#e9f8ef] px-2 py-1 text-[11px] font-extrabold text-[#16773c]">
            Free Shipping
          </span>
        ) : null}
      </div>
    </button>
  );
}

export default function ProductHeroSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedQty, setSelectedQty] = useState(24);
  const [showExtraPacks, setShowExtraPacks] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  function getSelectedTier() {
    return pricingTiers.find((tier) => tier.qty === selectedQty) || pricingTiers[0];
  }

  const selectedTier = getSelectedTier();
  const selectedIndex = pricingTiers.findIndex((tier) => tier.qty === selectedQty);
  const featuredTiers = featuredQuantities.map((qty) =>
    pricingTiers.find((tier) => tier.qty === qty)
  );
  const extraTiers = extraQuantities.map((qty) => pricingTiers.find((tier) => tier.qty === qty));

  function handleNextImage() {
    setActiveImage((current) => (current + 1) % productImages.length);
  }

  function handlePrevImage() {
    setActiveImage((current) => (current === 0 ? productImages.length - 1 : current - 1));
  }

  function handleNextQty() {
    if (selectedIndex < pricingTiers.length - 1) {
      setSelectedQty(pricingTiers[selectedIndex + 1].qty);
    }
  }

  function handlePrevQty() {
    if (selectedIndex > 0) {
      setSelectedQty(pricingTiers[selectedIndex - 1].qty);
    }
  }

  function handleWhatsAppOrder() {
    const message = `Hello RUXBUX, I want to order StackSmart Wardrobe Organizer.
Selected Quantity: ${selectedTier.qty}
Total: ${formatPKR(selectedTier.total)} PKR
Please confirm availability and delivery details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const savingsLine =
    selectedTier.shipping === 0
      ? `You save ${formatPKR(selectedTier.discountAmount)} - Free Shipping`
      : selectedTier.discountAmount > 0
        ? `You save ${formatPKR(selectedTier.discountAmount)} - Includes Rs.250 delivery charges`
        : "Includes Rs.250 delivery charges";

  const currentOffer =
    selectedTier.discountAmount > 0
      ? `Save ${selectedTier.discount}${selectedTier.shipping === 0 ? " + Free Shipping" : ""}`
      : selectedTier.shipping === 0
        ? "Free Shipping"
        : "Starter Pack";

  return (
    <section className="bg-[#fffdf8] px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">
      <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[24px] border border-[#eadfca] bg-white shadow-[0_24px_60px_rgba(8,38,74,0.08)]">
            <div className="relative aspect-square">
              <Image
                src={productImages[activeImage].src}
                alt={productImages[activeImage].alt}
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrevImage}
              aria-label="Previous product image"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e4d8c2] bg-white text-[#08264a] shadow-sm transition hover:border-[#d8952f] hover:text-[#d8952f]"
            >
              <ChevronIcon className="h-4 w-4 rotate-180" />
            </button>

            <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {productImages.map((image, index) => (
                <button
                  type="button"
                  key={`${image.src}-${index}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View product image ${index + 1}`}
                  className={[
                    "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border bg-white transition sm:h-20 sm:w-20",
                    activeImage === index
                      ? "border-[#08264a] ring-2 ring-[#d8952f]/35"
                      : "border-[#e4d8c2] hover:border-[#d8952f]",
                  ].join(" ")}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextImage}
              aria-label="Next product image"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e4d8c2] bg-white text-[#08264a] shadow-sm transition hover:border-[#d8952f] hover:text-[#d8952f]"
            >
              <ChevronIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#eadfca] bg-white p-5 shadow-[0_24px_70px_rgba(8,38,74,0.09)] sm:p-6 lg:sticky lg:top-28">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight text-[#08264a] sm:text-4xl">
              StackSmart Wardrobe Organizer
            </h1>
            <p className="mt-3 text-base font-semibold leading-7 text-[#3f4754]">
              Heavy-duty stackable storage solution for clean, neat wardrobes.
            </p>
            <p className="mt-3 inline-flex rounded-full bg-[#fff6e2] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.05em] text-[#8a5a12]">
              Trusted by 22,000+ RUXBUX customers
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-[#eadfca] bg-[#fffaf0] p-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-[#667085]">Selected pack</p>
                <div className="mt-1 flex items-baseline gap-3">
                  {selectedTier.discountAmount > 0 ? (
                    <span className="text-base font-bold text-[#8b94a3] line-through">
                      {formatPKR(selectedTier.subtotal)}
                    </span>
                  ) : null}
                  <span className="text-3xl font-extrabold text-[#08264a]">
                    {formatPKR(selectedTier.total)} PKR
                  </span>
                </div>
              </div>
              {selectedTier.discountAmount > 0 ? (
                <span className="rounded-full bg-[#d8952f] px-3 py-1.5 text-sm font-extrabold text-white">
                  Save {selectedTier.discount}
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-sm font-bold text-[#16773c]">{savingsLine}</p>
          </div>

          <ul className="mt-5 grid gap-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm font-bold text-[#303846]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5ead2] text-[#9a6516]">
                  <CheckIcon />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-extrabold text-[#08264a]">Choose Your Quantity</h2>
                <p className="mt-1 text-sm font-semibold text-[#667085]">Buy more, save more</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              {featuredTiers.map((tier) => (
                <BundleCard
                  key={tier.qty}
                  tier={tier}
                  selected={selectedTier.qty === tier.qty}
                  onSelect={setSelectedQty}
                />
              ))}
            </div>

            {showExtraPacks ? (
              <div className="mt-3 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                {extraTiers.map((tier) => (
                  <BundleCard
                    key={tier.qty}
                    tier={tier}
                    compact
                    selected={selectedTier.qty === tier.qty}
                    onSelect={setSelectedQty}
                  />
                ))}
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => setShowExtraPacks((current) => !current)}
              className="mt-4 text-sm font-extrabold text-[#08264a] underline decoration-[#d8952f] decoration-2 underline-offset-4 transition hover:text-[#d8952f]"
            >
              {showExtraPacks ? "Hide extra packs" : "View all packs"}
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-[#eadfca] bg-white p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-extrabold text-[#08264a]">Selected Quantity</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-[#d8cbb4] bg-[#fffdf8] p-1">
                  <button
                    type="button"
                    onClick={handlePrevQty}
                    disabled={selectedIndex === 0}
                    aria-label="Select previous quantity tier"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[#08264a] transition hover:bg-[#f5ead2] disabled:cursor-not-allowed disabled:text-[#b7bfca] disabled:hover:bg-transparent"
                  >
                    <MinusIcon />
                  </button>
                  <span className="min-w-14 text-center text-lg font-extrabold text-[#08264a]">
                    {selectedTier.qty}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextQty}
                    disabled={selectedIndex === pricingTiers.length - 1}
                    aria-label="Select next quantity tier"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[#08264a] transition hover:bg-[#f5ead2] disabled:cursor-not-allowed disabled:text-[#b7bfca] disabled:hover:bg-transparent"
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-[#fff6e2] p-4 sm:min-w-48">
                <p className="text-xs font-extrabold uppercase tracking-[0.05em] text-[#9a6516]">
                  Current Offer
                </p>
                <p className="mt-1 text-sm font-extrabold text-[#08264a]">{currentOffer}</p>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.05em] text-[#667085]">
                  Total
                </p>
                <p className="mt-1 text-xl font-extrabold text-[#08264a]">
                  {formatPKR(selectedTier.total)} PKR
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#128c3b] px-5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(18,140,59,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0f7b34]"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </button>
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#08264a] bg-white px-5 text-sm font-extrabold text-[#08264a] transition hover:-translate-y-0.5 hover:border-[#d8952f] hover:text-[#d8952f]"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#eadfca] bg-[#fffdf8] px-2.5 py-2 text-center text-[11px] font-extrabold text-[#303846]"
              >
                <CheckIcon className="h-3.5 w-3.5 text-[#16773c]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 divide-y divide-[#eadfca] border-t border-[#eadfca]">
            {accordions.map((item, index) => {
              const isOpen = openAccordion === index;

              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-extrabold text-[#08264a]"
                    aria-expanded={isOpen}
                  >
                    <span>{item.title}</span>
                    <ChevronIcon
                      className={[
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isOpen ? "rotate-90" : "",
                      ].join(" ")}
                    />
                  </button>
                  <div
                    className={[
                      "grid transition-[grid-template-rows] duration-200 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-sm font-semibold leading-6 text-[#5b6472]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d8cbb4] bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(8,38,74,0.12)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-[#667085]">Total</p>
            <p className="truncate text-lg font-extrabold text-[#08264a]">
              {formatPKR(selectedTier.total)} PKR
            </p>
          </div>
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#128c3b] px-4 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(18,140,59,0.24)]"
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
