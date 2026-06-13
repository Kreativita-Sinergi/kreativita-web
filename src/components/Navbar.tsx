"use client";

import { useState } from "react";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 text-white">
              K
            </span>
            <span>Kreativita</span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-brand-600 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#kontak"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 transition"
          >
            Konsultasi Gratis
          </a>

          <button className="md:hidden p-2 -mr-2" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {open && (
          <div className="md:hidden border-t border-slate-100 bg-white px-5 py-4 space-y-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
