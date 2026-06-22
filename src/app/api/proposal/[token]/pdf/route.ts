import { NextResponse } from "next/server";
import { getProposalByToken } from "@/lib/admin/repo";
import { renderProposalPdf } from "@/lib/admin/pdf";
import { company } from "@/lib/admin/company";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  const p = await getProposalByToken(token);
  if (!p) return new NextResponse("Not found", { status: 404 });

  const pdf = await renderProposalPdf(p, company());
  const filename = `${p.title.replace(/[^\w\-]+/g, "-").slice(0, 60) || "proposal"}.pdf`;

  return new NextResponse(pdf as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
