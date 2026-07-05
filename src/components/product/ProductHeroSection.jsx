"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createOrder } from "@/lib/api/orders";

const productImages = [
  {
    src: "/product-images/1.jpeg",
    alt: "Before and after wardrobe organization with RUX BUX modular organizers",
  },
  {
    src: "/product-images/2.jpeg",
    alt: "StackSmart modular wardrobe organizers in a closet",
  },
  {
    src: "/product-images/3.jpeg",
    alt: "StackSmart organizer before and after comparison",
  },
  {
    src: "/product-images/4.jpeg",
    alt: "Folded StackSmart wardrobe organizer",
  },
  {
    src: "/product-images/5.jpeg",
    alt: "Hands stacking StackSmart wardrobe organizer trays",
  },
  {
    src: "/product-images/6.jpeg",
    alt: "StackSmart organizer product stack on dark background",
  },
  {
    src: "/product-images/7.jpeg",
    alt: "StackSmart organizer detail view",
  },
  {
    src: "/product-images/8.jpeg",
    alt: "StackSmart organizer packed for wardrobe storage",
  },
  {
    src: "/product-images/9.jpeg",
    alt: "StackSmart organizer lifestyle view",
  },
];

const pricingTiers = [
  {
    qty: 6,
    subtitle: "Starter Pack",
    subtotal: 1650,
    discount: "0%",
    discountAmount: 0,
    shipping: 250,
    total: 1650,
    perPack: 1650,
  },
  {
    qty: 12,
    subtitle: "Most Popular",
    badge: "Popular",
    subtotal: 3080,
    discount: "10%",
    discountAmount: 310,
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
    subtitle: "Bulk Pack",
    subtotal: 7000,
    discount: "22%",
    discountAmount: 1540,
    shipping: 0,
    total: 5460,
    perPack: 1092,
  },
  {
    qty: 36,
    subtitle: "Bulk Pack",
    subtotal: 8400,
    discount: "23%",
    discountAmount: 1932,
    shipping: 0,
    total: 6468,
    perPack: 1078,
  },
  {
    qty: 42,
    subtitle: "Bulk Pack",
    subtotal: 9800,
    discount: "24%",
    discountAmount: 2352,
    shipping: 0,
    total: 7448,
    perPack: 1064,
  },
  {
    qty: 48,
    subtitle: "Max Bulk Pack",
    subtotal: 11200,
    discount: "25%",
    discountAmount: 2800,
    shipping: 0,
    total: 8400,
    perPack: 1050,
  },
];

const featuredQuantities = [6, 12, 18, 24];
const allowedOrderQuantities = [6, 12, 18, 24, 30, 36, 42, 48];
const whatsappNumber = "923000000000";

const benefits = [
  {
    title: "Stackable design saves wardrobe space",
    icon: "layers",
  },
  {
    title: "Keeps clothes neat, visible and accessible",
    icon: "box",
  },
  {
    title: "Strong frame for daily wardrobe use",
    icon: "shield",
  },
];

function formatPKR(value) {
  return `Rs.${Number(value).toLocaleString("en-PK")}`;
}

function formatReviewCount(value) {
  return Number(value).toLocaleString("en-PK");
}

function formatOrderError(error) {
  if (!error) {
    return "Unable to place order. Please try again.";
  }

  if (typeof error === "string") {
    return error;
  }

  if (Array.isArray(error)) {
    return error.join(" ");
  }

  if (error.detail) {
    return Array.isArray(error.detail) ? error.detail.join(" ") : String(error.detail);
  }

  if (error instanceof Error || error.message) {
    const message = error.message || String(error);

    if (message.includes("Failed to fetch")) {
      return "Unable to reach order API. Please try again in a moment.";
    }

    return message;
  }

  if (typeof error === "object") {
    const fieldErrors = Object.entries(error)
      .map(([field, value]) => {
        const message = Array.isArray(value)
          ? value.join(", ")
          : typeof value === "object"
            ? JSON.stringify(value)
            : String(value);

        return `${field}: ${message}`;
      })
      .join(" ");

    return fieldErrors || "Unable to place order. Please check your details.";
  }

  return "Unable to place order. Please try again.";
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
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.5"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.5"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function BagIcon() {
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
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function StarIcon({ filled = true }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? "0" : "1.8"}
    >
      <path d="m12 2.8 2.83 5.74 6.34.92-4.59 4.47 1.08 6.31L12 17.27l-5.66 2.97 1.08-6.31-4.59-4.47 6.34-.92L12 2.8Z" />
    </svg>
  );
}

