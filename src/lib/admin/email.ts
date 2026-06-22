import "server-only";
import { Resend } from "resend";
import { formatMoney, proposalTotals, type ProposalWithClient } from "./types";
import { t } from "./i18n";
import { renderProposalPdf } from "./pdf";
import { company, siteUrl } from "./company";
import { logEmail } from "./repo";

function client(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY belum di-set di environment.");
  return new Resend(key);
}

function from(): string {
  return process.env.RESEND_FROM || `${company().name} <${company().email}>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string,
  );
}

export function proposalEmailHtml(p: ProposalWithClient): string {
  const lang = p.language;
  const co = company();
  const url = `${siteUrl()}/proposal/${p.token}`;
  const totals = proposalTotals(p);
  const greet = p.client.company ? p.client.name : p.client.name.split(" ")[0];
  const body = p.summary ? `<p style="margin:0 0 16px;color:#334155;line-height:1.6">${escapeHtml(p.summary)}</p>` : "";

  return `<!doctype html><html lang="${lang}"><body style="margin:0;background:#f1f5f9;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#0f172a">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0">
    <tr><td style="background:#1f47f5;padding:24px 28px"><span style="color:#fff;font-size:18px;font-weight:bold">${escapeHtml(co.name)}</span></td></tr>
    <tr><td style="padding:28px">
      <p style="margin:0 0 12px;font-size:16px">${t(lang, "greetingHi")} ${escapeHtml(greet)},</p>
      <p style="margin:0 0 16px;color:#334155;line-height:1.6">${t(lang, "emailIntro")}</p>
      <!--MSG-->
      ${body}
      <table role="presentation" width="100%" style="background:#f8fafc;border-radius:10px;margin:8px 0 20px">
        <tr><td style="padding:16px 18px">
          <div style="font-size:12px;color:#64748b">${escapeHtml(p.title)}</div>
          <div style="font-size:12px;color:#64748b;margin-top:8px">${t(lang, "totalValue")}</div>
          <div style="font-size:22px;font-weight:bold;color:#1f47f5">${formatMoney(totals.total, p.currency)}</div>
        </td></tr>
      </table>
      <a href="${url}" style="display:inline-block;background:#1f47f5;color:#fff;text-decoration:none;padding:12px 22px;border-radius:9px;font-weight:bold">${t(lang, "viewOnline")} →</a>
      <p style="margin:18px 0 0;color:#64748b;font-size:13px">${t(lang, "pdfAttached")}</p>
      <p style="margin:24px 0 0;color:#334155">${t(lang, "regards")},<br/><strong>${escapeHtml(co.name)}</strong><br/>
        <a href="${siteUrl()}" style="color:#1f47f5">${escapeHtml(co.website)}</a> · ${escapeHtml(co.phone)}</p>
    </td></tr>
    <tr><td style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:12px">${escapeHtml(co.name)} · ${escapeHtml(co.email)}</td></tr>
  </table></body></html>`;
}

export async function sendProposalEmail(
  p: ProposalWithClient,
  opts?: { subject?: string; message?: string },
): Promise<{ ok: boolean; error?: string }> {
  const subject =
    opts?.subject?.trim() ||
    (p.language === "en"
      ? `Proposal from ${company().name}: ${p.title}`
      : `Penawaran dari ${company().name}: ${p.title}`);

  let html = proposalEmailHtml(p);
  if (opts?.message?.trim()) {
    const note = `<p style="margin:0 0 16px;color:#334155;line-height:1.6">${escapeHtml(opts.message).replace(/\n/g, "<br/>")}</p>`;
    html = html.replace("<!--MSG-->", note);
  }

  try {
    const pdf = await renderProposalPdf(p, company());
    const { error } = await client().emails.send({
      from: from(),
      to: p.client.email,
      subject,
      html,
      attachments: [
        {
          filename: `${p.title.replace(/[^\w\-]+/g, "-").slice(0, 60) || "proposal"}.pdf`,
          content: pdf,
        },
      ],
    });
    if (error) {
      await logEmail({ clientId: p.clientId, proposalId: p.id, toEmail: p.client.email, subject, status: "failed", error: String(error.message ?? error) });
      return { ok: false, error: String(error.message ?? error) };
    }
    await logEmail({ clientId: p.clientId, proposalId: p.id, toEmail: p.client.email, subject, status: "sent" });
    return { ok: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    await logEmail({ clientId: p.clientId, proposalId: p.id, toEmail: p.client.email, subject, status: "failed", error: msg });
    return { ok: false, error: msg };
  }
}
