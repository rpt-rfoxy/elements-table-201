import React, { FC, ReactNode, TableHTMLAttributes, } from "react";
import { ElTableHead } from "./styles";

export interface ITableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
  children?: (ReactNode);
  isSticky?: boolean
}

export const TableHead: FC<ITableHeadProps> = ({
  children,
  isSticky,
  ...rest
}) => {
  return (
    <ElTableHead {...rest} data-position={isSticky ? "sticky" : "relative"} >
      {children}
    </ElTableHead>
  );
};

