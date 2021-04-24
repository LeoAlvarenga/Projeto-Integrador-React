import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "http://api.themoviedb.org/3",
});

export default tmdbApi;