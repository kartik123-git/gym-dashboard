
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ReactNode } from "react";

/* ---------- TYPES ---------- */

export interface Column<T> {
  field: keyof T | "action";
  headerName: string;
  render?: (row: T) => ReactNode;
}

export interface CommonTableProps<T> {
  columns: Column<T>[];
  rows: T[];
}

/* ---------- COMPONENT ---------- */

export default function CommonTable<T>({
  columns,
  rows,
}: CommonTableProps<T>) {
  return (
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={String(col.field)}>
                {col.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={String(col.field)}>
                  {col.render
                    ? col.render(row)
                    : (row as any)[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
