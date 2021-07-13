import React from "react";
import { BsX } from "react-icons/bs";
import styled from "styled-components";

import { Column } from "#components/shared";

const CloseButton = styled(BsX)`
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    cursor: pointer;

    & > path {
      transition: fill 0.15s ease-out;
      fill: ${(props) => props.theme.colors.base40};
    }
  }
`;

const CloseButtonWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ModalChildrenWrapper = styled(Column)`
  margin-top: 28px;
`;

const ModalPanel = styled(Column).attrs({ role: "dialog" })`
  background-color: white;
  box-shadow: 0px 2px 6px #cccccc;
  height: 100%;
  overscroll-behavior: contain;
  width: 100%;
`;

const OverLay = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  bottom: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  left: 0;
  overscroll-behavior: contain;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
`;

const Modal = ({ children, closeButton = <CloseButton />, onClose, ...props }) => {
  return (
    <OverLay>
      <ModalPanel
        p={6}
        maxHeight={["100%", null, "480px"]}
        maxWidth={["100%", null, "480px"]}
        overflowY={["auto", null, null, "initial"]}
        {...props}
      >
        <CloseButtonWrapper onClick={onClose}>{closeButton}</CloseButtonWrapper>
        <ModalChildrenWrapper>{children}</ModalChildrenWrapper>
      </ModalPanel>
    </OverLay>
  );
};

export default Modal;
