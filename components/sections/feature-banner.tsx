import { Globe, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast global transfers",
    subtext:
      "Send money at interbank rates with near-instant delivery across borders.",
  },
  {
    icon: Globe,
    title: "45+ currencies, one account",
    subtext:
      "Hold, send, and receive in multiple currencies without switching apps.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-grade security",
    subtext:
      "End-to-end encryption and advanced fraud protection on every transaction.",
  },
];

export default function FeatureBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="mb-3 inline-block border-b-2 border-white/70 pb-1 text-xs font-bold uppercase tracking-wider text-white">
            Features
          </span>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            We are the best international money transfer provider
          </h2>
          <p className="mb-6 mt-4 text-base text-white/90 sm:text-lg">
            Maximize success with our flexible product features. Customize, stay
            compatible across platforms, and receive reliable support for
            optimized performance.
          </p>

          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sky-300">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-base font-bold text-white sm:text-lg">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 text-sm text-white/80">
                    {feature.subtext}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <img
          src="/imo2.png"
          alt="App Preview"
          className="mx-auto w-full max-w-md sm:max-w-lg"
        />
      </div>
    </section>
  );
}
