import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/navigation/newsletter-form";
import { AppStoreBadges } from "@/components/base/app-store-badges";

const linkColumns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Press & Media", "Blog", "Investor Relations"],
  },
  {
    title: "Products",
    links: [
      "Payments",
      "Payouts",
      "Cards",
      "Multi-Currency Account",
      "Pricing",
    ],
  },
  {
    title: "Resources",
    links: [
      "Help Center",
      "API Documentation",
      "Developers",
      "System Status",
      "Community",
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Licenses",
      "Compliance",
    ],
  },
];

const bottomLinks = ["Privacy", "Terms", "Cookies", "Licenses"];

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.5A6 6 0 0 1 16 8z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Linkedin", Icon: LinkedinIcon },
  { label: "X (Twitter)", Icon: XIcon },
  { label: "Youtube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-8">
        <div className="grid grid-cols-1 gap-12 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <Image
                src="/logo2.png"
                alt="COSMIC logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-display text-2xl font-black tracking-tight text-slate-900">
                COSMIC.
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              The trusted cross-border payment platform. Move money across 45+
              currencies fast, securely, and without the high banking fees.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, Icon }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-900">
                Download the COSMIC app
              </p>
              <AppStoreBadges className="mt-3" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {linkColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-slate-900">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-slate-200 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Get product updates
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Join 40,000+ subscribers for the latest from COSMIC.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs font-medium text-slate-500">
            Copyright © COSMIC 2026. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {bottomLinks.map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs font-medium text-slate-500 transition-colors hover:text-blue-600"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs font-semibold text-slate-800">
            Powered by COSMIC
          </p>
        </div>
      </div>
    </footer>
  );
}
