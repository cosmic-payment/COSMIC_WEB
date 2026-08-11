import Link from "next/link";
import { GridPattern } from "@/components/base/grid-pattern";
import { Reveal } from "@/components/base/motion/reveal";
import FaqAccordion from "@/components/faq/faq-accordion";

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <GridPattern />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="inline-block border-b-2 border-blue-600 pb-1 text-xs font-bold uppercase tracking-wider text-blue-600">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Frequently asked questions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Everything you need to know about sending money with COSMIC. Can&apos;t
              find your answer? Get in touch with our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20">
        <GridPattern />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <FaqAccordion />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <p className="text-base font-semibold text-slate-900">
                Still have questions?
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700"
              >
                Contact support
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
