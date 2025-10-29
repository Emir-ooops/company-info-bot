export const Button = ({ children, onClick, className }) => {
    const base = "px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 transition text-white";
    return (
        <button onClick={onClick} className={`${base} ${className || ""}`}>
            {children}
        </button>
    );
};
