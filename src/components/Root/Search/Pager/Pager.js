import PropTypes from "prop-types";
import React from "react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import styled from "styled-components";
import { position } from "styled-system";

import { Column, Row, Text } from "#components/shared";

const caretStyles = (props) => `
  height: 24px;
  width: 24px;

  &:hover {
    cursor: pointer;
    & > path {
      transition: fill 0.15s ease-out;
      fill: ${props.theme.colors.base40};
    }
  }
`;

const CaretLeft = styled(BsCaretLeft)`
  ${caretStyles}
`;

const CaretRight = styled(BsCaretRight)`
  ${caretStyles}
`;

const Wrapper = styled(Row)`
  width: 100%;
  ${position}
`;

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_FIRST_PAGE = 1;

const Pager = ({
  firstPage = DEFAULT_FIRST_PAGE,
  pageSize = DEFAULT_PAGE_SIZE,
  page: currentPage,
  setPage,
  totalResults,
  ...props
}) => {
  if (totalResults === null || totalResults < pageSize) return null;

  const lastPage = Math.ceil(totalResults / pageSize);
  const isFirstPage = currentPage === firstPage;
  const isLastPage = currentPage === lastPage;

  const pageBack = () => {
    if (!isFirstPage) {
      setPage(currentPage - 1);
    }
  };

  const pageForward = () => {
    if (!isLastPage) {
      setPage(currentPage + 1);
    }
  };

  return (
    <Wrapper justifyContent="space-between" {...props}>
      <CaretLeft data-testid="pager-button-back" onClick={pageBack} />
      <Column alignItems="center">
        <Text fontSize={1}>Page {currentPage}</Text>
        {totalResults ? <Text fontSize={1}>{totalResults} results</Text> : null}
      </Column>
      <CaretRight data-testid="pager-button-forward" onClick={pageForward} />
    </Wrapper>
  );
};

Pager.propTypes = {
  firstPage: PropTypes.number,
  pageSize: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  totalResults: PropTypes.number,
};

export default Pager;
