"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n";
import { localizedHref, type Locale } from "@/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const dict = getDictionary(lang);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <Link href={localizedHref(lang, "/")} className="flex items-center gap-2.5 text-lg sm:text-xl tracking-tight">
            <Image src="/logo-icon.png" alt="Kreativita Sinergi" width={36} height={36} className="w-9 h-9" priority />
            <span className="leading-none">
              <span className="font-extrabold text-slate-900">KREATIVITA</span>{" "}
              <span className="font-medium text-slate-600">SINERGI</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {dict.nav.items.map((item) => (
              <li key={item.href}>
                <Link href={localizedHref(lang, item.href)} className="hover:text-brand-600 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <a
              href={localizedHref(lang, "/#kontak")}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 transition"
            >
              {dict.nav.cta}
            </a>
          </div>

          <button className="md:hidden p-2 -mr-2" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {open && (
          <div className="md:hidden border-t border-slate-100 bg-white px-5 py-4 space-y-3 text-sm font-medium text-slate-700">
            {dict.nav.items.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(lang, item.href)}
                className="block"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher lang={lang} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
