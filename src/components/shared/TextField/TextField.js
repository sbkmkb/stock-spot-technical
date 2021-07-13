import styled from "styled-components";
import { layout, space } from "styled-system";

const TextField = styled.input`
  border: 1.5px solid;
  border-color: ${(props) => props.theme.colors.base40};
  border-radius: ${(props) => props.theme.radii[2]};
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  padding: 8px 12px;
  transition: border-color 0.25s ease-in-out;
  width: 100%;
  ${layout}
  ${space}

  ::placeholder {
    font-family: inherit;
    font-size: inherit;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primary40};
  }
`;

TextField.defaultProps = {
  maxWidth: "320px",
};

export default TextField;
