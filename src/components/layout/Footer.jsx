import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "StackSmart Organizer", href: "/products/stacksmart-organizer" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Shipping Info", href: "/shipping-info" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const contactLinks = [
  {
    label: "Order on WhatsApp",
    href: "https://wa.me/923001234567",
    icon: WhatsAppIcon,
  },
  { label: "+92 300 1234567", href: "tel:+923001234567", icon: PhoneIcon },
  { label: "hello@ruxbux.com", href: "mailto:hello@ruxbux.com", icon: MailIcon },
  { label: "Lahore, Pakistan", href: "/contact", icon: LocationIcon },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com", icon: TikTokIcon },
];

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 8.2V6.7c0-.72.5-.9.86-.9H17V2.13L14.05 2.1C10.78 2.1 10 4.56 10 6.12V8.2H8v3.86h2V22h4v-9.94h2.7l.36-3.86H14Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="16" height="16" x="4" y="4" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M17.5 6.8h.01" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.64 3c.37 2.18 1.62 3.48 3.75 3.62v3.54a6.65 6.65 0 0 1-3.78-1.14v6.67c0 3.39-2.18 5.31-5.14 5.31-3.07 0-5.36-2.16-5.36-5.01 0-3.31 2.87-5.5 6.06-4.83v3.62c-1.43-.46-2.52.18-2.52 1.21 0 .91.77 1.5 1.75 1.5 1.06 0 1.75-.62 1.75-2.12V3h3.49Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2a9.93 9.93 0 0 0-8.57 14.95L2.05 22l5.17-1.35A9.9 9.9 0 0 0 12.04 22h.01A9.94 9.94 0 0 0 22 12.07a9.84 9.84 0 0 0-2.95-7.16Zm-7 15.41h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.8.82-2.99-.19-.31a8.23 8.23 0 1 1 6.93 3.82Zm4.51-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.07-.25-.13-1.04-.39-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.05 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.78a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#092246] text-white">
      <div className="mx-auto grid max-w-[1800px] grid-cols-2 gap-x-6 gap-y-7 px-5 py-7 sm:grid-cols-2 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-[1.2fr_1fr_1fr_1.25fr] lg:px-20 lg:py-14">
        <div className="col-span-2 flex items-center justify-between gap-5 sm:col-span-1 sm:block">
          <Link
            href="/"
            aria-label="RUXBUX home"
            className="inline-flex shrink-0 rounded-md bg-[#f2d5ac] px-2.5 py-1.5 shadow-[0_10px_24px_rgba(242,213,172,0.22)] ring-1 ring-white/20 transition hover:bg-[#fbf5e8] sm:px-3 sm:py-2"
          >
            <Image
              src="/logo.png"
              alt="RUXBUX"
              width={112}
              height={82}
              className="h-auto w-16 sm:w-24"
            />
          </Link>
          <p className="mt-4 hidden max-w-[240px] text-sm font-medium leading-6 text-[#f7ead4] sm:block">
            RUXBUX brings smart storage solutions for modern homes. Organize
            better, live better.
          </p>
          <div className="flex items-center gap-3 sm:mt-6 sm:gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d98200] text-[#d98200] transition hover:bg-[#d98200] hover:text-[#092246] sm:h-9 sm:w-9"
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white sm:text-base">Quick Links</h2>
          <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs font-medium text-[#f7ead4] transition hover:text-[#d98200] sm:text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white sm:text-base">Customer Service</h2>
          <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs font-medium text-[#f7ead4] transition hover:text-[#d98200] sm:text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-sm font-bold text-white sm:text-base">Contact Us</h2>
          <ul className="mt-3 grid gap-2 min-[420px]:grid-cols-2 sm:mt-5 sm:block sm:space-y-4">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link href={href} className="flex items-center gap-2 text-xs font-bold text-[#f7ead4] transition hover:text-[#d98200] sm:gap-4 sm:text-sm">
                  <span className="shrink-0 text-[#d98200]">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e8c89c]/30 bg-[#f2d5ac] px-6 py-4 text-center text-xs font-semibold text-[#092246]">
        © {year} RUXBUX. All rights reserved.
      </div>
    </footer>
  );
}
