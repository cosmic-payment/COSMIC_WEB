import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { WalletCard } from "@/components/shared-assets/wallet/wallet";
import { Reveal } from "@/components/base/motion/reveal";

const features = [
  "Globally Accepted",
  "Track Expenses in Real-time",
  "No Minimum Balance",
];

export default function CardFeature() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="flex justify-center py-6">
            <div className="scale-125">
              <WalletCard />
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
              Enjoy the flexibility of a COSMIC corporate card. Spend anytime,
              anywhere around the world.
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
