import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";

import defaultFallbackImage from "#root/assets/defaultFallbackImage.png";

const Img = styled.img`
  ${layout}
  ${space}
`;

const Image = ({ fallbackImage = defaultFallbackImage, ...props }) => {
  const onError = (evt) => {
    evt.target.src = fallbackImage;
  };

  return <Img {...props} onError={onError} />;
};

export default Image;
