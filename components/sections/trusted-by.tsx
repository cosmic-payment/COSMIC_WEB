import Image from "next/image";
import { Reveal } from "@/components/base/motion/reveal";

const brands = [
  { domain: "stripe.com", name: "Stripe" },
  { domain: "paypal.com", name: "PayPal" },
  { domain: "visa.com", name: "Visa" },
  { domain: "mastercard.com", name: "Mastercard" },
  { domain: "americanexpress.com", name: "American Express" },
  { domain: "adyen.com", name: "Adyen" },
  { domain: "klarna.com", name: "Klarna" },
  { domain: "squareup.com", name: "Square" },
  { domain: "wise.com", name: "Wise" },
  { domain: "revolut.com", name: "Revolut" },
  { domain: "plaid.com", name: "Plaid" },
  { domain: "coinbase.com", name: "Coinbase" },
  { domain: "venmo.com", name: "Venmo" },
  { domain: "affirm.com", name: "Affirm" },
];

const token = process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY;

export default function TrustedBy() {
  if (!token) return null;

  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">
            Trusted by leading global brands
          </p>
        </Reveal>

        <div className="cosmic-marquee-track mt-8 overflow-hidden">
          <div className="cosmic-marquee flex w-max items-center gap-12 py-2 sm:gap-16">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.domain}-${index}`}
                className="flex h-12 items-center justify-center"
              >
                <Image
                  src={`https://img.logo.dev/${brand.domain}?token=${token}&format=webp&retina=true&size=96`}
                  alt={`${brand.name} logo`}
                  width={96}
                  height={96}
                  className="h-full w-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
