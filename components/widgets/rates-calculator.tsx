"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpDown,
  ChevronDown,
  HandCoins,
} from "lucide-react";

type Currency = {
  code: string;
  name: string;
  flag: string;
  symbol: string;
};

const currencies: Currency[] = [
  { code: "USD", name: "US Dollar", flag: "us", symbol: "$" },
  { code: "EUR", name: "Euro", flag: "eu", symbol: "€" },
  { code: "GBP", name: "British Pound", flag: "gb", symbol: "£" },
  { code: "KES", name: "Kenyan Shilling", flag: "ke", symbol: "KSh" },
  { code: "NGN", name: "Nigerian Naira", flag: "ng", symbol: "₦" },
  { code: "UGX", name: "Ugandan Shilling", flag: "ug", symbol: "USh" },
  { code: "GHS", name: "Ghanaian Cedi", flag: "gh", symbol: "GH₵" },
  { code: "ZAR", name: "South African Rand", flag: "za", symbol: "R" },
  { code: "XAF", name: "Central African Franc", flag: "cm", symbol: "FCFA" },
];

const usdRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  KES: 129.5,
  NGN: 1550,
  UGX: 3700,
  GHS: 15.2,
  ZAR: 18.1,
  XAF: 569.217,
};

const tabs = ["Rates calculator", "Compare rates"];

const formatAmount = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);

function CurrencyPill({
  code,
  onChange,
  label,
}: {
  code: string;
  onChange: (code: string) => void;
  label: string;
}) {
  const currency = currencies.find((c) => c.code === code) ?? currencies[0];

  return (
    <div className="group relative">
      <div className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200/60 bg-slate-100 px-4 py-2.5 transition-all group-hover:border-blue-300 group-hover:bg-blue-50/80">
        <Image
          src={`https://flagcdn.com/w80/${currency.flag}.png`}
          alt={`${currency.name} flag`}
          width={24}
          height={24}
          className="size-6 shrink-0 rounded-full object-cover"
        />
        <span className="text-base font-extrabold text-slate-900">
          {currency.code}
        </span>
        <ChevronDown className="size-4 text-slate-500" aria-hidden="true" />
      </div>
      <select
        value={code}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="absolute inset-0 cursor-pointer appearance-none opacity-0"
      >
        {currencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} — {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function RatesCalculator() {
  const [tab, setTab] = useState(0);
  const [amount, setAmount] = useState("1000");
  const [amountFocused, setAmountFocused] = useState(false);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("XAF");

  const toCurrency = currencies.find((c) => c.code === to) ?? currencies[1];

  const { rate, result } = useMemo(() => {
    const parsed = Number.parseFloat(amount.replace(/,/g, ""));
    const numeric = Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    const r = usdRates[to] / usdRates[from];
    return { rate: r, result: numeric * r };
  }, [amount, from, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleAmountChange = (value: string) => {
    const cleaned = value.replace(/[^\d.,]/g, "").replace(/,/g, "");
    setAmount(cleaned);
  };

  const displayedAmount = amountFocused
    ? amount
    : amount
      ? formatAmount(Number.parseFloat(amount))
      : "";

  const compareRows = currencies.filter((c) => c.code !== from);

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="rounded-[2.5rem] bg-slate-100/70 p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
          <div className="flex items-center justify-between rounded-full bg-slate-100 p-1.5">
            {tabs.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setTab(i)}
                className={`w-1/2 cursor-pointer rounded-full py-3 text-center text-sm transition-all ${
                  i === tab
                    ? "bg-white font-bold text-slate-900 shadow-sm"
                    : "font-semibold text-slate-500 transition-colors hover:text-slate-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === 0 ? (
            <>
              <div className="pt-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  You Send
                </label>
                <div className="flex items-center justify-between gap-4">
                  <CurrencyPill code={from} onChange={setFrom} label="Send currency" />
                  <input
                    type="text"
                    inputMode="decimal"
                    value={displayedAmount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    onFocus={() => setAmountFocused(true)}
                    onBlur={() => setAmountFocused(false)}
                    aria-label="Amount you send"
                    className="max-w-[180px] bg-transparent text-right text-4xl font-black tracking-tight text-slate-900 outline-none sm:text-5xl"
                  />
                </div>
              </div>

              <div className="flex justify-center py-1">
                <button
                  type="button"
                  onClick={swap}
                  className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-slate-200/70 bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition-all hover:bg-blue-50 sm:text-sm"
                >
                  <ArrowUpDown className="size-4 text-blue-600" aria-hidden="true" />
                  1 {from} ≈ {formatAmount(rate)} {to}
                </button>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  They Receive
                </label>
                <div className="flex items-center justify-between gap-4">
                  <CurrencyPill code={to} onChange={setTo} label="Receive currency" />
                  <p className="text-right text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                    {toCurrency.symbol}
                    {formatAmount(result)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-2 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-blue-600 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 active:bg-blue-800"
              >
                Send Money Now
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
            </>
          ) : (
            <div>
              <p className="pt-1 text-sm font-semibold text-slate-500">
                You send{" "}
                <span className="font-black text-slate-900">
                  {formatAmount(result === 0 && amount ? 0 : Number.parseFloat(amount.replace(/,/g, "")) || 0)}{" "}
                  {from}
                </span>
              </p>
              <ul className="mt-4 divide-y divide-slate-100">
                {compareRows.slice(0, 5).map((currency) => (
                  <li
                    key={currency.code}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="flex items-center gap-2.5">
                      <Image
                        src={`https://flagcdn.com/w80/${currency.flag}.png`}
                        alt={`${currency.name} flag`}
                        width={20}
                        height={20}
                        className="size-5 rounded-full object-cover"
                      />
                      <span className="text-sm font-bold text-slate-700">
                        {currency.code}
                      </span>
                    </span>
                    <span className="text-sm font-black text-slate-900">
                      {currency.symbol}
                      {formatAmount(
                        (Number.parseFloat(amount.replace(/,/g, "")) || 0) *
                          (usdRates[currency.code] / usdRates[from]),
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-4 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-blue-600 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 active:bg-blue-800"
              >
                Compare All Rates
                <HandCoins className="size-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-1.5 px-4 text-center">
        <p className="text-xs font-medium text-slate-600 sm:text-sm">
          Looking for our business rates?{" "}
          <a href="#" className="font-bold text-blue-600 hover:underline">
            Contact sales!
          </a>
        </p>
        <p className="text-xs text-slate-400">
          We charge zero hidden fees on interbank transactions.
        </p>
      </div>
    </div>
  );
}
