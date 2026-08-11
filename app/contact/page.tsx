import { Clock, Mail, MessageSquare, Phone } from "lucide-react";
import { GridPattern } from "@/components/base/grid-pattern";
import { Reveal } from "@/components/base/motion/reveal";
import ContactForm from "@/components/forms/contact-form";

const contactChannels = [
  {
    icon: Mail,
    label: "Email us",
    value: "support@cosmic.app",
    hint: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+1 (415) 555-0134",
    hint: "Mon–Fri, 9:00–18:00",
  },
  {
    icon: Clock,
    label: "Business hours",
    value: "Monday to Friday",
    hint: "9:00 AM – 6:00 PM",
  },
  {
    icon: MessageSquare,
    label: "Support",
    value: "Live chat & email",
    hint: "Priority for business accounts",
  },
];

export default function ContactPage() {
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
              Contact us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              We&apos;re here to help
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Questions about your account, transfers, or cards? Reach out and
              our team will get back to you shortly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20">
        <GridPattern />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Contact details
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Choose the channel that works best for you. For urgent issues,
                live chat is the fastest option.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {contactChannels.map((channel, index) => (
                <Reveal key={channel.label} delay={0.1 + index * 0.05}>
                  <li className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <channel.icon
                        className="size-5 text-blue-600"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {channel.label}
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-slate-900">
                        {channel.value}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {channel.hint}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in the form and we&apos;ll respond as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
