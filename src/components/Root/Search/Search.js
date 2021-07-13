import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";

import { Column } from "#components/shared";
import useMovieApi from "#root/hooks/useMovieApi";

import MovieList from "./MovieList";
import Pager from "./Pager";
import SearchBar from "./SearchBar";

const Wrapper = styled(Column)`
  align-items: center;
  min-height: 100%;
  width: 100%;
`;

const Search = () => {
  const [movieId] = useQueryParam("i", StringParam);
  const [searchParam] = useQueryParam("s", StringParam);
  const [page = 1, setPage] = useQueryParam("page", NumberParam);
  const { data, errorMessage, status } = useMovieApi({ s: searchParam, page }, [searchParam, page]);

  const displayEnums = {
    LIST: searchParam && !movieId,
    LIST_AND_DETAILS: searchParam && movieId,
  };

  return (
    <Wrapper
      alignSelf="flex-start"
      p={[6, null, 4]}
      maxWidth={["100%", null, null, displayEnums.LIST_AND_DETAILS ? "280px" : "100%"]}
      minWidth="280px"
      mb={[null, null, displayEnums.LIST ? 4 : null]}
    >
      <SearchBar maxWidth="400px" />
      {status.loading ? (
        <Column maxWidth="400px" minHeight="570px" width="100%">
          <Skeleton height={52} count={10} />
        </Column>
      ) : null}
      {status.errored ? <div>{errorMessage}</div> : null}
      {status.success ? (
        <MovieList maxWidth="400px" height="570px" movieList={data.Search} overflowY="auto" p={2} />
      ) : null}
      {!status.errored ? (
        <Pager
          maxWidth="400px"
          py={2}
          page={page}
          setPage={setPage}
          totalResults={data ? parseInt(data.totalResults, 10) : null}
        />
      ) : null}
    </Wrapper>
  );
};

export default Search;
