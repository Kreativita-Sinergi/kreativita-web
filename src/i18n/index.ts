import { id, type Dictionary } from "./id";
import { en } from "./en";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { id, en };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang] ?? id;
}

export type Service = Dictionary["services"]["items"][number];

export function getServices(lang: Locale): Service[] {
  return getDictionary(lang).services.items;
}

export function getService(lang: Locale, slug: string): Service | undefined {
  return getServices(lang).find((s) => s.slug === slug);
}

export type { Dictionary };
export type { Locale } from "./config";
