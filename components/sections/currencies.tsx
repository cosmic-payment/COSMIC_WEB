import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";
import { Reveal } from "@/components/base/motion/reveal";

const checklist = [
  "One Account, Multiple Currencies",
  "Regulated & Secure",
  "Trade On Your Own Terms",
];

const nations = [
  { name: "Tanzania", src: "https://flagcdn.com/w80/tz.png" },
  { name: "Kenya", src: "https://flagcdn.com/w80/ke.png" },
  { name: "UK", src: "https://flagcdn.com/w80/gb.png" },
  { name: "USA", src: "https://flagcdn.com/w80/us.png" },
  { name: "Nigeria", src: "https://flagcdn.com/w80/ng.png" },
];

export default function Currencies() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-6 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl text-left">
          <Reveal>
            <span className="inline-block border-b-2 border-white/70 pb-1 text-xs font-bold uppercase tracking-wider text-white">
              Multi-currency account
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl">
              Easy access to over 45+ global currencies with one account
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
              Hold over 45 currencies and exchange to the currency you need,
              when you need it.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-6 w-6 shrink-0 text-sky-300"
                    aria-hidden="true"
                  />
                  <span className="text-base font-semibold text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <Link
              href="#"
              className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 shadow-lg shadow-blue-950/30 transition-all duration-200 hover:bg-blue-50"
            >
              Get Started Now
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="hidden lg:block lg:translate-x-6">
            <CreditCard
              shine
              width={420}
              type="brand-dark"
              company="COSMIC"
              cardHolder="ALEX SMITH"
              cardExpiration="09/29"
              cardNumber="5524 9910 4242"
            />
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center -space-x-2.5">
                {nations.map((nation) => (
                  <Image
                    key={nation.name}
                    src={nation.src}
                    alt={`${nation.name} flag`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-white/90">
                Trusted in 45+ countries
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm text-yellow-300" aria-hidden="true">
                ★★★★★
              </span>
              <span className="text-sm font-semibold text-white">
                4.9/5 rating from 40,000+ users
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
