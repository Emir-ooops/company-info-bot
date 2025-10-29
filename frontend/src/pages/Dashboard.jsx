import { useState } from "react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/Button";
import { CompanyCard } from "../components/CompanyCard";
import { LPRCard } from "../components/LPRCard";
import { PurchasesTable } from "../components/PurchasesTable";
import { exportPDF, exportExcel } from "../components/ExportUtils";

export default function Dashboard({ company, onBack }) {
    // Моковые данные для ЛПР
    const [lprs] = useState([
        { name: "Иван Иванов", department: "Энергетика", email: "ivan@company.com" },
        { name: "Мария Петрова", department: "ИТ", email: "maria@company.com" },
    ]);

    // Моковые данные для закупок
    const [purchases] = useState([
        { category: "Энергетика", amount: "5 млн ₽", date: "2025-01-15" },
        { category: "ИТ", amount: "2 млн ₽", date: "2025-02-20" },
    ]);

    return (
        <div className="p-4 flex flex-col gap-4">
            <Header title="Dashboard" onBack={onBack} />

            {/* Информация о компании */}
            {company && <CompanyCard company={company} />}

            {/* Список ЛПР */}
            <div>
                <h2 className="text-lg font-bold mb-2">ЛПР</h2>
                <div className="flex flex-col gap-2">
                    {lprs.map((lpr, i) => (
                        <LPRCard key={i} lpr={lpr} />
                    ))}
                </div>
            </div>

            {/* Таблица закупок */}
            <div>
                <h2 className="text-lg font-bold mb-2">Закупки</h2>
                <PurchasesTable purchases={purchases} />
            </div>

            {/* Кнопки экспорта */}
            <div className="flex gap-2 mt-4">
                <Button onClick={() => exportPDF(company, lprs, purchases)}>Экспорт PDF</Button>
                <Button onClick={() => exportExcel(purchases)}>Экспорт Excel</Button>
            </div>
        </div>
    );
}
