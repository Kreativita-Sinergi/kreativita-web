export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Membentuk href yang sadar bahasa.
// id (default) -> path apa adanya ("/", "/layanan/x").
// en -> diberi prefix "/en" ("/en", "/en/layanan/x").
export function localizedHref(lang: Locale, path: string): string {
  if (/^https?:|^mailto:|^tel:/.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  // Blog hanya tersedia dalam bahasa Indonesia — selalu di-share di root.
  if (clean === "/blog" || clean.startsWith("/blog/") || clean.startsWith("/blog#")) return clean;
  if (lang === defaultLocale) return clean;
  if (clean === "/") return "/en";
  return `/en${clean}`;
}
