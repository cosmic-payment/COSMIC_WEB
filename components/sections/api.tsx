"use client";
import Link from "next/link";
import { CheckCircle2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { GridPattern } from "@/components/base/grid-pattern";
import { Reveal } from "@/components/base/motion/reveal";

const points = [
  "Single integration for payments, payouts & cards",
  "Bank-grade encryption and fraud protection",
  "Real-time status tracking on every transaction",
];

export default function Api() {
  const [copied, setCopied] = useState(false);
  const apiSnippet = `curl -X POST "https://api.cosmic.example/v1/transfers" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "source_account": "acc_abc",
    "amount": 100000,
    "currency": "USD",
    "destination": {
      "name": "Acme Ltd",
      "iban": "DE89370400440532013000",
      "country": "DE"
    },
    "purpose": "cross-border payment",
    "metadata": { "invoice": "INV-1234" }
  }'`;

  return (
    <section className="relative overflow-hidden bg-white">
      <GridPattern />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-2">
        <div className="text-left">
          <Reveal>
            <span className="inline-block border-b-2 border-blue-600 pb-1 text-xs font-bold uppercase tracking-wider text-blue-600">
              Developer API
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              One API for all your global payments
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Build once and move money everywhere. Send cross-border
              transactions, hold 45+ currencies, issue cards, and make payouts
              through a single REST API.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-block rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700"
              >
                Get API Keys
              </Link>
              <Link
                href="#"
                className="inline-block rounded-full border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all duration-200 hover:border-blue-600 hover:text-blue-600"
              >
                Read the docs
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-2xl rounded-lg bg-slate-900 p-6 text-sm text-slate-50">
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(apiSnippet);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1800);
                  } catch (e) {
                    /* noop */
                  }
                }}
                className="absolute right-3 top-3 inline-flex items-center gap-2 rounded bg-slate-800/40 px-3 py-1 text-xs font-medium hover:bg-slate-800"
                aria-label="Copy code"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>

                            <pre className="max-h-[420px] overflow-auto rounded text-xs bg-slate-900/30 p-3">
                <code className="font-mono text-[12px] leading-5">
                  <div><span className="text-pink-400">curl</span> <span className="text-slate-300">-X</span> <span className="text-yellow-300">POST</span> <span className="text-cyan-300">"https://api.cosmic.com/v1/transfers"</span></div>
                  <div><span className="text-yellow-300">-H</span> <span className="text-green-200">"Authorization:</span><span className="text-amber-200"> Bearer YOUR_API_KEY"</span></div>
                  <div><span className="text-yellow-300">-H</span> <span className="text-green-200">"Content-Type:</span><span className="text-emerald-200"> application/json"</span></div>
                  <div className="text-slate-400">-d {'\''}</div>
                  <div className="pl-4"><span className="text-sky-300">{'{'}</span></div>
                  <div className="pl-6"><span className="text-green-300">"source_account"</span>: <span className="text-amber-200">"Acc538000878001"</span>,</div>
                  <div className="pl-6"><span className="text-green-300">"amount"</span>: <span className="text-blue-300">1500</span>,</div>
                  <div className="pl-6"><span className="text-green-300">"currency"</span>: <span className="text-amber-200">"USD"</span>,</div>
                  <div className="pl-6"><span className="text-green-300">"destination"</span>: <span className="text-sky-300">{'{'}</span></div>
                  <div className="pl-8"><span className="text-green-300">"name"</span>: <span className="text-amber-200">"Elius Rwatzinger"</span>,</div>
                  <div className="pl-8"><span className="text-green-300">"iban"</span>: <span className="text-amber-200">"DE89370400440532013000"</span>,</div>
                  <div className="pl-8"><span className="text-green-300">"country"</span>: <span className="text-amber-200">"TZ"</span></div>
                  <div className="pl-6"><span className="text-sky-300">{'}'},</span></div>
                  <div className="pl-6"><span className="text-green-300">"purpose"</span>: <span className="text-amber-200">"School fee"</span>,</div>
                  <div className="pl-6"><span className="text-green-300">"metadata"</span>: <span className="text-sky-300">{'{'}</span></div>
                  <div className="pl-8"><span className="text-green-300">"invoice"</span>: <span className="text-amber-200">"INV-1IO067474884"</span></div>
                  <div className="pl-6"><span className="text-sky-300">{'}'}</span></div>
                  <div className="pl-4"><span className="text-sky-300">{'}'}</span></div>
                  <div className="text-slate-400">{'\''}</div>
                </code>
              </pre>
            </div>
          </div>
        </Reveal>      </div>
    </section>
  );
}