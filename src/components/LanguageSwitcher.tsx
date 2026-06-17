"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizedHref, locales, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname() || "/";

  // Normalisasi ke path versi Indonesia (tanpa prefix /en)
  let base = pathname;
  if (base === "/en") base = "/";
  else if (base.startsWith("/en/")) base = base.slice(3);

  const hrefFor = (target: Locale): string => {
    // Blog hanya bahasa Indonesia: dari blog, EN diarahkan ke beranda EN.
    if (base.startsWith("/blog")) return target === "id" ? base : "/en";
    return localizedHref(target, base);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 p-0.5 text-xs font-semibold">
      {locales.map((l) => (
        <Link
          key={l}
          href={hrefFor(l)}
          aria-current={l === lang ? "true" : undefined}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            l === lang ? "bg-brand-600 text-white" : "text-slate-500 hover:text-brand-600"
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
