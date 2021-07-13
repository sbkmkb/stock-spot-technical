import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";

const Text = styled.div`
  color: ${(props) => props.theme.colors.base};
  font-size: ${(props) => props.theme.fontSizes.m};
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

export default Text;
