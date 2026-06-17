import Image from "next/image";
import Link from "next/link";
import { siteDetails } from "@/data/siteDetails";
import { waLink, mailLink } from "@/lib/contact";
import { getDictionary } from "@/i18n";
import { localizedHref, type Locale } from "@/i18n/config";

export default function Footer({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link href={localizedHref(lang, "/")} className="flex items-center gap-2.5 text-xl tracking-tight mb-3">
            <Image src="/logo-icon.png" alt="Kreativita Sinergi" width={36} height={36} className="w-9 h-9" />
            <span className="leading-none">
              <span className="font-extrabold text-slate-900">KREATIVITA</span>{" "}
              <span className="font-medium text-slate-500">SINERGI</span>
            </span>
          </Link>
          <p className="text-sm text-slate-600 max-w-sm">{t.tagline}</p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">{t.navTitle}</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            {t.navLinks.map((item) => (
              <li key={item.href}>
                <Link href={localizedHref(lang, item.href)} className="hover:text-brand-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">{t.contactTitle}</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href={waLink()} target="_blank" rel="noopener" className="hover:text-brand-600">
                {t.whatsapp}
              </a>
            </li>
            <li>
              <a href={mailLink()} className="hover:text-brand-600">
                {siteDetails.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-10 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
        © {year} Kreativita Sinergi. {t.rights}
      </div>
    </footer>
  );
}
