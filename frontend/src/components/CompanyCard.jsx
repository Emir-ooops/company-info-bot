import React from "react";

export default function CompanyCard({ company, isMobile, onClick }) {
    if (!company) return null;

    return (
        <div
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl shadow-sm overflow-hidden p-4 flex flex-col gap-4 cursor-pointer hover:bg-zinc-700"
            onClick={onClick}
        >
            <div>
                <h3 className="text-xl font-semibold">{company.name || "Компания"}</h3>
                {company.activity && <p className="text-zinc-400 text-sm mt-1">{company.activity}</p>}
            </div>

            <div className="flex flex-col gap-2 text-sm text-zinc-300">
                {company.revenue && <p><span className="text-zinc-400">Выручка:</span> {company.revenue}</p>}
                {company.employees && <p><span className="text-zinc-400">Сотрудники:</span> {company.employees}</p>}
                {company.news?.length > 0 && (
                    <div>
                        <span className="text-zinc-400">Новости:</span>
                        <ul className="list-disc list-inside">
                            {company.news.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                )}
                {company.contacts?.email && <p><span className="text-zinc-400">Email:</span> {company.contacts.email}</p>}
                {company.contacts?.phone && <p><span className="text-zinc-400">Телефон:</span> {company.contacts.phone}</p>}
                {company.address && <p><span className="text-zinc-400">Адрес:</span> {company.address}</p>}
            </div>

            {isMobile && company.address && (
                <div className="w-full h-64 mt-4 rounded-lg overflow-hidden border border-zinc-700">
                    <iframe
                        title="company-map"
                        src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(company.address)}&z=15`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
}
