import React, { ReactNode, TableHTMLAttributes, } from "react";
import { ElTableHead } from "./styles";
import clsx from "clsx";
import { useTable } from "../table/use-table";

interface ITableBodyChildProps<TRowItem> {
  row: TRowItem
}

export interface ITableHeadProps<TRowItem> extends Omit<TableHTMLAttributes<HTMLTableSectionElement>, 'children'> {
  children?: (ReactNode) | ((props: ITableBodyChildProps<TRowItem>) => ReactNode);
  stickyHeader?: boolean
}

export const TableHead = <TRow,>({
  children,
  className,
  stickyHeader,
  ...rest
}: ITableHeadProps<TRow>) => {
  const combinedClassName = clsx(className, stickyHeader && "pos-sticky");
  if (typeof children == "function") {
    const dataTable = useTable()
    return (
      <ElTableHead {...rest} >
        {dataTable.heads.map((row) => children({ row }))}
      </ElTableHead>
    )
  }
  return (
    <ElTableHead {...rest} className={combinedClassName} >
      {children}
    </ElTableHead>
  );
};

