import { siteDetails } from "@/data/siteDetails";

const { whatsapp, email } = siteDetails.contact;

export function waLink(message = "Halo Kreativita, saya ingin konsultasi.") {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailLink(
  subject = "Konsultasi Proyek Kreativita",
  body = "Halo tim Kreativita, saya ingin membuat...",
) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
