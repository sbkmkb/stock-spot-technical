import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { layout, space } from "styled-system";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 0.5s linear infinite;
  display: inline-block;
  ${layout}
  ${space}
`;

export default Loader;
