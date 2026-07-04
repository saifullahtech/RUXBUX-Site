import Link from "next/link";

export const dynamic = "force-dynamic";

function formatPKR(value) {
  return `Rs.${Number(value || 0).toLocaleString("en-PK")}`;
}

function formatDate(value) {
  if (!value) {
    return "Pending";
  }

  return new Intl.DateTimeFormat("en-PK", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getStatusLabel(status) {
  return String(status || "confirmed")
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function getOrder(publicId) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://ruxbux.com/api";

  try {
    const response = await fetch(`${apiBaseUrl}/orders/${publicId}/`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data?.detail || "Order details could not be loaded.",
      };
    }

    return {
      order: data,
    };
  } catch (error) {
    return {
      error:
        error?.message ||
        "Order details could not be loaded. Please try again.",
    };
  }
}

function DetailRow({ label, value, strong = false }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-[#eee3cf] py-3 first:border-t-0">
      <span className="text-sm font-semibold text-[#667085]">{label}</span>
      <span
        className={`text-right text-sm ${
          strong ? "text-lg font-black text-[#08264a]" : "font-bold text-[#26364a]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { publicId } = await params;

  return {
    title: `Order Success | ${publicId}`,
    description: "RUXBUX order confirmation and delivery details.",
  };
}

export default async function OrderSuccessPage({ params }) {
  const { publicId } = await params;
  const { order, error } = await getOrder(publicId);
  const address = order?.address || {};
  const whatsappMessage = order
    ? `Hello RUXBUX, I want to confirm my order.
Order ID: ${order.public_id}
Quantity: ${order.quantity}
Total: ${formatPKR(order.total_amount)}
Name: ${address.full_name || ""}
Phone: ${address.phone || ""}
City: ${address.city || ""}`
    : "";

  if (error) {
    return (
      <main className="bg-[#fffdf8] px-4 py-12 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl rounded-2xl border border-[#f3c4bd] bg-white p-6 text-center shadow-[0_20px_70px_rgba(8,38,74,0.10)] sm:p-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff3f1] text-2xl font-black text-[#b42318]">
            !
          </div>
          <h1 className="mt-5 text-3xl font-black text-[#08264a]">
            Order Details Unavailable
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-6 text-[#667085]">
            {error}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products/stacksmart-organizer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#08264a] px-6 text-sm font-bold text-white transition hover:bg-[#0b315e]"
            >
              Back to Product
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#d8952f] bg-white px-6 text-sm font-bold text-[#9a5b08] transition hover:bg-[#fff4df]"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#fffdf8] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-[#eee3cf] bg-white shadow-[0_24px_80px_rgba(8,38,74,0.12)]">
          <div className="border-b border-[#eee3cf] bg-[#fffaf1] px-5 py-6 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-[#bfe7cb] bg-[#effaf2] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#287a38]">
                  Order Received
                </span>
                <h1 className="mt-4 text-3xl font-black leading-tight text-[#08264a] sm:text-4xl">
                  Thank you, {address.full_name || "customer"}.
                </h1>
                <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-[#667085]">
                  Your StackSmart Organizer order has been placed successfully.
                </p>
              </div>

              <div className="rounded-xl border border-[#eee3cf] bg-white px-4 py-3 text-left shadow-sm sm:min-w-[230px]">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#667085]">
                  Order Status
                </p>
                <p className="mt-1 text-xl font-black text-[#08264a]">
                  {getStatusLabel(order.status)}
                </p>
                <p className="mt-2 break-all text-xs font-semibold leading-5 text-[#667085]">
                  {order.public_id}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-8">
            <div className="space-y-6">
              <section className="rounded-xl border border-[#eee3cf] bg-white p-5">
                <h2 className="text-lg font-black text-[#08264a]">Order Summary</h2>
                <div className="mt-4">
                  <DetailRow label="Product" value="StackSmart Wardrobe Organizer" />
                  <DetailRow label="Quantity" value={order.quantity} />
                  <DetailRow label="Subtotal" value={formatPKR(order.subtotal_amount)} />
                  <DetailRow label="Shipping" value={formatPKR(order.shipping_amount)} />
                  <DetailRow label="Discount" value={formatPKR(order.discount_amount)} />
                  <DetailRow label="Tax" value={formatPKR(order.tax_amount)} />
                  <DetailRow label="Total" value={formatPKR(order.total_amount)} strong />
                </div>
              </section>

              <section className="rounded-xl border border-[#eee3cf] bg-[#fffaf1] p-5">
                <h2 className="text-lg font-black text-[#08264a]">Order Timeline</h2>
                <div className="mt-4 grid gap-3 text-sm font-semibold text-[#4b5563] sm:grid-cols-2">
                  <div className="rounded-lg bg-white px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.08em] text-[#667085]">
                      Created
                    </p>
                    <p className="mt-1 text-[#08264a]">{formatDate(order.created_at)}</p>
                  </div>
                  <div className="rounded-lg bg-white px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.08em] text-[#667085]">
                      Last Updated
                    </p>
                    <p className="mt-1 text-[#08264a]">{formatDate(order.updated_at)}</p>
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-xl border border-[#eee3cf] bg-white p-5">
                <h2 className="text-lg font-black text-[#08264a]">Delivery Details</h2>
                <div className="mt-4">
                  <DetailRow label="Name" value={address.full_name || "-"} />
                  <DetailRow label="Phone" value={address.phone || "-"} />
                  <DetailRow label="Email" value={order.email || "-"} />
                  <DetailRow label="City" value={address.city || "-"} />
                  <div className="border-t border-[#eee3cf] pt-3">
                    <p className="text-sm font-semibold text-[#667085]">Address</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#26364a]">
                      {address.address || "-"}
                    </p>
                  </div>
                </div>
              </section>

              {order.quantity >= 30 ? (
                <section className="rounded-xl border border-[#f2d5ac] bg-[#fff4df] p-5">
                  <h2 className="text-lg font-black text-[#08264a]">Advance Payment</h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#9a5b08]">
                    20% advance may be required for 30+ quantity orders. Advance amount:
                    {" "}
                    {formatPKR(Math.round(Number(order.total_amount) * 0.2))}
                  </p>
                </section>
              ) : null}

              <div className="grid gap-3">
                <a
                  href={`https://wa.me/923020441525?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#08264a] px-6 text-sm font-bold text-white transition hover:bg-[#0b315e]"
                >
                  Confirm on WhatsApp
                </a>
                <Link
                  href="/products/stacksmart-organizer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#d8952f] bg-white px-6 text-sm font-bold text-[#9a5b08] transition hover:bg-[#fff4df]"
                >
                  Continue Shopping
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
