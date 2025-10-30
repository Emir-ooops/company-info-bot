
import React from "react";

export const Table = ({ children, className = "" }) => (
    <div className={`overflow-x-auto bg-transparent ${className}`}>
        <table className="min-w-full divide-y divide-zinc-700">
            {children}
        </table>
    </div>
);

export const TableHeader = ({ children }) => (
    <thead className="bg-zinc-900">
    {children}
    </thead>
);

export const TableRow = ({ children, className = "" }) => (
    <tr className={`text-left ${className}`}>{children}</tr>
);

export const TableCell = ({ children, className = "" }) => (
    <td className={`px-3 py-2 align-top ${className}`}>{children}</td>
);

export const TableHeadCell = ({ children, className = "" }) => (
    <th className={`px-3 py-2 text-sm font-medium text-zinc-300 ${className}`}>{children}</th>
);

export const TableBody = ({ children }) => (
    <tbody className="divide-y divide-zinc-700">{children}</tbody>
);
