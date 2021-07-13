import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import * as api from "#root/api/movie";

import useMovieApi from "./useMovieApi";

const mockMovieData = {
  Response: "True",
  Actors: "Sky Anderson, Janet Christensen-Obrien, Avis Hamlin, Johnathan Lamount",
  Director: "Janet Christensen-Obrien",
  Genre: "Documentary, Biography, Comedy",
  Language: "English",
  Plot: "This is a story about Internet dating and the issues that people bring up when they are trying to make conversation and get to know each other. One woman has the topic of one of her private...",
  Poster: "poster",
  Runtime: "54 min",
  Title: "Fraud in the Inception: Who killed Robert Hamlin and Dorothy Grega",
  Year: "2013",
  imdbID: "tt2278951",
};
const mockMovieId = "tt2278951";
const mockQuery = { i: mockMovieId };

describe("useMovieApi Hook", () => {
  const spy = jest.spyOn(api, "fetchMovies");
  test("fetches data and returns correct status", async () => {
    spy.mockResolvedValue({ data: mockMovieData });
    let queryDeps = "";
    const { result, rerender } = renderHook(() => useMovieApi(mockQuery, [queryDeps]));
    expect(spy).toHaveBeenCalled();
    queryDeps = mockMovieId;
    rerender();
    expect(result.current.status.loading).toBe(true);
    await waitFor(async () => expect(result.current.data).toMatchObject(mockMovieData));
    expect(result.current.status.loading).toBe(false);
    expect(result.current.status.errored).toBe(false);
    expect(result.current.status.success).toBe(true);
  });

  test("error state", async () => {
    spy.mockRejectedValue("error");
    const { result } = renderHook(() => useMovieApi(mockQuery, []));
    expect(result.current.status.loading).toBe(true);
    await waitFor(async () =>
      expect(result.current.errorMessage).toBe("Oops, something went wrong. Please reload the page and try again.")
    );
    expect(result.current.status.loading).toBe(false);
    expect(result.current.status.errored).toBe(true);
    expect(result.current.status.success).toBe(false);
  });
});
