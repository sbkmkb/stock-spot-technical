import { Link as OriginalLink } from "react-router-dom";
import styled from "styled-components";
import { space } from "styled-system";

const StyledLink = styled(OriginalLink)`
  ${space}
`;

const Link = ({ children, leftIcon, rightIcon, ...props }) => {
  return (
    <Wrapper>
      {leftIcon}
      <StyledLink {...props}>{children}</StyledLink>
      {rightIcon}
    </Wrapper>
  );
};

export default Link;
