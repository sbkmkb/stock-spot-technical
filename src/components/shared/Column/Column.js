import styled from "styled-components";
import { flexbox, layout, space } from "styled-system";

const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  ${flexbox}
  ${layout}
  ${space}
`;

Column.defaultProps = {
  flexDirection: "column",
};

export default Column;
