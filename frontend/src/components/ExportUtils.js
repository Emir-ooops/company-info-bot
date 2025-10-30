import * as XLSX from "xlsx";

// Экспорт текстовых данных компании в PDF
export function exportToPDF(company) {
    if (!company) return;

    const content = [];

    // Заголовок
    content.push({ text: company.name || "Компания", fontSize: 16, bold: true, margin: [0, 0, 0, 8] });

    // Основная информация
    if (company.activity) content.push({ text: `Деятельность: ${company.activity}`, margin: [0, 0, 0, 4] });
    if (company.revenue) content.push({ text: `Выручка: ${company.revenue}`, margin: [0, 0, 0, 4] });
    if (company.employees) content.push({ text: `Сотрудники: ${company.employees}`, margin: [0, 0, 0, 4] });

    // Новости
    if (company.news?.length > 0) {
        content.push({ text: "Новости:", bold: true, margin: [0, 8, 0, 4] });
        company.news.forEach((n) => {
            content.push({ text: `• ${n}`, margin: [10, 0, 0, 2] });
        });
    }

    // Контакты
    if (company.contacts?.email) content.push({ text: `Email: ${company.contacts.email}`, margin: [0, 4, 0, 0] });
    if (company.contacts?.phone) content.push({ text: `Телефон: ${company.contacts.phone}`, margin: [0, 2, 0, 0] });

    // Адрес
    if (company.address) content.push({ text: `Адрес: ${company.address}`, margin: [0, 4, 0, 0] });

    // Создание PDF и загрузка
    pdfMake.createPdf({ content }).download("company-info.pdf");
}

// Экспорт таблицы закупок в Excel
export function exportToExcel(data, fileName = "purchases.xlsx") {
    const worksheet = XLSX.utils.json_to_sheet(data || []);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, fileName);
}
