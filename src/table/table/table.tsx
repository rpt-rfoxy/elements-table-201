import React, { TableHTMLAttributes, useState } from "react";
import { ElTable } from "./styles";
import { IData, ISort } from "./types";
import { TableDriver } from "./table-driver";

export interface ITableProps<TRow = any, THead = any> extends TableHTMLAttributes<HTMLTableElement> {
  data?: IData<THead, TRow>;
}

export const doSort = <TRow, THead>(sort: ISort, setSort: React.Dispatch<React.SetStateAction<ISort>>) => (callback?: (sort: ISort) => void) => () => {
  setSort(sort == "asc" ? "desc" : "asc")
  callback?.(sort)
}

export const Table = <TRow, THead>({
  children,
  data,
  ...rest
}: ITableProps<TRow, THead>) => {
  const [sort, setSort] = useState<ISort>("asc")
  return (
    <TableDriver.Provider value={{ heads: data?.heads || [], rows: data?.rows || [], doSort: doSort(sort, setSort) }}>
      <ElTable {...rest}>
        {children}
      </ElTable>
    </TableDriver.Provider>
  );
};

