import Link from "next/link";
import { siteDetails } from "@/data/siteDetails";

export type Crumb = { name: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${siteDetails.siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.name} className="flex items-center gap-1.5">
                {item.href && !last ? (
                  <Link href={item.href} className="hover:text-brand-600 transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <span className={last ? "text-slate-700 font-medium line-clamp-1" : ""} aria-current={last ? "page" : undefined}>
                    {item.name}
                  </span>
                )}
                {!last && <span className="text-slate-300">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
