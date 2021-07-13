import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { fetchMovies } from "#root/api/movie";

export const statusEnums = {
  CANCELLED: "cancelled",
  LOADING: "loading",
  SUCCESS: "success",
  ERRORED: "errored",
};

const useMovieList = (queryParams, dependencies) => {
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState();
  const cancelToken = useRef();

  const fetchMovieList = async (queryObject) => {
    cancelToken.current = axios.CancelToken.source();

    try {
      setStatus(statusEnums.LOADING);
      const response = await fetchMovies(queryObject, {
        cancelToken: cancelToken.current.token,
      });
      const { data } = response;

      if (data.Response === "True") {
        setData(data);
        setStatus(statusEnums.SUCCESS);
      } else if (data.Response === "False") {
        setErrorMessage(data.Error);
        setStatus(statusEnums.ERRORED);
      }
    } catch (error) {
      if (error.message === statusEnums.CANCELLED) return;
      setErrorMessage("Oops, something went wrong. Please reload the page and try again.");
      setStatus(statusEnums.ERRORED);
    }
  };

  useEffect(() => {
    const hasQueryParams = Object.values(queryParams).every((param) => param);
    if (hasQueryParams) fetchMovieList(queryParams);

    return () => {
      if (cancelToken.current) cancelToken.current.cancel(statusEnums.CANCELLED);
    };
  }, [...dependencies]);

  const loading = status === statusEnums.LOADING;
  const success = status === statusEnums.SUCCESS;
  const errored = status === statusEnums.ERRORED;

  return {
    data,
    errorMessage,
    status: {
      errored,
      loading,
      success,
    },
  };
};

export default useMovieList;
