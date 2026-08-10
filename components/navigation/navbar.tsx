"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Products", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Currencies", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function MarketingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-50 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link
          href="/"
          className="text-2xl font-black italic tracking-tight text-blue-950"
        >
          COSMIC.
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Marketing navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-blue-950 transition-colors hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#"
          className="hidden rounded-full border border-blue-600 bg-white px-5 py-2.5 text-sm font-semibold text-blue-950 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white md:inline-flex"
        >
          Get Started
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-950 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600/30 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-blue-50 bg-white md:hidden">
          <nav
            className="mx-auto max-w-7xl px-8 py-6"
            aria-label="Mobile marketing navigation"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-blue-950 transition-colors hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 border-t border-blue-50 pt-6">
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className="block rounded-full border border-blue-600 bg-white px-5 py-3 text-center text-sm font-semibold text-blue-950 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
