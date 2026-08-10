import Image from "next/image";
import { Reveal } from "@/components/base/motion/reveal";

const reviews = [
  {
    quote:
      "COSMIC is a lifesaver for my cross-border transfers! I don't have to worry about delayed supplier payouts or getting hit by high exchange fees.",
    name: "Marcus",
    role: "Digital Marketer",
    avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
  },
  {
    quote:
      "With COSMIC, the funds arrive almost instantly and the conversion rates are the best I've found. It has completely changed how I manage my freelance income.",
    name: "Miller",
    role: "Motion Designer",
    avatar: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
  },
  {
    quote:
      "COSMIC's multi-currency wallet stops me from losing money on bad conversion rates. At the end of each month, I can track exactly where my revenue went.",
    name: "Afidin",
    role: "Traveller & Founder",
    avatar: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
  },
  {
    quote:
      "Since switching to COSMIC, receiving and verifying global transfers is incredibly smooth and instant.",
    name: "Elena Rodriguez",
    role: "E-Commerce Owner",
    avatar: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
  },
  {
    quote:
      "COSMIC makes cross-border operations stress-free with transparent tracking. It's fast, secure, and much more convenient than traditional banking.",
    name: "David",
    role: "Regional Manager",
    avatar: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
  },
  {
    quote:
      "I have tried several financial apps, but COSMIC is the most consistent and stable. The KYB verification process was remarkably fast.",
    name: "Rere Iskandar",
    role: "Tour Guide",
    avatar: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/40 transition-all duration-300 hover:border-blue-300 hover:shadow-xl sm:w-[380px] sm:p-7">
      <blockquote className="mb-6 text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
        “{review.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3.5">
        <Image
          src={review.avatar}
          alt={review.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-blue-100"
        />
        <div>
          <p className="text-sm font-bold text-slate-900">{review.name}</p>
          <p className="text-xs font-medium text-slate-500">{review.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="cosmic-marquee-track overflow-hidden">
      <div
        className={`cosmic-marquee flex w-max gap-6 py-2 ${
          reverse ? "cosmic-marquee-reverse" : ""
        }`}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
        <Reveal>
          <span className="mb-3 inline-block border-b-2 border-blue-600 pb-1 text-xs font-bold uppercase tracking-wider text-blue-600">
            Reviews
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            What our users are saying
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Organize your finances with COSMIC. Track global spending, hold
            multiple currencies, and save prudently in one easy-to-navigate
            app.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
