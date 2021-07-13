import styled from "styled-components";
import { flexbox, layout, space, style } from "styled-system";

const bp = style({
  prop: "bp",
  alias: "breakpoints",
  cssProperty: "display",
  transformValue: (n) => (n ? "block" : "none"),
});

const Show = styled.div`
  ${bp}
  ${flexbox}
  ${layout}
  ${space}
`;

export default Show;
