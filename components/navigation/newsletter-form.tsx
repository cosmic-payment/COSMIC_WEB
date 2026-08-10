"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex w-full max-w-md items-center gap-2"
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor="footer-newsletter" className="sr-only">
        Email address
      </label>
      <input
        id="footer-newsletter"
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700"
      >
        Subscribe
      </button>
    </form>
  );
}
