import React, { TableHTMLAttributes } from "react";
import { ElTable } from "./styles";
import { IData } from "./types";
import { TableDriver } from "./table-driver";

// Define the ITableProps interface with generics
export interface ITableProps<THead = any, TRow = any> extends TableHTMLAttributes<HTMLTableElement> {
  data?: IData<THead, TRow>;
}

export const Table = <THead, TRow>({
  children,
  data,
  ...rest
}: ITableProps<THead, TRow>) => {
  return (
    <TableDriver.Provider value={{ heads: data?.heads || [], rows: data?.rows || [] }}>
      <ElTable {...rest}>
        {children}
      </ElTable>
    </TableDriver.Provider>
  );
};

