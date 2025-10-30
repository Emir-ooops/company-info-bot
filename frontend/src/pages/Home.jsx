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

            {/* Внутренний контейнер для контента */}
            <div className={`flex flex-col gap-4 mt-6 ${!isMobile ? "max-w-6xl mx-auto" : ""}`}>
                <input
                    className="p-2 rounded bg-zinc-900 text-white w-full"
                    placeholder="Введите сайт компании"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                />
                <Button onClick={handleSearch}>
                    {loading ? "Загрузка..." : "Найти"}
                </Button>

                {data && <CompanyCard company={data} isMobile={isMobile} />}
            </div>
        </div>

    );
}
