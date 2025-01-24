import React, { FC, ReactNode, TableHTMLAttributes, } from "react";
import { ElTableBody } from "./styles";
import { useTable } from "../table/use-table";

interface ITableBodyChildProps<TRowItem> {
  row: TRowItem
}

export interface ITableBodyProps<TRowItem> extends Omit<TableHTMLAttributes<HTMLTableSectionElement>, 'children'> {
  children?: (ReactNode) | ((props: ITableBodyChildProps<TRowItem>) => ReactNode);
}

export const TableBody = <TRow,>({
  children,
  ...rest
}: ITableBodyProps<TRow>) => {
  if (typeof children == "function") {
    const dataTable = useTable()
    return (
      <ElTableBody {...rest} >
        {dataTable.rows.map((row) => children({ row }))}
      </ElTableBody>
    )
  }
  return (
    <ElTableBody {...rest} >
      {children}
    </ElTableBody>
  );
};
