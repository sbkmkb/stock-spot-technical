import PropTypes from "prop-types";
import React from "react";
import { BsStar } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { useQueryParam, StringParam } from "use-query-params";

import { Column, Row, Text } from "#components/shared";

const MovieCard = styled(Row)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  height: 48px;
  position: relative;
  transition: background-color 0.1s ease-out;
  overflow: hidden;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary90};
    cursor: pointer;
    height: unset;
    min-height: 48px;
    overflow: visible;
  }
`;

const MovieListWrapper = styled(Column)`
  overflow-y: auto;
  width: 100%;
`;

const MovieList = ({ movieList, ...props }) => {
  const [selectedMovieId, setSelectedMovieId] = useQueryParam("i", StringParam);

  return (
    <MovieListWrapper {...props}>
      {movieList ? (
        movieList.map((movie, index) => {
          return (
            <MovieCard
              data-testid={`${movie.Title.split(" ").join("-")}-test-id`}
              key={`${movie.imdbID}_${index}`}
              justifyContent="space-between"
              mb={3}
              onClick={() => setSelectedMovieId(movie.imdbID)}
              p={2}
            >
              <Column alignSelf="flex-start">
                <Text>{movie.Title}</Text>
              </Column>
              <Column alignItems="center" alignSelf="flex-end">
                {selectedMovieId && selectedMovieId === movie.imdbID ? (
                  <BsStar color="#6C63FF" data-testid="star-selected-id" />
                ) : null}
                <Text fontSize={0} mt={2}>
                  {movie.Year}
                </Text>
              </Column>
            </MovieCard>
          );
        })
      ) : (
        <Skeleton count={40} />
      )}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
