import styled from "styled-components";
import { flexbox, layout, space } from "styled-system";

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  ${flexbox}
  ${layout}
  ${space}
`;

Row.defaultProps = {
  alignItems: "center",
  flexDirection: "row",
};

export default Row;
