import { styled } from "styled-components";

export const isNarrow = '@media only screen and (max-width: 1024px)'
export const ElTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  cursor: pointer;
  padding: 0.75rem 0.5rem;
  order: 12;
  ${isNarrow}{
    display: flex;
  }
`;
