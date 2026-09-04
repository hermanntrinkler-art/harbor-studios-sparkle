import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { Tables } from "@/integrations/supabase/types";

type CompanySettings = Tables<"company_settings">;
type Customer = Tables<"customers">;

export interface PdfLineItem {
  position: number;
  description: string;
  quantity: number;
  unit: string;
  unit_price: number;
  line_total: number;
}

export interface PdfWorkLogEntry {
  date: string;
  project_title?: string | null;
  title: string;
  body?: string | null;
}

export interface PdfDocumentData {
  kind: "Angebot" | "Rechnung";
  number: string;
  issueDate: string;
  secondDateLabel?: string; // "Gültig bis" oder "Fällig am"
  secondDate?: string | null;
  status?: string;
  items: PdfLineItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
  notes?: string | null;
  workLog?: PdfWorkLogEntry[];
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

const formatDate = (value?: string | null) => {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("de-DE");
};

export function buildDocumentPdf(
  company: CompanySettings,
  customer: Customer,
  doc: PdfDocumentData
): jsPDF {
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const marginX = 20;
  let cursorY = 20;

  // Briefkopf
  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.text(company.company_name || "Harbor Studios", marginX, cursorY);

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  const addressLines = [
    company.address_line1,
    company.address_line2,
    [company.postal_code, company.city].filter(Boolean).join(" "),
    company.country,
  ].filter(Boolean) as string[];
  pdf.text(addressLines.join(" · "), marginX, cursorY + 6);

  const contactLines = [company.email, company.phone, company.website].filter(Boolean).join(" · ");
  if (contactLines) {
    pdf.text(contactLines, marginX, cursorY + 11);
  }

  // Dokumenttitel rechts
  pdf.setFontSize(20);
  pdf.setFont("helvetica", "bold");
  pdf.text(doc.kind, 190, cursorY, { align: "right" });
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Nr. ${doc.number}`, 190, cursorY + 6, { align: "right" });

  cursorY += 26;
  pdf.setDrawColor(200);
  pdf.line(marginX, cursorY, 190, cursorY);
  cursorY += 10;

  // Kunde
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "bold");
  pdf.text("Kunde", marginX, cursorY);
  pdf.setFont("helvetica", "normal");
  cursorY += 5;
  const customerLines = [
    customer.company_name,
    customer.contact_name,
    customer.address_line1,
    customer.address_line2,
    [customer.postal_code, customer.city].filter(Boolean).join(" "),
    customer.country,
  ].filter(Boolean) as string[];
  customerLines.forEach((line) => {
    pdf.text(line, marginX, cursorY);
    cursorY += 5;
  });

  // Datumsangaben rechts
  let metaY = cursorY - customerLines.length * 5;
  pdf.setFont("helvetica", "bold");
  pdf.text("Datum:", 140, metaY);
  pdf.setFont("helvetica", "normal");
  pdf.text(formatDate(doc.issueDate), 190, metaY, { align: "right" });
  metaY += 5;

  if (doc.secondDateLabel && doc.secondDate) {
    pdf.setFont("helvetica", "bold");
    pdf.text(`${doc.secondDateLabel}:`, 140, metaY);
    pdf.setFont("helvetica", "normal");
    pdf.text(formatDate(doc.secondDate), 190, metaY, { align: "right" });
    metaY += 5;
  }

  if (customer.vat_id) {
    pdf.setFont("helvetica", "bold");
    pdf.text("USt-IdNr. Kunde:", 140, metaY);
    pdf.setFont("helvetica", "normal");
    pdf.text(customer.vat_id, 190, metaY, { align: "right" });
    metaY += 5;
  }

  cursorY = Math.max(cursorY, metaY) + 8;

  // Positionstabelle
  autoTable(pdf, {
    startY: cursorY,
    margin: { left: marginX, right: 20 },
    head: [["Pos.", "Beschreibung", "Menge", "Einheit", "Einzelpreis", "Gesamt"]],
    body: doc.items.map((item) => [
      String(item.position),
      item.description,
      item.quantity.toLocaleString("de-DE"),
      item.unit,
      formatCurrency(item.unit_price),
      formatCurrency(item.line_total),
    ]),
    headStyles: { fillColor: [11, 46, 74] },
    styles: { fontSize: 9, cellPadding: 2.5 },
    columnStyles: {
      0: { cellWidth: 12 },
      2: { cellWidth: 18, halign: "right" },
      3: { cellWidth: 18 },
      4: { cellWidth: 28, halign: "right" },
      5: { cellWidth: 28, halign: "right" },
    },
  });

  // @ts-expect-error lastAutoTable wird vom autoTable-Plugin zur Laufzeit ergänzt
  let afterTableY = pdf.lastAutoTable.finalY + 8;

  const totalsX = 140;
  pdf.setFontSize(10);
  pdf.text("Zwischensumme:", totalsX, afterTableY);
  pdf.text(formatCurrency(doc.subtotal), 190, afterTableY, { align: "right" });
  afterTableY += 5;

  pdf.text(`zzgl. ${doc.taxRate.toLocaleString("de-DE")} % USt.:`, totalsX, afterTableY);
  pdf.text(formatCurrency(doc.taxAmount), 190, afterTableY, { align: "right" });
  afterTableY += 5;

  pdf.setFont("helvetica", "bold");
  pdf.text("Gesamtbetrag:", totalsX, afterTableY);
  pdf.text(formatCurrency(doc.total), 190, afterTableY, { align: "right" });
  pdf.setFont("helvetica", "normal");
  afterTableY += 12;

  if (doc.notes) {
    pdf.setFontSize(9);
    const wrapped = pdf.splitTextToSize(doc.notes, 170);
    pdf.text(wrapped, marginX, afterTableY);
    afterTableY += wrapped.length * 4.5 + 8;
  }

  const pageHeightForOverflow = pdf.internal.pageSize.getHeight();
  const ensureSpace = (needed: number) => {
    if (afterTableY + needed > pageHeightForOverflow - 25) {
      pdf.addPage();
      afterTableY = 20;
    }
  };

  if (doc.workLog && doc.workLog.length > 0) {
    ensureSpace(14);
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.text("Ausgeführte Arbeiten", marginX, afterTableY);
    pdf.setFont("helvetica", "normal");
    afterTableY += 6;

    doc.workLog.forEach((entry) => {
      const titleLine = `${formatDate(entry.date)}${entry.project_title ? " · " + entry.project_title : ""} – ${entry.title}`;
      const wrappedTitle = pdf.splitTextToSize(titleLine, 170);
      const wrappedBody = entry.body ? pdf.splitTextToSize(entry.body, 165) : [];
      const blockHeight = wrappedTitle.length * 4.5 + wrappedBody.length * 4 + 4;
      ensureSpace(blockHeight);

      pdf.setFontSize(9);
      pdf.setFont("helvetica", "bold");
      pdf.text(wrappedTitle, marginX, afterTableY);
      afterTableY += wrappedTitle.length * 4.5;

      if (wrappedBody.length > 0) {
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(90);
        pdf.text(wrappedBody, marginX + 3, afterTableY);
        pdf.setTextColor(0);
        afterTableY += wrappedBody.length * 4;
      }
      afterTableY += 3;
    });
    afterTableY += 5;
  }

  if (doc.kind === "Rechnung") {
    pdf.setFontSize(9);
    const paymentLines = [
      company.iban ? `IBAN: ${company.iban}` : null,
      company.bic ? `BIC: ${company.bic}` : null,
      company.bank_name ? `Bank: ${company.bank_name}` : null,
    ].filter(Boolean) as string[];
    if (paymentLines.length > 0) {
      pdf.setFont("helvetica", "bold");
      pdf.text("Zahlungsdetails", marginX, afterTableY);
      pdf.setFont("helvetica", "normal");
      afterTableY += 5;
      paymentLines.forEach((line) => {
        pdf.text(line, marginX, afterTableY);
        afterTableY += 4.5;
      });
    }
  }

  // Footer
  const pageHeight = pdf.internal.pageSize.getHeight();
  pdf.setFontSize(8);
  pdf.setTextColor(120);
  const footerLines = [
    company.footer_note,
    [
      company.tax_number ? `Steuernummer: ${company.tax_number}` : null,
      company.vat_id ? `USt-IdNr.: ${company.vat_id}` : null,
    ]
      .filter(Boolean)
      .join(" · "),
  ].filter(Boolean) as string[];
  footerLines.forEach((line, idx) => {
    pdf.text(line, 105, pageHeight - 14 + idx * 4, { align: "center" });
  });

  return pdf;
}
