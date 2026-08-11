"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-12 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
          ✓
        </div>
        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Thanks for reaching out. Our team will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid grid-cols-1 gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-semibold text-slate-900"
          >
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-semibold text-slate-900"
          >
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-sm font-semibold text-slate-900"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="How can we help?"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-semibold text-slate-900"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a little more about your enquiry…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}
