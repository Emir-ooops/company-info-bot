import { Table, TableHeader, TableRow, TableCell, TableBody } from "../components/ui/Table";

export default function PurchasesTable({ purchases }) {
    if (!purchases || purchases.length === 0) return <p>Нет данных о закупках</p>;

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell>Направление</TableCell>
                    <TableCell>Сумма</TableCell>
                    <TableCell>Дата</TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {purchases.map((item, i) => (
                    <TableRow key={i}>
                        <TableCell>{item.direction}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
