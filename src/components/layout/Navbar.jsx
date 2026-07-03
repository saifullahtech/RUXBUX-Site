"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "StackSmart Organizer", href: "/products/stacksmart-organizer" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

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
      <path d="M6.5 8.5h11l1 11h-13l1-11Z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

function MenuIcon({ isOpen }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    >
      {isOpen ? (
        <>
          <path d="m6 6 12 12" />
          <path d="m18 6-12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActiveLink(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee3cf] bg-[#fbf5e8] shadow-[0_10px_28px_rgba(12,32,61,0.08)]">
      <nav className="relative mx-auto flex min-h-[84px] max-w-[1800px] items-center justify-between gap-3 px-5 sm:px-6 lg:min-h-24 lg:gap-5 lg:px-14">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#092246] text-[#092246] transition hover:border-[#d98200] hover:text-[#d98200] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>

        <Link
          href="/"
          onClick={closeMenu}
          className="absolute left-1/2 top-1/2 flex shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0 text-[#092246] lg:static lg:translate-x-0 lg:translate-y-0 lg:flex-row lg:gap-4"
          aria-label="RUXBUX home"
        >
          <Image
            src="/logo.png"
            alt="RUXBUX"
            width={112}
            height={82}
            priority
            className="h-auto w-[68px] sm:w-[78px] lg:w-[96px]"
          />
          <span className="block whitespace-nowrap pb-1 text-center text-[7px] font-bold leading-none sm:text-[9px] lg:pb-0 lg:text-left lg:text-base lg:leading-tight">
            <span className="text-[#092246] lg:block">Smart Storage.</span>{" "}
            <span className="text-[#d98200] lg:block">Maximum Space.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-base font-bold text-[#081d3d] transition-colors after:absolute after:left-0 after:top-full after:h-0.5 after:w-full after:origin-left after:bg-[#d98200] after:transition-transform ${
                  active
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:text-[#d98200] hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-[#092246] bg-transparent px-5 text-sm font-bold text-[#081d3d] transition hover:border-[#d98200] hover:bg-white hover:text-[#d98200]"
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </Link>
          <Link
            href="/products/stacksmart-organizer"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[#092246] px-6 text-sm font-bold text-white shadow-[0_8px_18px_rgba(9,34,70,0.16)] transition hover:bg-[#d98200]"
          >
            <BagIcon />
            Shop Now
          </Link>
        </div>

        <Link
          href="/products/stacksmart-organizer"
          onClick={closeMenu}
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-0.5 rounded-md border border-[#092246] bg-transparent text-[#081d3d] transition hover:border-[#d98200] hover:bg-white hover:text-[#d98200] lg:hidden"
        >
          <BagIcon />
          <span className="text-[7px] font-bold leading-none">Shop Now</span>
        </Link>
      </nav>

      <div
        className={`absolute left-0 right-0 top-full overflow-hidden border-t border-[#eee3cf] bg-[#fbf5e8]/95 px-4 shadow-[0_18px_36px_rgba(9,34,70,0.16)] backdrop-blur-md transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen
            ? "max-h-[560px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-4 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`mx-auto flex max-w-[1800px] flex-col gap-3 py-4 transition-all duration-500 ease-out ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                className="group w-fit px-3 py-2 text-sm font-bold text-[#081d3d] transition-colors hover:text-[#d98200]"
              >
                <span
                  className={`relative after:absolute after:left-0 after:top-full after:h-0.5 after:w-full after:origin-left after:bg-[#d98200] after:transition-transform ${
                    active
                      ? "after:scale-x-100"
                      : "after:scale-x-0 group-hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            className="mt-2 inline-flex items-center justify-center gap-3 rounded-md border border-[#092246] px-5 py-3 text-center text-sm font-bold text-[#081d3d] transition hover:border-[#d98200] hover:bg-white hover:text-[#d98200]"
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </Link>
          <Link
            href="/products/stacksmart-organizer"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            className="inline-flex items-center justify-center gap-3 rounded-md bg-[#092246] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_10px_18px_rgba(9,34,70,0.16)] transition hover:bg-[#d98200]"
          >
            <BagIcon />
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}
