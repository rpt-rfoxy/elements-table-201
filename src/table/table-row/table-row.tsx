import React, { FC, ReactNode, TableHTMLAttributes } from "react";
import { ElTableRow } from "./styles";

export interface ITableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
  isSelected?: boolean
  link?: string
}

const OnClickLink = (link: string) => (event: React.MouseEvent<HTMLTableRowElement> | React.TouchEvent<HTMLTableRowElement>) => {
  // do redirect
  alert("redirecting")
}

const OnClickSelect = () => (event: React.MouseEvent<HTMLTableRowElement> | React.TouchEvent<HTMLTableRowElement>) => {
  // do Select
  alert("selected")
}

export const TableRow: FC<ITableRowProps> = ({
  children,
  isSelected,
  link,
  ...rest
}) => {

  return (
    <ElTableRow {...rest} data-selected={isSelected} onClick={link ? OnClickLink(link) : OnClickSelect()} >
      {children}
    </ElTableRow>
  );
};
