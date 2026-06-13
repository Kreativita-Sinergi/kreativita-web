import { siteDetails } from "@/data/siteDetails";
import { waLink, mailLink } from "@/lib/contact";

export default function Footer() {
  const { email } = siteDetails.contact;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-2 font-extrabold text-xl mb-3">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 text-white">
              K
            </span>
            Kreativita
          </a>
          <p className="text-sm text-slate-600 max-w-sm">
            Partner teknologi untuk bisnis Anda — membangun website, aplikasi, dan solusi IT dengan harga
            terjangkau. Loka Kasir adalah salah satu produk kami.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#layanan" className="hover:text-brand-600">Layanan</a></li>
            <li><a href="#produk" className="hover:text-brand-600">Loka Kasir</a></li>
            <li><a href="#harga" className="hover:text-brand-600">Harga</a></li>
            <li><a href="#kontak" className="hover:text-brand-600">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Hubungi Kami</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href={waLink()} target="_blank" rel="noopener" className="hover:text-brand-600">WhatsApp</a></li>
            <li><a href={mailLink()} className="hover:text-brand-600">{email}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-10 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
        © {year} Kreativita. Semua hak dilindungi.
      </div>
    </footer>
  );
}
