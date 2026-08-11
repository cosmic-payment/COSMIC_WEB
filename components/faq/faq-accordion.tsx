"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I open a COSMIC account?",
    answer:
      "Download the COSMIC app and complete the registration in a few minutes. You'll need a valid ID for verification, then you can start sending and receiving money across borders.",
  },
  {
    question: "Which countries and currencies are supported?",
    answer:
      "COSMIC supports cross-border payments to 45+ currencies across 150+ countries. You can hold, send, and receive funds in all supported currencies from a single account.",
  },
  {
    question: "How fast are cross-border transfers?",
    answer:
      "Most transfers arrive within minutes to a few hours depending on the destination and the receiving bank. We track every transaction in real time so you always know where your money is.",
  },
  {
    question: "Are my payments and data secure?",
    answer:
      "Yes. COSMIC uses bank-grade encryption and advanced fraud protection. Your funds are safeguarded with regulated institutions and every transaction is monitored in real time.",
  },
  {
    question: "What are the fees for sending money abroad?",
    answer:
      "We charge a transparent, low flat fee per transfer and use interbank exchange rates. There are no hidden charges, and you always see the total cost before you confirm a payment.",
  },
  {
    question: "Can I cancel or refund a transfer?",
    answer:
      "You can cancel a transfer as long as it hasn't been picked up by the recipient's bank. Approved transfers follow the applicable refund policy; contact support and we'll help you resolve it.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
            >
              <span className="text-base font-semibold text-slate-900">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-blue-600 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
