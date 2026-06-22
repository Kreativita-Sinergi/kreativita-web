import { siteDetails } from "@/data/siteDetails";
import type { Company } from "./pdf";

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || siteDetails.siteUrl).replace(/\/$/, "");
}

export function company(): Company {
  return {
    name: siteDetails.siteName,
    email: siteDetails.contact.email,
    phone: siteDetails.contact.phoneDisplay,
    website: siteUrl().replace(/^https?:\/\//, ""),
  };
}
