import Link from "next/link";

const navLinks = [
  "Home",
  "Products",
  "Currencies",
  "Contact us ",
  "FAQ",
];

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
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link
              href="/"
              className="text-2xl font-black italic tracking-tighter text-slate-900"
            >
              COSMIC.
            </Link>
            <h2 className="mt-6 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Start sending money the smart way
            </h2>
            <div className="mt-8 flex items-center gap-3">
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
          </div>

          <div className="md:col-span-3">
            <nav className="flex flex-col space-y-3.5">
              {navLinks.map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-sm font-semibold text-slate-800 transition-colors hover:text-blue-600"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <span className="mb-4 block text-base font-semibold text-slate-900">
              Download app
            </span>
            <Link
              href="#"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-600"
            >
              Download Now
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs font-medium text-slate-500">
            Copyright © COSMIC 2026. All Rights Reserved.
          </p>
          <p className="text-xs font-semibold text-slate-800">
            Powered by COSMIC
          </p>
        </div>
      </div>
    </footer>
  );
}
