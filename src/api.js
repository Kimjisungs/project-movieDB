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

export const tvApi = {
  popular: () => api.get("/tv/popular", { params }),
  topRated: () => api.get("/tv/top_rated", { params }),
  onTheAir: () => api.get("/tv/on_the_air", { params }),
  tvDetail: tv_id => api.get(`/tv/${tv_id}`, { params }),
  searchTv: query =>
    api.get(`/search/tv`, {
      params: { ...params, query: encodeURIComponent(query) }
    })
};

export const movieApi = {
  nowPlaying: () => api.get("/movie/now_playing", { params }),
  popular: () => api.get("/movie/popular", { params }),
  topRated: () => api.get("/movie/top_rated", { params }),
  movieDetail: movie_id => api.get(`/tv/${movie_id}`, { params }),
  searchMovie: query =>
    api.get(`/search/movie`, {
      params: { ...params, query: encodeURIComponent(query) }
    })
};

export const peopleApi = {
  popular: () => api.get("/person/popular", { params }),
  peopleDetail: people_id => api.get(`/person/${people_id}`, { params }),
  peoplehMovie: query =>
    api.get(`/search/person`, {
      params: { ...params, query }
    })
};
