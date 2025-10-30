import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";

export default function LPRCard({ lpr }) {
    if (!lpr) return null;

    return (
        <Card className="bg-zinc-900">
            <CardHeader>
                <CardTitle>{lpr.name}</CardTitle>
                <CardDescription>{lpr.position}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Email: {lpr.email || "Нет данных"}</p>
                <p>Телефон: {lpr.phone || "Нет данных"}</p>
            </CardContent>
        </Card>
    );
}
