import Link from "next/link";
import { Avatar } from "@/components/base/avatar/avatar";
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
      <div
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.05)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-12">
        <div className="max-w-2xl text-left">
          <Reveal>
            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              The Trusted Cross Boder Payment Platform.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg font-normal leading-relaxed text-slate-500 sm:text-xl">
              We enable people and businesses to make cross-country payment
              transactions seamlessly, fast, and secure — without high banking
              fees.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href="#"
              className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700"
            >
              Download App Now
            </Link>
          </Reveal>

          <Reveal delay={0.3}>
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
      </div>
    </section>
  );
}
