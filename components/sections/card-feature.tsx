import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { WalletCard } from "@/components/shared-assets/wallet/wallet";
import { GridPattern } from "@/components/base/grid-pattern";
import { Reveal } from "@/components/base/motion/reveal";

const features = [
  "Globally Accepted",
  "Track Expenses in Real-time",
  "No Minimum Balance",
  "Zero hidden FX markups",
  "Instant worldwide delivery",
];

const flags = ["ke", "gb", "us", "ng", "ug", "gh", "za", "cm"];

export default function CardFeature() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20">
      <GridPattern />

      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-16 px-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="relative flex h-full flex-col items-center py-10">
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
            </div>

            <div className="flex w-full flex-1 items-center justify-center">
              <div className="scale-[1.4]">
                <WalletCard />
              </div>
            </div>

            <div className="relative z-10 mt-8 flex flex-col items-center gap-3">
              <div className="flex -space-x-4">
                {flags.map((flag) => (
                  <Image
                    key={flag}
                    src={`https://flagcdn.com/w80/${flag}.png`}
                    alt=""
                    width={48}
                    height={48}
                    className="size-12 rounded-full border-2 border-slate-50 object-cover shadow-md"
                  />
                ))}
                <span className="flex size-12 items-center justify-center rounded-full border-2 border-slate-50 bg-blue-600 text-sm font-bold text-white shadow-md">
                  +40
                </span>
              </div>
              <p className="text-center text-sm font-bold text-slate-700 sm:text-base">
                Hold, spend &amp; transfer in 45+ currencies worldwide
              </p>
            </div>
          </div>
        </Reveal>

        <div className="text-left">
          <Reveal>
            <span className="inline-block border-b-2 border-blue-600 pb-1 text-xs font-bold uppercase tracking-wider text-blue-600">
              COSMIC Card
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              The ultimate card experience across borders
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              One card, every currency. Open accounts in 45+ currencies, hold
              and exchange balances at real interbank rates, and spend
              anywhere in the world — all from a single COSMIC wallet. No
              hidden markups, no minimum balance, and every payment tracked
              in real time.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-900 sm:text-base">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2
                    className="size-5 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <Link
              href="#"
              className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700"
            >
              Get Card Now
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
