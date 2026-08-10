import Image from "next/image";
import { Avatar } from "@/components/base/avatar/avatar";
import { AppStoreBadges } from "@/components/base/app-store-badges";
import { GridPattern } from "@/components/base/grid-pattern";
import { Reveal } from "@/components/base/motion/reveal";

const avatars = [
  {
    alt: "Olivia Rhye",
    src: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
  },
  {
    alt: "Phoenix Baker",
    src: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
  },
  {
    alt: "Lana Steiner",
    src: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
  },
  {
    alt: "Demi Wilkinson",
    src: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
  },
  {
    alt: "Candice Wu",
    src: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <GridPattern />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-12">
        <div className="max-w-2xl text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="text-sm text-yellow-400" aria-hidden="true">
                ★★★★★
              </span>
              <span className="text-sm font-semibold text-slate-800">
                4.9/5 rating from 40,000+ users
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-2xl text-5xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              The Trusted Cross Boder Payment Platform.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-lg font-normal leading-relaxed text-slate-500 sm:text-xl">
              We enable people and businesses to make cross-country payment
              transactions seamlessly, fast, and secure — without high banking
              fees.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <AppStoreBadges className="mt-8" />
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col gap-2 sm:mt-20 sm:flex-row sm:items-center sm:gap-2">
              <div className="flex -space-x-3">
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.alt}
                    size="xl"
                    alt={avatar.alt}
                    src={avatar.src}
                    className="ring-2 ring-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-4xl font-black tracking-tight text-slate-900">
                  12 Million+
                </p>
                <p className="mt-1 max-w-xs text-sm font-normal leading-snug text-slate-500">
                  Join 12M+ global users who trust our network for secure,
                  seamless cross-border transactions. Move money internationally
                  with lightning-fast speeds and enterprise-grade security.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Image
          src="/cosmicglobe.png"
          alt="3D globe visualization of COSMIC global payments"
          width={1536}
          height={1024}
          priority
          className="absolute right-0 top-[42%] hidden h-auto w-[500px] -translate-y-1/2 xl:block"
        />
      </div>
    </section>
  );
}
