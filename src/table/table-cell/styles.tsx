import { styled } from "styled-components";

interface ITableCellConfiguration {
  width?: string
  minWidth?: string
  maxWidth?: string
  narrowLabel?: string
}

export const ElTableCell = styled.td<ITableCellConfiguration>`
  width: ${({ width }) => width || "auto"};
  min-width: ${({ minWidth }) => minWidth || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  gap: var(--spacing-spacing-1);
  flex: auto;
  vertical-align: middle;

  &[data-alignment='left']{
    text-align: left;
  }
  &[data-alignment='center']{
    text-align: center;
  }
  &[data-alignment='right']{
    text-align: right;
  }
`;
export const ElTableCellContent = styled.div<ITableCellConfiguration>`
  width: 100%;
  padding: var(--spacing-2);
  gap: var(--spacing-spacing-1);
  color: var(--text-secondary);
  font-family: var(--font-family);
  font-size: var(--size-2xs);
  font-style: normal;
  line-height: var(--line-height-2xs);
  letter-spacing: var(--letter-spacing-2xs);
  min-height: 40px;
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
