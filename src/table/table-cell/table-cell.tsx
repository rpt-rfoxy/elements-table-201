import React, { FC, ReactNode, TdHTMLAttributes } from "react";
import { ElTableCell, ElTableCellContent, ElTableCellLink } from "./styles";


export interface ITableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode
  alignment?: "left" | "center" | "right"
  link?: string
  width?: string
  minWidth?: string
  maxWidth?: string
}

export const TableCell: FC<ITableCellProps> = ({
  children,
  alignment = "left",
  link,
  width,
  minWidth,
  maxWidth,
  ...rest
}) => {
  return (
    <ElTableCell {...rest} data-alignment={alignment}>
      <ElTableCellContent>
        {link && (
          <ElTableCellLink>
            {children}
          </ElTableCellLink>
        )}
        {!link && children}
      </ElTableCellContent>
    </ElTableCell>
  );
};
