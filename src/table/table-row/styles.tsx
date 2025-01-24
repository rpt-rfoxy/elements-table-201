import { styled } from "styled-components";
import { isNarrow } from "../table/styles";

export const ElTableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid var(--outline-default);
  background: var(--fill-white);
  flex: 1;
  ${isNarrow}{
    display: flex;
    flex-wrap: wrap;
  }
`;
