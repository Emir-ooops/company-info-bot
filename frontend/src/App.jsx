import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
    const [page, setPage] = useState("home");
    const [company, setCompany] = useState(null);

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex justify-center px-4 overflow-x-hidden">
            <div className="w-full max-w-4xl">
                {page === "home" ? (
                    <Home
                        onSearch={(data) => {
                            setCompany(data);
                            setPage("dashboard");
                        }}
                    />
                ) : (
                    <Dashboard
                        company={company}
                        onBack={() => setPage("home")}
                    />
                )}
            </div>
        </div>
    );
}


export default App;
