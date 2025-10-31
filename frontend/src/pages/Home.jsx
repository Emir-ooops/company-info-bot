import { useState } from "react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/Button";
import CompanyCard from "../components/CompanyCard";
import { useTelegram } from "../hooks/useTelegram";
import { getCompanyInfo } from "../services/api";
import { useMediaQuery } from 'react-responsive';

export default function Home({ onSearch }) {
    const { user } = useTelegram();
    const [site, setSite] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const handleSearch = async () => {
        if (!site) return;
        setLoading(true);
        try {
            const res = await getCompanyInfo(site, user);
            setData(res);
            onSearch(res); // автоматически открываем Dashboard
        } catch (e) {
            console.error(e);
            alert("Ошибка при запросе к API");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col px-4 py-6">
            <Header title="Главная" />

            <div className={`flex flex-col gap-4 mt-6 ${!isMobile ? "max-w-6xl mx-auto" : ""}`}>
                {/* Контейнер для бегущей строки */}
                <div className="relative w-full">
                    <input
                        className="p-2 rounded bg-zinc-900 text-white w-full"
                        placeholder="Введите URL, ИНН или название компании"
                        value={site}
                        onChange={(e) => setSite(e.target.value)}
                    />
                    {site.length > 20 && (
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                            <div
                                className="whitespace-nowrap animate-marquee"
                                style={{ animationDuration: `${site.length * 0.5}s` }}
                            >
                                {site}
                            </div>
                        </div>
                    )}
                </div>

                <Button onClick={handleSearch}>
                    {loading ? "Загрузка..." : "Найти"}
                </Button>

                {data && <CompanyCard company={data} isMobile={isMobile} />}
            </div>

            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    display: inline-block;
                    white-space: nowrap;
                    animation: marquee linear infinite;
                }
                `}
            </style>
        </div>
    );
}
