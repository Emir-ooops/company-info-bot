import { useState } from "react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/Button";
import { CompanyCard } from "../components/CompanyCard";
import { useTelegram } from "../hooks/useTelegram";
import { getCompanyInfo } from "../services/api";

export default function Home({ onSearch, onOpenDashboard }) {
    const { user, closeApp } = useTelegram();
    const [site, setSite] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!site) return;
        setLoading(true);
        try {
            const res = await getCompanyInfo(site, user);
            setData(res);       // отображаем CompanyCard
            onSearch(res);      // сохраняем данные в App.jsx, но не меняем страницу
        } catch (e) {
            console.error(e);
            alert("Ошибка при запросе к API");
        }
        setLoading(false);
    };

    return (
        <div className="p-4 flex flex-col gap-3">
            <Header title="Главная" />
            <input
                className="p-2 rounded bg-zinc-900 text-white"
                placeholder="Введите сайт компании"
                value={site}
                onChange={(e) => setSite(e.target.value)}
            />
            <Button onClick={handleSearch}>
                {loading ? "Загрузка..." : "Найти"}
            </Button>
            <Button onClick={onOpenDashboard}>Открыть Dashboard</Button>
            <Button onClick={closeApp} className="bg-red-700 hover:bg-red-600">
                Закрыть приложение
            </Button>

            <CompanyCard company={data} />
        </div>
    );
}
