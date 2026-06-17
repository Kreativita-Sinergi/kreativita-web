import { siteDetails } from "@/data/siteDetails";
import { waLink, mailLink } from "@/lib/contact";
import { WhatsAppIcon, MailIcon } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  const { email, phoneDisplay, location } = siteDetails.contact;

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <Reveal className="rounded-3xl bg-gradient-to-br from-brand-600 to-purple-700 text-white p-8 lg:p-14 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(400px 200px at 20% 0%, #ffffff4d, transparent)" }}
          />
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              Punya Ide? Mari Wujudkan Bersama!
            </h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto">
              Hubungi tim Kreativita sekarang. Konsultasi gratis tanpa biaya, balasan cepat melalui
              WhatsApp atau email.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink("Halo Kreativita, saya ingin konsultasi pembuatan aplikasi/website.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 transition"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Chat via WhatsApp
              </a>
              <a
                href={mailLink()}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 transition"
              >
                <MailIcon className="w-6 h-6" />
                Kirim Email
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/80">
              <span>📧 {email}</span>
              <span>📱 {phoneDisplay}</span>
              <span>📍 {location}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
