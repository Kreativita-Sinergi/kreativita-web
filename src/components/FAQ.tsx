"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-600 font-semibold text-sm">FAQ</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-4 text-slate-600">
            Belum terjawab? Langsung tanya tim kami lewat WhatsApp atau email.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-brand-600 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {open && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
