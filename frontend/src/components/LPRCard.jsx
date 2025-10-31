import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";

export default function LPRCard({ lpr }) {
    if (!lpr) return null;

    return (
        <Card className="bg-zinc-900">
            <CardHeader>
                <CardTitle>{lpr.name || "Контактное лицо"}</CardTitle>
                <CardDescription>{lpr.position || "Должность неизвестна"}</CardDescription>
            </CardHeader>
            <CardContent>
                {lpr.email ? <p>Email: {lpr.email}</p> : <p>Email: Нет данных</p>}
                {lpr.phone ? <p>Телефон: {lpr.phone}</p> : <p>Телефон: Нет данных</p>}
            </CardContent>
        </Card>
    );
}
