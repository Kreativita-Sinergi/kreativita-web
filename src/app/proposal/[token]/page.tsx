import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProposalByToken, markProposalViewed } from "@/lib/admin/repo";
import { formatMoney, lineTotal, proposalTotals } from "@/lib/admin/types";
import { t } from "@/lib/admin/i18n";
import { company, siteUrl } from "@/lib/admin/company";
import { siteDetails } from "@/data/siteDetails";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function PublicProposalPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const p = await getProposalByToken(token);
  if (!p) notFound();

  // Tandai sudah dibuka (best-effort, jangan blokir render).
  markProposalViewed(token).catch(() => {});

  const lang = p.language;
  const totals = proposalTotals(p);
  const co = company();
  const wa = siteDetails.contact.whatsapp;
  const waMsg =
    lang === "en"
      ? `Hi ${co.name}, I'd like to discuss the proposal "${p.title}".`
      : `Halo ${co.name}, saya ingin membahas penawaran "${p.title}".`;
  const dateStr = new Date(p.createdAt).toLocaleDateString(lang === "en" ? "en-US" : "id-ID", {
    year: "numeric", month: "long", day: "numeric",
  });
  const validStr = p.validUntil
    ? new Date(p.validUntil).toLocaleDateString(lang === "en" ? "en-US" : "id-ID", {
        year: "numeric", month: "long", day: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center justify-between">
          <a href={siteUrl()} className="grad-brand text-lg font-extrabold">{co.name}</a>
          <a
            href={`/api/proposal/${p.token}/pdf`}
            target="_blank"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            ↓ {t(lang, "downloadPdf")}
          </a>
        </div>

        <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <header className="grad-hero border-b border-slate-200 p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">{t(lang, "proposalDoc")}</div>
            <h1 className="mt-1 text-2xl font-extrabold text-slate-900">{p.title}</h1>
            <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <div className="text-xs uppercase text-slate-400">{t(lang, "preparedFor")}</div>
                <div className="font-semibold text-slate-800">{p.client.company || p.client.name}</div>
                {p.client.company ? <div className="text-slate-500">{p.client.name}</div> : null}
              </div>
              <div className="sm:text-right">
                <div className="text-xs uppercase text-slate-400">{t(lang, "date")}</div>
                <div className="text-slate-700">{dateStr}</div>
                {validStr ? <div className="mt-1 text-xs text-slate-400">{t(lang, "validUntil")}: {validStr}</div> : null}
              </div>
            </div>
          </header>

          <div className="p-8">
            {p.summary ? (
              <section className="mb-7">
                <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-600">{t(lang, "overview")}</h2>
                <p className="leading-relaxed text-slate-600">{p.summary}</p>
              </section>
            ) : null}

            <section>
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600">{t(lang, "scope")}</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-xs uppercase text-slate-400">
                    <th className="py-2 font-medium">{t(lang, "description")}</th>
                    <th className="py-2 text-right font-medium">{t(lang, "qty")}</th>
                    <th className="py-2 text-right font-medium">{t(lang, "unitPrice")}</th>
                    <th className="py-2 text-right font-medium">{t(lang, "amount")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {p.items.map((it, i) => (
                    <tr key={i}>
                      <td className="py-3 pr-3 text-slate-700">{it.description}</td>
                      <td className="py-3 text-right text-slate-600">{it.qty}</td>
                      <td className="py-3 text-right text-slate-600">{formatMoney(it.unitPrice, p.currency)}</td>
                      <td className="py-3 text-right font-medium text-slate-800">{formatMoney(lineTotal(it), p.currency)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-5 ml-auto w-full max-w-xs space-y-2 text-sm">
                <div className="flex justify-between text-slate-500"><span>{t(lang, "subtotal")}</span><span>{formatMoney(totals.subtotal, p.currency)}</span></div>
                {totals.discount > 0 && <div className="flex justify-between text-slate-500"><span>{t(lang, "discount")}</span><span>- {formatMoney(totals.discount, p.currency)}</span></div>}
                {p.taxPercent > 0 && <div className="flex justify-between text-slate-500"><span>{t(lang, "tax")} ({p.taxPercent}%)</span><span>{formatMoney(totals.tax, p.currency)}</span></div>}
                <div className="flex justify-between border-t-2 border-slate-800 pt-3 text-xl font-extrabold text-slate-900">
                  <span>{t(lang, "total")}</span><span className="text-brand-600">{formatMoney(totals.total, p.currency)}</span>
                </div>
              </div>
            </section>

            {p.notes ? (
              <section className="mt-8 rounded-xl bg-slate-50 p-5">
                <h2 className="mb-2 text-sm font-bold text-slate-900">{t(lang, "terms")}</h2>
                <p className="whitespace-pre-wrap text-sm text-slate-600">{p.notes}</p>
              </section>
            ) : null}

            <section className="mt-9 rounded-xl bg-brand-600 p-6 text-center text-white">
              <p className="text-lg font-bold">{t(lang, "acceptCta")}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a href={`https://wa.me/${wa}?text=${encodeURIComponent(waMsg)}`} target="_blank"
                   className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50">
                  WhatsApp
                </a>
                <a href={`mailto:${co.email}?subject=${encodeURIComponent(p.title)}`}
                   className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  Email
                </a>
              </div>
            </section>
          </div>
        </article>

        <p className="mt-5 text-center text-xs text-slate-400">
          {co.name} · {co.website} · {co.phone}
        </p>
      </div>
    </main>
  );
}
