import React from "react";
import styled from "styled-components";
import { StringParam, useQueryParam } from "use-query-params";

import { Column, Image, Row, Text } from "#components/shared";
import movieFallbackImage from "#root/assets/movieFallbackImage.png";
import useMovieApi from "#root/hooks/useMovieApi";
import Skeleton from "react-loading-skeleton";

const BoldText = styled.div`
  display: inline-block;
  font-weight: 700;
`;

const MovieTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  margin-bottom: ${(props) => props.theme.space[4]};
  margin-top: 0;
`;

const Wrapper = styled(Row)`
  max-width: 720px;
  width: 100%;
`;

const BodyText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.m};
  margin-bottom: ${(props) => props.theme.space[3]};
  overflow-y: auto;
`;

const DetailsLabel = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.m};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const MovieDetails = (props) => {
  const [selectedMovieId] = useQueryParam("i", StringParam);
  const {
    data: selectedMovie,
    errorMessage,
    status,
  } = useMovieApi({ i: selectedMovieId, plot: "full" }, [selectedMovieId]);

  return (
    <Wrapper flexDirection={["column", null, "row"]} data-testid="movie-details" {...props}>
      {status.errored ? <div>{errorMessage}</div> : null}
      {status.success || status.loading ? (
        <>
          <Column alignSelf="flex-start" mb={[5, null, 0]} mr={[null, null, 6]} width="100%">
            <MovieTitle>{!status.loading ? selectedMovie.Title : <Skeleton />}</MovieTitle>
            <Text fontSize="s" mb={3}>
              {!status.loading ? selectedMovie.Genre : <Skeleton />}
            </Text>
            <BodyText maxHeight={[null, null, "220px"]}>
              {!status.loading ? selectedMovie.Plot : <Skeleton count={8} />}
            </BodyText>
            {!status.loading ? (
              <DetailsLabel>
                <BoldText>Language</BoldText>: {selectedMovie.Language}
              </DetailsLabel>
            ) : (
              <DetailsLabel>
                <Skeleton />
              </DetailsLabel>
            )}

            {!status.loading ? (
              <DetailsLabel>
                <BoldText>Director</BoldText>: {selectedMovie.Director}
              </DetailsLabel>
            ) : (
              <DetailsLabel>
                <Skeleton />
              </DetailsLabel>
            )}

            {!status.loading ? (
              <DetailsLabel>
                <BoldText>Actors</BoldText>: {selectedMovie.Actors}
              </DetailsLabel>
            ) : (
              <DetailsLabel>
                <Skeleton />
              </DetailsLabel>
            )}

            {!status.loading ? (
              <DetailsLabel>
                <BoldText>Duration</BoldText>: {selectedMovie.Runtime}
              </DetailsLabel>
            ) : (
              <DetailsLabel>
                <Skeleton />
              </DetailsLabel>
            )}
          </Column>
          <Column alignSelf={["center", null, null, "flex-start"]} mt={[0, null, 3]}>
            <Image
              alt={`${!status.loading ? selectedMovie.Title : null}_img`}
              fallbackImage={movieFallbackImage}
              minHeight={[null, null, "220px"]}
              maxWidth={[null, null, "240px"]}
              minWidth={["100%", null, "200px"]}
              src={!status.loading ? selectedMovie.Poster : movieFallbackImage}
              width="100%"
            />
          </Column>
        </>
      ) : null}
    </Wrapper>
  );
};

export default MovieDetails;
