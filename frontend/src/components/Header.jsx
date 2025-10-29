export const Header = ({ title, onBack }) => (
    <div className="flex items-center justify-between p-4 border-b border-zinc-700">
        {onBack ? <button onClick={onBack} className="text-white px-2 py-1 rounded hover:bg-zinc-700">←</button> : <div style={{ width: 32 }} />}
        <h1 className="text-lg font-bold">{title}</h1>
        <div style={{ width: 32 }} />
    </div>
);
