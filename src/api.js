import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const api_key = "ed0cbd8e7856964af8c3accbb4a81e70";
const language = "en-US";

const params = {
  api_key,
  language
};

export const movieApi = {
  popular: () => api.get("/tv/popular", { params }),
  topRated: () => api.get("/tv/top_rated", { params }),
  onTheAir: () => api.get("/tv/on_the_air", { params }),
  movieDetail: tv_id => api.get(`/tv/${tv_id}`, { params }),
  searchMovie: query =>
    api.get(`/search/movie`, {
      params: { ...params, query }
    })
};
