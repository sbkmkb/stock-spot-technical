import axios from "axios";

const omdbApiUrl = process.env.OMDB_API_URL;

const generateQueryString = (queryObject) => {
  const queryString = Object.keys(queryObject)
    .map((key) => `&${key}=${queryObject[key]}`)
    .join("");
  return queryString;
};

export const fetchMovies = async (queryObject, options = {}) => {
  const queryString = generateQueryString(queryObject);
  const response = await axios.get(`${omdbApiUrl}${queryString}`, options);
  return response;
};
