export const CompanyCard = ({ company }) => {
    if (!company) return null;
    return (
        <div className="bg-zinc-800 p-4 rounded shadow mt-4">
            <h2 className="font-bold text-xl">{company.name}</h2>
            <p>Выручка: {company.revenue}</p>
            <p>Новости: {company.news?.join(", ") || "Нет данных"}</p>
            <p>Адрес: {company.address}</p>
            <iframe
                className="w-full h-48 mt-2 rounded"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
            />
        </div>
    );
};
