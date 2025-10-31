import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";

export function exportToPDF(company) {
    if (!company) return;

    const content = [];
    content.push({ text: company.name || "Компания", fontSize: 16, bold: true, margin: [0,0,0,8] });
    if (company.activity) content.push({ text: `Деятельность: ${company.activity}`, margin: [0,0,0,4] });
    if (company.revenue_estimate) content.push({ text: `Выручка: ${company.revenue_estimate}`, margin: [0,0,0,4] });
    if (company.employee_count) content.push({ text: `Сотрудники: ${company.employee_count}`, margin: [0,0,0,4] });
    if (company.email) content.push({ text: `Email: ${company.email}`, margin: [0,0,0,2] });
    if (company.phone) content.push({ text: `Телефон: ${company.phone}`, margin: [0,0,0,2] });
    if (company.website) content.push({ text: `Сайт: ${company.website}`, margin: [0,0,0,2] });
    if (company.address) content.push({ text: `Адрес: ${company.address}`, margin: [0,0,0,2] });

    pdfMake.createPdf({ content }).download("company-info.pdf");
}

export function exportToExcel(data, fileName = "purchases.xlsx") {
    const worksheet = XLSX.utils.json_to_sheet(data || []);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, fileName);
}