function BenefitIcon({ type }) {
  if (type === "layers") {
    return (
      <svg
        aria-hidden="true"
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 17 8 4 8-4" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg
        aria-hidden="true"
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M12 3 19 6v5c0 4.6-2.8 8.3-7 10-4.2-1.7-7-5.4-7-10V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.4" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M6 6.5 12 3l6 3.5v7L12 17l-6-3.5v-7Z" />
      <path d="m6 6.5 6 3.5 6-3.5" />
      <path d="M12 10v7" />
      <path d="M8 19h8" />
      <path d="M10 21h4" />
    </svg>
  );
}

function BundleCard({ tier, selected, onSelect }) {
  const isFreeShipping = tier.shipping === 0;
  const topLabel = tier.badge || tier.subtitle;

  return (
    <button
      type="button"
      onClick={() => onSelect(tier.qty)}
      className={[
        "relative flex min-h-[126px] flex-col items-center rounded-lg border bg-white px-2.5 pb-3 pt-4 text-center transition duration-200",
        "hover:-translate-y-0.5 hover:border-[#d8952f] hover:shadow-[0_14px_26px_rgba(8,38,74,0.08)]",
        selected
          ? "border-[#d8952f] shadow-[0_12px_28px_rgba(216,149,47,0.16)]"
          : "border-[#eee3cf]",
      ].join(" ")}
    >
      <span
        className={[
          "absolute -top-3 left-1/2 max-w-[86%] -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]",
          selected ? "bg-[#d8952f] text-white" : "bg-[#eee3cf] text-[#08264a]",
        ].join(" ")}
      >
        {topLabel}
      </span>

      <span className="text-xl font-black leading-none text-[#08264a]">
        {formatPKR(tier.total)}
      </span>
      <span className="mt-1.5 text-xs font-medium leading-none text-[#6b7280]">
        Qty {tier.qty}
      </span>

      <span className="mt-2 flex min-h-5 items-center justify-center">
        <span
          className={[
            "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
            selected ? "bg-[#fff4df] text-[#9a5b08]" : "bg-[#eee3cf] text-[#6b7280]",
          ].join(" ")}
        >
          Save {tier.discount}
        </span>
      </span>

      <span className="mt-1.5 text-[11px] font-semibold">
        {isFreeShipping ? (
          <span className="text-[#37ad4b]">Free Shipping</span>
        ) : (
          <span className="text-[#6b7280]">+{formatPKR(tier.shipping)} shipping</span>
        )}
      </span>

      <span className="mt-2 whitespace-nowrap text-[10px] font-normal leading-none text-[#6b7280]">
        {formatPKR(tier.perPack)} per 6-pack
      </span>
    </button>
  );
}

export default function ProductHeroSection({ reviewSummary }) {
  const router = useRouter();
  const redirectTimeoutRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedQty, setSelectedQty] = useState(12);
  const [customerForm, setCustomerForm] = useState({
    email: "",
    full_name: "",
    phone: "",
    address: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [createdOrder, setCreatedOrder] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const orderableTiers = pricingTiers.filter((tier) =>
    allowedOrderQuantities.includes(tier.qty)
  );
  const selectedTier =
    orderableTiers.find((tier) => tier.qty === selectedQty) || orderableTiers[0];
  const selectedIndex = orderableTiers.findIndex((tier) => tier.qty === selectedQty);
  const featuredTiers = featuredQuantities.map((qty) =>
    pricingTiers.find((tier) => tier.qty === qty)
  );
  const inputClass =
    "mt-2 h-11 w-full rounded-xl border border-[#eee3cf] bg-white px-4 text-sm font-semibold text-[#08264a] outline-none transition placeholder:text-[#9ca3af] focus:border-[#d8952f] focus:ring-4 focus:ring-[#d8952f]/25";

  function handleNextImage() {
    setActiveImage((current) => (current + 1) % productImages.length);
  }

  function handlePrevImage() {
    setActiveImage((current) => (current === 0 ? productImages.length - 1 : current - 1));
  }

  function handleNextQty() {
    if (selectedIndex < orderableTiers.length - 1) {
      setSelectedQty(Number(orderableTiers[selectedIndex + 1].qty));
    }
  }

  function handlePrevQty() {
    if (selectedIndex > 0) {
      setSelectedQty(Number(orderableTiers[selectedIndex - 1].qty));
    }
  }

  function handleSelectQty(value) {
    const quantity = Number(value);

    if (allowedOrderQuantities.includes(quantity)) {
      setSelectedQty(quantity);
    }
  }

  function handleCustomerChange(event) {
    const { name, value } = event.target;

    setCustomerForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleOpenOrderModal() {
    setOrderError("");
    setSuccessMessage("");
    setCreatedOrder(null);
    setIsRedirecting(false);
    setIsOrderModalOpen(true);
  }

  function handleCloseOrderModal() {
    if (!isSubmitting && !isRedirecting) {
      setIsOrderModalOpen(false);
    }
  }

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOrderModalOpen) {
      return;
    }

    const scrollY = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOrderModalOpen]);

  const requiresAdvance = selectedTier.qty > 24;
  const advanceAmount = Math.round(selectedTier.total * 0.2);

  function buildWhatsAppMessage(order) {
    const orderAddress = order.address || {};

    return `Hello RUXBUX, I want to confirm my StackSmart Wardrobe Organizer order.
Order ID: ${order.public_id || order.id}
Selected Quantity: ${order.quantity}
Total: ${formatPKR(order.total_amount)}
Name: ${orderAddress.full_name || customerForm.full_name}
Phone: ${orderAddress.phone || customerForm.phone}
City: ${orderAddress.city || customerForm.city}`;
  }

  function handleCreatedOrderWhatsApp() {
    if (!createdOrder) {
      return;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        buildWhatsAppMessage(createdOrder)
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  async function handleOrderSubmit(event) {
    event.preventDefault();

    const quantity = Number(selectedTier.qty);

    if (!allowedOrderQuantities.includes(quantity)) {
      setOrderError("Please select a valid quantity: 6, 12, 18, 24, 30, 36, 42, or 48.");
      return;
    }

    const payload = {
      quantity,
      email: customerForm.email.trim(),
      full_name: customerForm.full_name.trim(),
      phone: customerForm.phone.trim(),
      address: customerForm.address.trim(),
      city: customerForm.city.trim(),
    };

    setIsSubmitting(true);
    setOrderError("");
    setSuccessMessage("");
    setCreatedOrder(null);
    setIsRedirecting(false);

    try {
      const order = await createOrder(payload);

      console.log("Created order response:", order);

      setCreatedOrder(order);
      setSuccessMessage(
        `Order created successfully. Processing your confirmation page...`
      );
      setIsRedirecting(true);
      redirectTimeoutRef.current = window.setTimeout(() => {
        router.push(`/order-success/${order.public_id}`);
      }, 1200);
    } catch (error) {
      setOrderError(formatOrderError(error));
      setIsRedirecting(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  const hasDiscount = selectedTier.discountAmount > 0;
  const savingsLine = hasDiscount
    ? `You save ${formatPKR(selectedTier.discountAmount)}`
    : "Standard pricing";
  const reviewCount = Number(reviewSummary?.totalReviews) || 0;
  const averageRating = Number(reviewSummary?.averageRating) || 0;
  const roundedRating = Math.round(averageRating);
  const hasReviews = reviewCount > 0;

  return (
    <section className="bg-white px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-12 lg:pt-5">
      <div className="mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-[390px_minmax(0,1fr)] xl:grid-cols-[410px_minmax(0,1fr)] xl:gap-8">
        <div className="min-w-0">
          <div className="mx-auto max-w-[405px] overflow-hidden rounded-[18px] border-[5px] border-[#08264a] bg-[#f6eddd] shadow-[0_18px_42px_rgba(8,38,74,0.08)] sm:rounded-[20px] lg:max-w-[385px] xl:max-w-[405px]">
            <div className="relative aspect-square">
              <Image
                src={productImages[activeImage].src}
                alt={productImages[activeImage].alt}
                fill
                priority
                sizes="(min-width: 1280px) 405px, (min-width: 1024px) 385px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto mt-3 flex max-w-[405px] items-center gap-2.5 sm:gap-3 lg:max-w-[385px] xl:max-w-[405px]">
            <button
              type="button"
              onClick={handlePrevImage}
              aria-label="Previous product image"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#eee3cf] bg-white text-[#08264a] shadow-sm transition hover:border-[#d8952f] hover:text-[#d8952f]"
            >
              <ChevronIcon className="h-4 w-4 rotate-180" />
            </button>

            <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {productImages.map((image, index) => (
                <button
                  type="button"
                  key={`${image.src}-${index}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View product image ${index + 1}`}
                  className={[
                    "relative h-[54px] w-[54px] shrink-0 overflow-hidden rounded-lg border-2 bg-white transition sm:h-[62px] sm:w-[62px]",
                    activeImage === index
                      ? "border-[#d8952f] shadow-[0_8px_16px_rgba(216,149,47,0.18)]"
                      : "border-[#eee3cf] hover:border-[#d8952f]",
                  ].join(" ")}
                >
                  <Image src={image.src} alt={image.alt} fill sizes="62px" className="object-cover" />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextImage}
              aria-label="Next product image"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#eee3cf] bg-white text-[#08264a] shadow-sm transition hover:border-[#d8952f] hover:text-[#d8952f]"
            >
              <ChevronIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="min-w-0">
          <div>
            <h1 className="text-[30px] font-black leading-[1.14] sm:text-[36px] lg:whitespace-nowrap lg:text-[32px] xl:text-[36px]">
              <span className="text-[#08264a]">StackSmart</span>{" "}
              <span className="text-[#d8952f]">Wardrobe Organizer</span>
            </h1>
            {hasReviews ? (
              <div
                className="mt-2 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#4b5563]"
                aria-label={`${averageRating.toFixed(1)} out of 5 rating based on ${reviewCount} reviews`}
              >
                <span className="flex items-center gap-0.5 text-[#d8952f]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} filled={index < roundedRating} />
                  ))}
                </span>
                <span className="font-black text-[#08264a]">{averageRating.toFixed(1)}/5</span>
                <span className="text-[#6b7280]">|</span>
                <span>
                  {formatReviewCount(reviewCount)} {reviewCount === 1 ? "review" : "reviews"}
                </span>
              </div>
            ) : (
              <p className="mt-2 text-sm font-semibold text-[#4b5563]">
                Customer reviews coming soon
              </p>
            )}
          </div>

          <ul className="mt-3 grid gap-2.5">
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex items-center gap-2.5 text-[12px] font-semibold leading-5 text-[#4b5563] sm:text-[13px]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#fff4df] text-[#9a5b08] ring-1 ring-[#f2d5ac]">
                  <BenefitIcon type={benefit.icon} />
                </span>
                <span>{benefit.title}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#eee3cf]" />
            <h2 className="shrink-0 text-sm font-normal text-[#6b7280]">
              Buy more, Save more
            </h2>
            <div className="h-px flex-1 bg-[#eee3cf]" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {featuredTiers.map((tier) => (
              <BundleCard
                key={tier.qty}
                tier={tier}
                selected={selectedTier.qty === tier.qty}
                onSelect={handleSelectQty}
              />
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-[#eee3cf] bg-white px-4 py-3 shadow-[0_16px_38px_rgba(8,38,74,0.06)] sm:px-5 sm:py-3.5 lg:px-6 lg:py-3.5">
              <div className="grid gap-5 lg:grid-cols-[1.05fr_1.1fr_0.95fr_0.95fr] lg:gap-0">
                <div className="text-center lg:border-r lg:border-[#eee3cf] lg:pr-6 lg:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                    Selected Quantity
                  </p>
                  <div className="mx-auto mt-3 grid max-w-[218px] grid-cols-[1fr_1.35fr_1fr] overflow-hidden rounded-xl border border-[#eee3cf] bg-white shadow-sm lg:mx-0">
                    <button
                      type="button"
                      onClick={handlePrevQty}
                      disabled={selectedIndex === 0}
                      aria-label="Select previous quantity tier"
                      className="flex h-10 items-center justify-center text-[#08264a] transition hover:bg-[#f3f6f9] disabled:cursor-not-allowed disabled:text-[#b4bdc9] sm:h-11"
                    >
                      <MinusIcon />
                    </button>
                    <span className="flex h-10 items-center justify-center border-x border-[#eee3cf] text-xl font-semibold text-[#08264a] sm:h-11">
                      {selectedTier.qty}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextQty}
                      disabled={selectedIndex === orderableTiers.length - 1}
                      aria-label="Select next quantity tier"
                      className="flex h-10 items-center justify-center text-[#08264a] transition hover:bg-[#f3f6f9] disabled:cursor-not-allowed disabled:text-[#b4bdc9] sm:h-11"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>

                <div className="border-t border-[#eee3cf] pt-4 text-center lg:border-r lg:border-t-0 lg:border-[#eee3cf] lg:px-6 lg:pt-0 lg:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                    Order Summary
                  </p>
                  <p className="mt-3 text-[15px] font-medium leading-6 text-[#4b5563]">
                    Qty {selectedTier.qty} pack
                  </p>
                  {hasDiscount || selectedTier.shipping === 0 ? (
                    <div className="mt-2 flex flex-wrap justify-center gap-1.5 lg:justify-start">
                      {hasDiscount ? (
                        <span className="rounded-full bg-[#eaf7ef] px-2.5 py-1 text-[11px] font-semibold text-[#37ad4b]">
                          Save {selectedTier.discount}
                        </span>
                      ) : null}
                      {selectedTier.shipping === 0 ? (
                        <span className="rounded-full bg-[#eaf7ef] px-2.5 py-1 text-[11px] font-semibold text-[#37ad4b]">
                          Free Shipping
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="border-t border-[#eee3cf] pt-4 text-center lg:border-t-0 lg:px-6 lg:pt-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                    Total (PKR)
                  </p>
                  {hasDiscount ? (
                    <p className="mt-3 text-sm font-medium text-[#6b7280] line-through">
                      {formatPKR(selectedTier.subtotal)}
                    </p>
                  ) : null}
                  <p className={`text-[28px] font-black leading-none text-[#08264a] ${hasDiscount ? "mt-1" : "mt-3"}`}>
                    {formatPKR(selectedTier.total)}
                  </p>
                  <p
                    className={`mt-2 text-[13px] font-semibold leading-5 ${hasDiscount ? "text-[#37ad4b]" : "text-[#6b7280]"}`}
                  >
                    {savingsLine}
                  </p>
                  {requiresAdvance ? (
                    <p className="mt-2 rounded-lg bg-[#fff4df] px-2.5 py-1.5 text-[11px] font-semibold leading-5 text-[#9a5b08]">
                      20% advance ({formatPKR(advanceAmount)}) required
                    </p>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={handleOpenOrderModal}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-xl bg-[#08264a] px-5 text-[15px] font-semibold text-white shadow-[0_14px_28px_rgba(8,38,74,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b315e] sm:max-w-[230px] lg:ml-auto lg:min-h-12 lg:max-w-none lg:self-center"
                >
                  <BagIcon />
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOrderModalOpen ? (
        <div className="fixed inset-0 z-[2000] overflow-y-auto overscroll-contain bg-[#08264a]/55 px-4 py-5 backdrop-blur-sm sm:py-8">
          <div className="mx-auto flex min-h-full w-full max-w-2xl items-center justify-center">
            <form
              onSubmit={handleOrderSubmit}
              className="w-full rounded-2xl border border-[#eee3cf] bg-white p-4 shadow-[0_24px_80px_rgba(8,38,74,0.28)] sm:p-5"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#eee3cf] pb-4">
                <div>
                  <h2 className="text-xl font-black leading-tight text-[#08264a]">
                    Complete Your Order
                  </h2>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#6b7280]">
                    Enter your delivery details for StackSmart Organizer.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCloseOrderModal}
                  disabled={isSubmitting || isRedirecting}
                  aria-label="Close order form"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#eee3cf] text-[#08264a] transition hover:border-[#d8952f] hover:bg-[#fff4df] hover:text-[#9a5b08] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                  Full Name
                  <input
                    type="text"
                    name="full_name"
                    value={customerForm.full_name}
                    onChange={handleCustomerChange}
                    required
                    autoComplete="name"
                    placeholder="Ali Khan"
                    className={inputClass}
                  />
                </label>

                <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={customerForm.email}
                    onChange={handleCustomerChange}
                    required
                    autoComplete="email"
                    placeholder="customer@example.com"
                    className={inputClass}
                  />
                </label>

                <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={customerForm.phone}
                    onChange={handleCustomerChange}
                    required
                    autoComplete="tel"
                    placeholder="03001234567"
                    className={inputClass}
                  />
                </label>

                <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                  City
                  <input
                    type="text"
                    name="city"
                    value={customerForm.city}
                    onChange={handleCustomerChange}
                    required
                    autoComplete="address-level2"
                    placeholder="Lahore"
                    className={inputClass}
                  />
                </label>

                <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a] sm:col-span-2">
                  Address
                  <textarea
                    name="address"
                    value={customerForm.address}
                    onChange={handleCustomerChange}
                    required
                    rows={3}
                    autoComplete="street-address"
                    placeholder="House 12, Street 5, Lahore"
                    className={`${inputClass} h-auto min-h-24 resize-y py-3 leading-6`}
                  />
                </label>
              </div>

              {successMessage ? (
                <div className="mt-4 rounded-xl border border-[#bfe7cb] bg-[#effaf2] px-4 py-3 text-sm font-semibold leading-6 text-[#287a38]">
                  {successMessage}
                </div>
              ) : null}

              {orderError ? (
                <div className="mt-4 rounded-xl border border-[#f3c4bd] bg-[#fff3f1] px-4 py-3 text-sm font-semibold leading-6 text-[#b42318]">
                  {orderError}
                </div>
              ) : null}

              <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-stretch">
                <div className="flex flex-1 flex-col gap-3 rounded-xl border border-[#eee3cf] bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                    Change Quantity
                  </p>
                  <div className="grid w-full max-w-[176px] grid-cols-[0.9fr_1.2fr_0.9fr] overflow-hidden rounded-xl border border-[#eee3cf] bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={handlePrevQty}
                      disabled={selectedIndex === 0}
                      aria-label="Select previous quantity tier"
                      className="flex h-10 items-center justify-center text-[#08264a] transition hover:bg-[#f3f6f9] disabled:cursor-not-allowed disabled:text-[#b4bdc9]"
                    >
                      <MinusIcon />
                    </button>
                    <span className="flex h-10 items-center justify-center border-x border-[#eee3cf] text-lg font-semibold text-[#08264a]">
                      {selectedTier.qty}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextQty}
                      disabled={selectedIndex === orderableTiers.length - 1}
                      aria-label="Select next quantity tier"
                      className="flex h-10 items-center justify-center text-[#08264a] transition hover:bg-[#f3f6f9] disabled:cursor-not-allowed disabled:text-[#b4bdc9]"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isRedirecting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#08264a] px-5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(8,38,74,0.20)] transition hover:-translate-y-0.5 hover:bg-[#0b315e] disabled:cursor-not-allowed disabled:opacity-65 sm:w-[190px] lg:self-center"
                >
                  <BagIcon />
                  {isRedirecting ? "Processing..." : isSubmitting ? "Placing Order..." : "BUY NOW"}
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-[#eee3cf] bg-[#fffaf1] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#08264a]">
                  Short Order Summary
                </p>
                <div className="mt-3 grid gap-2 text-sm font-semibold text-[#4b5563] sm:grid-cols-3">
                  <div className="flex items-center justify-between gap-3">
                    <span>Quantity</span>
                    <span className="text-[#08264a]">{selectedTier.qty}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Shipping</span>
                    <span className="text-[#08264a]">
                      {selectedTier.shipping === 0 ? "Free" : formatPKR(selectedTier.shipping)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Discount</span>
                    <span className="text-[#37ad4b]">
                      {hasDiscount ? selectedTier.discount : "No discount"}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#eee3cf] pt-3 text-sm font-black text-[#08264a]">
                  <span>Total Amount</span>
                  <span>{formatPKR(selectedTier.total)}</span>
                </div>
                {requiresAdvance ? (
                  <div className="mt-3 rounded-lg bg-[#fff4df] px-3 py-2 text-sm font-semibold leading-5 text-[#9a5b08]">
                    20% advance ({formatPKR(advanceAmount)}) required for 30+ quantity orders.
                  </div>
                ) : null}
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                {createdOrder ? (
                  <button
                    type="button"
                    onClick={handleCreatedOrderWhatsApp}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[#d8952f] bg-white px-5 text-[15px] font-semibold text-[#9a5b08] transition hover:-translate-y-0.5 hover:bg-[#fff4df] sm:max-w-[230px] lg:min-h-12"
                  >
                    Continue on WhatsApp
                  </button>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
