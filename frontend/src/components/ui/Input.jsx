export function Input({ value, onChange, placeholder, className = "" }) {
    return (
        <input
            className={`p-2 rounded bg-zinc-900 text-white w-full ${className}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}
