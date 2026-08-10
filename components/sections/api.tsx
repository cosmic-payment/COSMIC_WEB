import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Globe3DDemo from "@/components/3d-globe-demo";
import { Reveal } from "@/components/base/motion/reveal";

const points = [
  "Single integration for payments, payouts & cards",
  "Bank-grade encryption and fraud protection",
  "Real-time status tracking on every transaction",
];

export default function Api() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        <div className="text-left">
          <Reveal>
            <span className="inline-block border-b-2 border-blue-600 pb-1 text-xs font-bold uppercase tracking-wider text-blue-600">
              Developer API
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              One API for all your global payments
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Build once and move money everywhere. Send cross-border
              transactions, hold 45+ currencies, issue cards, and make payouts
              through a single REST API.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-block rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700"
              >
                Get API Keys
              </Link>
              <Link
                href="#"
                className="inline-block rounded-full border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all duration-200 hover:border-blue-600 hover:text-blue-600"
              >
                Read the docs
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center">
            <Globe3DDemo />
          </div>
        </Reveal>      </div>
    </section>
  );
}