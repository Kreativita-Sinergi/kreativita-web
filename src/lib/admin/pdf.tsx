import "server-only";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";
import {
  formatMoney,
  lineTotal,
  proposalTotals,
  type ProposalWithClient,
} from "./types";
import { t } from "./i18n";

const BRAND = "#1f47f5";
const SLATE = "#0f172a";
const MUTED = "#64748b";
const LINE = "#e2e8f0";

const styles = StyleSheet.create({
  page: { paddingTop: 48, paddingBottom: 56, paddingHorizontal: 44, fontSize: 10, color: SLATE, fontFamily: "Helvetica" },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 },
  brand: { fontSize: 18, fontFamily: "Helvetica-Bold", color: BRAND },
  brandSub: { fontSize: 8, color: MUTED, marginTop: 2 },
  docLabel: { fontSize: 9, color: MUTED, textAlign: "right" },
  docTitle: { fontSize: 13, fontFamily: "Helvetica-Bold", textAlign: "right", marginTop: 2 },
  metaRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 22 },
  metaBlock: { maxWidth: 240 },
  metaLabel: { fontSize: 8, color: MUTED, textTransform: "uppercase", marginBottom: 3, letterSpacing: 0.5 },
  metaValue: { fontSize: 10 },
  metaValueBold: { fontSize: 11, fontFamily: "Helvetica-Bold" },
  sectionTitle: { fontSize: 11, fontFamily: "Helvetica-Bold", color: BRAND, marginBottom: 6, marginTop: 6 },
  summary: { fontSize: 10, lineHeight: 1.5, color: "#334155", marginBottom: 18 },
  tableHead: { flexDirection: "row", backgroundColor: "#f1f5f9", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 3 },
  th: { fontSize: 8, fontFamily: "Helvetica-Bold", color: MUTED, textTransform: "uppercase", letterSpacing: 0.4 },
  row: { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 8, borderBottomWidth: 1, borderBottomColor: LINE },
  cDesc: { flex: 1, paddingRight: 8 },
  cQty: { width: 50, textAlign: "right" },
  cPrice: { width: 90, textAlign: "right" },
  cTotal: { width: 90, textAlign: "right" },
  totalsBox: { marginTop: 14, marginLeft: "auto", width: 240 },
  totalRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 3 },
  grandRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, marginTop: 4, borderTopWidth: 1.5, borderTopColor: SLATE },
  grandLabel: { fontSize: 12, fontFamily: "Helvetica-Bold" },
  grandValue: { fontSize: 12, fontFamily: "Helvetica-Bold", color: BRAND },
  notesTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", marginTop: 26, marginBottom: 4 },
  notes: { fontSize: 9, color: "#475569", lineHeight: 1.5 },
  footer: { position: "absolute", bottom: 28, left: 44, right: 44, borderTopWidth: 1, borderTopColor: LINE, paddingTop: 8, flexDirection: "row", justifyContent: "space-between" },
  footerText: { fontSize: 8, color: MUTED },
});

export type Company = {
  name: string;
  email: string;
  phone: string;
  website: string;
};

function ProposalDoc({ p, company }: { p: ProposalWithClient; company: Company }) {
  const lang = p.language;
  const totals = proposalTotals(p);
  const dateStr = new Date(p.createdAt).toLocaleDateString(lang === "en" ? "en-US" : "id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const validStr = p.validUntil
    ? new Date(p.validUntil).toLocaleDateString(lang === "en" ? "en-US" : "id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Document title={p.title} author={company.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.brand}>{company.name}</Text>
            <Text style={styles.brandSub}>{company.website}</Text>
            <Text style={styles.brandSub}>{company.email}</Text>
            <Text style={styles.brandSub}>{company.phone}</Text>
          </View>
          <View>
            <Text style={styles.docLabel}>{t(lang, "proposalDoc")}</Text>
            <Text style={styles.docTitle}>{p.title}</Text>
            <Text style={[styles.docLabel, { marginTop: 4 }]}>#{p.token.slice(0, 8).toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>{t(lang, "preparedFor")}</Text>
            <Text style={styles.metaValueBold}>{p.client.company || p.client.name}</Text>
            {p.client.company ? <Text style={styles.metaValue}>{p.client.name}</Text> : null}
            <Text style={styles.metaValue}>{p.client.email}</Text>
            {p.client.country ? <Text style={styles.metaValue}>{p.client.country}</Text> : null}
          </View>
          <View>
            <Text style={styles.metaLabel}>{t(lang, "date")}</Text>
            <Text style={[styles.metaValue, { marginBottom: 6 }]}>{dateStr}</Text>
            {validStr ? (
              <>
                <Text style={styles.metaLabel}>{t(lang, "validUntil")}</Text>
                <Text style={styles.metaValue}>{validStr}</Text>
              </>
            ) : null}
          </View>
        </View>

        {p.summary ? (
          <>
            <Text style={styles.sectionTitle}>{t(lang, "overview")}</Text>
            <Text style={styles.summary}>{p.summary}</Text>
          </>
        ) : null}

        <Text style={styles.sectionTitle}>{t(lang, "scope")}</Text>
        <View style={styles.tableHead}>
          <Text style={[styles.th, styles.cDesc]}>{t(lang, "description")}</Text>
          <Text style={[styles.th, styles.cQty]}>{t(lang, "qty")}</Text>
          <Text style={[styles.th, styles.cPrice]}>{t(lang, "unitPrice")}</Text>
          <Text style={[styles.th, styles.cTotal]}>{t(lang, "amount")}</Text>
        </View>
        {p.items.map((it, i) => (
          <View style={styles.row} key={i}>
            <Text style={styles.cDesc}>{it.description}</Text>
            <Text style={styles.cQty}>{it.qty}</Text>
            <Text style={styles.cPrice}>{formatMoney(it.unitPrice, p.currency)}</Text>
            <Text style={styles.cTotal}>{formatMoney(lineTotal(it), p.currency)}</Text>
          </View>
        ))}

        <View style={styles.totalsBox}>
          <View style={styles.totalRow}>
            <Text style={{ color: MUTED }}>{t(lang, "subtotal")}</Text>
            <Text>{formatMoney(totals.subtotal, p.currency)}</Text>
          </View>
          {totals.discount > 0 ? (
            <View style={styles.totalRow}>
              <Text style={{ color: MUTED }}>{t(lang, "discount")}</Text>
              <Text>- {formatMoney(totals.discount, p.currency)}</Text>
            </View>
          ) : null}
          {p.taxPercent > 0 ? (
            <View style={styles.totalRow}>
              <Text style={{ color: MUTED }}>
                {t(lang, "tax")} ({p.taxPercent}%)
              </Text>
              <Text>{formatMoney(totals.tax, p.currency)}</Text>
            </View>
          ) : null}
          <View style={styles.grandRow}>
            <Text style={styles.grandLabel}>{t(lang, "total")}</Text>
            <Text style={styles.grandValue}>{formatMoney(totals.total, p.currency)}</Text>
          </View>
        </View>

        {p.notes ? (
          <>
            <Text style={styles.notesTitle}>{t(lang, "terms")}</Text>
            <Text style={styles.notes}>{p.notes}</Text>
          </>
        ) : null}

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>{company.name} — {company.website}</Text>
          <Text style={styles.footerText} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}

export async function renderProposalPdf(
  p: ProposalWithClient,
  company: Company,
): Promise<Buffer> {
  return renderToBuffer(<ProposalDoc p={p} company={company} />);
}
