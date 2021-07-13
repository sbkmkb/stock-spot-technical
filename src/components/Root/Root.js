import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import styled from "styled-components";

import { Column, Image, Modal, Row, Show } from "#components/shared";
import movieNight from "#root/assets/movieNight.svg";

import Search from "./Search";
import MovieDetails from "./MovieDetails";
import { StringParam, useQueryParam } from "use-query-params";

const BackButton = styled(BsChevronLeft)`
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    cursor: pointer;

    & > path {
      transition: fill 0.15s ease-out;
      fill: ${(props) => props.theme.colors.base40};
    }
  }
`;

const Wrapper = styled(Row)`
  min-height: 100%;
  overflow: auto;
  width: 100%;
`;

const Root = () => {
  const [selectedMovieId, setSelectedMovieId] = useQueryParam("i", StringParam);

  return (
    <Column alignItems="center">
      <Image src={movieNight} maxHeight="280px" maxWidth="280px" mb={6} mt={7} />
      <Wrapper alignItems={["center"]} flexDirection={["column", null, null, "row"]} justifyContent={["center"]}>
        <Search />
        {selectedMovieId ? (
          <>
            <Show breakpoints={[false, false, false, true]} alignSelf="flex-start" maxWidth="720px" width="100%">
              <MovieDetails p={6} />
            </Show>
            <Show breakpoints={[true, true, true, false]} alignSelf="flex-start" maxWidth="720px" width="100%">
              <Modal
                closeButton={<BackButton data-testid="movie-modal-back-button" />}
                onClose={() => setSelectedMovieId("")}
              >
                <MovieDetails mt={6} />
              </Modal>
            </Show>
          </>
        ) : null}
      </Wrapper>
    </Column>
  );
};

export default Root;
