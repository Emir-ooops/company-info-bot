export const LPRCard = ({ lpr }) => (
    <div className="p-3 bg-zinc-800 rounded shadow-sm">
        <p><b>ФИО:</b> {lpr.name}</p>
        <p><b>Отдел:</b> {lpr.department}</p>
        <p><b>Email:</b> {lpr.email}</p>
    </div>
);
