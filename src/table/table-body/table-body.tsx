import React, { FC, ReactNode, TableHTMLAttributes, } from "react";
import { ElTableBody } from "./styles";


export interface ITableBodyProps extends Omit<TableHTMLAttributes<HTMLTableSectionElement>, 'children'> {
  children: (ReactNode);
}

export const TableBody: FC<ITableBodyProps> = ({
  children,
  ...rest
}) => {

  return (
    <ElTableBody {...rest} >
      {children}
    </ElTableBody>
  );
};
