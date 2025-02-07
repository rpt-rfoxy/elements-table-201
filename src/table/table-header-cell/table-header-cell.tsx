import React, { FC, ReactNode, ThHTMLAttributes } from "react";
import { ElTableHeaderCell, ElTableHeaderCellContent } from "./styles";


export interface ITableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  alignment?: "left" | "center" | "right"
  width?: string
  minWidth?: string
  maxWidth?: string
  flexDirection?: "column" | "row"
  isFlexWrap?: boolean
}

export const TableHeaderCell: FC<ITableHeaderProps> = ({
  children,
  alignment = "left",
  flexDirection = "row",
  isFlexWrap,
  ...rest
}) => {
  return (
    <ElTableHeaderCell {...rest} data-alignment={alignment} >
      <ElTableHeaderCellContent data-flex-direction={flexDirection} isFlexWrap={isFlexWrap} >
        {children}
      </ElTableHeaderCellContent>
    </ElTableHeaderCell>
  );
};
