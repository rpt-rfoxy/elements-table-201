import React, { FC, ReactNode, TdHTMLAttributes } from "react";
import { ElTableCell, ElTableCellContent } from "./styles";

export interface ITableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode
  alignment?: "left" | "center" | "right"
  width?: string
  minWidth?: string
  maxWidth?: string
  flexDirection?: "column" | "row"
  isFlexWrap?: boolean
}

export const TableCell: FC<ITableCellProps> = ({
  children,
  alignment = "left",
  flexDirection = "row",
  isFlexWrap,
  ...rest
}) => {
  return (
    <ElTableCell {...rest} data-alignment={alignment}>
      <ElTableCellContent data-flex-direction={flexDirection} isFlexWrap={isFlexWrap} >
        {children}
      </ElTableCellContent>
    </ElTableCell>
  );
};
