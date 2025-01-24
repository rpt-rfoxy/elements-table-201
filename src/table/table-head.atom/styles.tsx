import { styled } from "styled-components";
import { isNarrow } from "../table/styles";

export const ElTableHead = styled.thead`
  width: 100%;
  min-height: 40px;
  border-bottom: 1px solid var(--outline-default);
  background: var(--fill-white);
  &[data-position="sticky"]{
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
  }
  ${isNarrow}{
    display: none;
  }
`;