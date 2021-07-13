import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

import { WrapAll } from "#root/test/utils";

import Pager from "./Pager";

describe("Pager", () => {
  test("does not render when total results are null or less than 10", () => {
    const mockSetPage = jest.fn();

    const { rerender } = render(
      <WrapAll>
        <Pager page={1} setPage={mockSetPage} totalResults={null} />
      </WrapAll>
    );

    const { queryByTestId } = screen;
    const backButton = queryByTestId("pager-button-back");

    expect(backButton).not.toBeInTheDocument();

    rerender(
      <WrapAll>
        <Pager page={1} setPage={mockSetPage} totalResults={9} />
      </WrapAll>
    );

    expect(backButton).not.toBeInTheDocument();
  });

  test("backward paging works correctly", () => {
    const mockSetPage = jest.fn();

    render(
      <WrapAll>
        <Pager page={1} setPage={mockSetPage} totalResults={25} />
      </WrapAll>
    );

    const { getByTestId, getByText } = screen;
    const backButton = getByTestId("pager-button-back");
    const forwardButton = getByTestId("pager-button-forward");

    expect(getByText("Page 1")).toBeInTheDocument();
    expect(getByText("25 results")).toBeInTheDocument();

    userEvent.click(backButton);
    expect(mockSetPage).not.toHaveBeenCalled();

    userEvent.click(forwardButton);
    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  test("forward paging works correctly", () => {
    const mockSetPage = jest.fn();

    render(
      <WrapAll>
        <Pager page={5} setPage={mockSetPage} totalResults={45} />
      </WrapAll>
    );

    const { getByTestId, getByText } = screen;
    const backButton = getByTestId("pager-button-back");
    const forwardButton = getByTestId("pager-button-forward");

    expect(getByText("Page 5")).toBeInTheDocument();
    expect(getByText("45 results")).toBeInTheDocument();

    userEvent.click(forwardButton);
    waitFor(expect(mockSetPage).not.toHaveBeenCalled());

    userEvent.click(backButton);
    expect(mockSetPage).toHaveBeenCalledWith(4);
  });
});
