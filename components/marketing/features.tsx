import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";
import { ArrowUpRight, Globe, Lock } from "lucide-react";

export default function Features() {
  return (
    <section className="relative flex min-h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-8">
              <div
                className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl"
                aria-hidden="true"
              />
              <CreditCard
                type="brand-dark"
                company="COSMIC"
                cardNumber="5387 2109 8842 4242"
                cardHolder="David K. · Mara Industrial Ltd"
                cardExpiration="09/29"
                className="relative -rotate-3"
              />
              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
                <Globe className="h-3 w-3" aria-hidden="true" />
                120+ markets
              </span>
            </div>

            <div className="flex flex-col justify-center gap-3 p-8 lg:p-10">
              <span className="w-fit rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                Global payments
              </span>
              <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Pay suppliers in 120+ markets, in their local currency
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Route cross-border payments through local rails with interbank
                FX pricing, so every supplier gets the exact amount you
                authorized — without hidden fees or failed transfers.
              </p>
              <a
                href="#"
                className="mt-1 flex w-fit items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Explore global payments
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-3 p-8 lg:order-1 lg:p-10">
              <span className="w-fit rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                FX rates & locks
              </span>
              <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Lock exchange rates before you settle
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Pre-book rates up to 12 months out and eliminate currency
                volatility from your treasury. Freeze today&apos;s price,
                settle when you&apos;re ready.
              </p>
              <a
                href="#"
                className="mt-1 flex w-fit items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Lock a rate
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:order-2">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl"
                aria-hidden="true"
              />
              <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
                <Lock className="h-3 w-3" aria-hidden="true" />
                Rate locked
              </span>
              <div className="relative w-full max-w-[260px] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                      EUR / USD
                    </p>
                    <p className="mt-1 text-xl font-bold text-white">1.0842</p>
                  </div>
                  <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                    +0.42%
                  </span>
                </div>
                <svg viewBox="0 0 260 120" className="mt-4 w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="fx-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.35)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,90 C20,86 34,62 58,66 C82,70 96,44 122,50 C148,56 166,26 192,32 C216,37 240,14 260,18 L260,120 L0,120 Z"
                    fill="url(#fx-fill)"
                  />
                  <path
                    d="M0,90 C20,86 34,62 58,66 C82,70 96,44 122,50 C148,56 166,26 192,32 C216,37 240,14 260,18"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
