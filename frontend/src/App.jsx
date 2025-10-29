import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
    const [company, setCompany] = useState(null); // данные компании
    const [page, setPage] = useState("home");    // текущая страница: "home" или "dashboard"

    return (
        <div className="min-h-screen bg-zinc-950 text-white p-4">
            {page === "home" ? (
                <Home
                    onSearch={setCompany}            // сохраняем данные компании
                    onOpenDashboard={() => setPage("dashboard")} // открытие Dashboard
                />
            ) : (
                <Dashboard
                    company={company}
                    onBack={() => setPage("home")}   // кнопка "Назад"
                />
            )}
        </div>
    );
}

export default App;
