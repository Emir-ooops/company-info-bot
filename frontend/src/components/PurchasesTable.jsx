export const PurchasesTable = ({ purchases }) => (
    <table className="w-full table-auto border-collapse border border-zinc-700">
        <thead>
        <tr className="bg-zinc-900">
            <th className="border border-zinc-700 p-2">Категория</th>
            <th className="border border-zinc-700 p-2">Сумма</th>
            <th className="border border-zinc-700 p-2">Дата</th>
        </tr>
        </thead>
        <tbody>
        {purchases.map((p, i) => (
            <tr key={i} className="odd:bg-zinc-950 even:bg-zinc-900">
                <td className="border border-zinc-700 p-2">{p.category}</td>
                <td className="border border-zinc-700 p-2">{p.amount}</td>
                <td className="border border-zinc-700 p-2">{p.date}</td>
            </tr>
        ))}
        </tbody>
    </table>
);
