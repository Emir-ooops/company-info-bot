import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";

// PDF экспорт
export const exportPDF = (company, lprs, purchases) => {
    const doc = new jsPDF();
    let y = 10;

    if (company) {
        doc.setFontSize(14);
        doc.text(`Компания: ${company.name}`, 10, y); y += 8;
        doc.text(`Выручка: ${company.revenue || "Нет данных"}`, 10, y); y += 8;
        doc.text(`Новости: ${company.news?.join(", ") || "Нет данных"}`, 10, y); y += 10;
    }

    if (lprs?.length) {
        doc.setFontSize(12);
        doc.text("ЛПР:", 10, y); y += 8;
        lprs.forEach(lpr => {
            doc.text(`- ${lpr.name}, ${lpr.department}, ${lpr.email}`, 12, y); y += 6;
        });
        y += 4;
    }

    if (purchases?.length) {
        doc.text("Закупки:", 10, y); y += 8;
        purchases.forEach(p => {
            doc.text(`- ${p.category}: ${p.amount} (${p.date})`, 12, y); y += 6;
        });
    }

    doc.save("company_summary.pdf");
};

// Excel экспорт
export const exportExcel = (purchases) => {
    const ws = XLSX.utils.json_to_sheet(purchases);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Закупки");
    XLSX.writeFile(wb, "company_summary.xlsx");
};
