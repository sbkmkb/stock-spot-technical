import styled from "styled-components";
import { color, layout, space } from "styled-system";

const Button = styled.button`
  border: 0;
  ${color}
  ${layout}
  ${space}

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
