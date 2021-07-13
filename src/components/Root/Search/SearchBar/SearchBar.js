import React, { useState } from "react";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";

import { TextField } from "#components/shared";

const PAGE_RESET_NUMBER = 1;

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setSearchParam] = useQueryParam("s", StringParam);
  const [, setPageParam] = useQueryParam("page", NumberParam);

  return (
    <TextField
      {...props}
      autoFocus
      mb={3}
      onKeyDown={(evt) => {
        if (evt.key === "Enter") {
          setSearchParam(searchTerm);
          setPageParam(PAGE_RESET_NUMBER);
        }
      }}
      onChange={(evt) => {
        setSearchTerm(evt.currentTarget.value);
      }}
      placeholder="Search movies"
      value={searchTerm}
    />
  );
};

export default SearchBar;
