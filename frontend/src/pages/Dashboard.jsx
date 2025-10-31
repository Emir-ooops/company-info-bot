import React from "react";
import { Header } from "../components/Header";
import CompanyCard from "../components/CompanyCard";
import { Button } from "../components/ui/Button";
import { useMediaQuery } from 'react-responsive';
import { exportToPDF, exportToExcel } from "../components/ExportUtils";
import LPRCard from "../components/LPRCard";
export default function Dashboard({ company, onBack }) {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    if (!company) return (
        <div className="min-h-screen w-full bg-zinc-950 text-white flex justify-center items-center">
            <p>Нет данных для отображения</p>
            <Button className="mt-4" onClick={onBack}>Назад</Button>
        </div>
    );

    return (
        <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col px-4 py-6">
            <Header title="Информация о компании" />

            <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6 mt-6 w-full max-w-6xl mx-auto h-full`}>
                <div className="flex-1 flex flex-col gap-4" id="company-card">
                    <CompanyCard company={company} isMobile={isMobile} />

                    {company.lpr && <LPRCard lpr={company.lpr} />}

                    <div className="flex gap-4 mt-2">
                        <Button
                            className="flex-1 bg-teal-600 hover:bg-teal-500"
                            onClick={() => exportToPDF(company)}
                        >
                            Экспорт в PDF
                        </Button>
                        <Button
                            className="flex-1 bg-blue-600 hover:bg-blue-500"
                            onClick={() => exportToExcel(company.purchases)}
                        >
                            Экспорт в Excel
                        </Button>
                    </div>

                    <Button className="mt-4 bg-zinc-800 hover:bg-zinc-700" onClick={onBack}>Назад</Button>
                </div>

                {!isMobile && company.address && (
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-full h-full rounded-lg overflow-hidden border border-zinc-700">
                            <iframe
                                title="company-map"
                                src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(company.address)}&z=15`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
