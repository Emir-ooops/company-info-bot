// named exports: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
import React from "react";


export const Card = ({ children, className = "" }) => (
    <div className={`bg-zinc-800 border border-zinc-700 rounded-lg shadow-sm overflow-hidden ${className}`}>
        {children}
    </div>
);

export const CardHeader = ({ children, className = "" }) => (
    <div className={`px-4 py-3 border-b border-zinc-700 ${className}`}>
        {children}
    </div>
);

export const CardTitle = ({ children, className = "" }) => (
    <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = "" }) => (
    <p className={`text-sm text-zinc-400 mt-1 ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = "" }) => (
    <div className={`p-4 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
    <div className={`px-4 py-3 border-t border-zinc-700 ${className}`}>{children}</div>
);
