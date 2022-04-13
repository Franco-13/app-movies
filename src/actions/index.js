import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIES_DETAILS,
  REMOVE_MOVIE_FAVORITE,
  LOADING,
} from "./actionTypes";

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeMovieFavorite(index) {
  return { type: REMOVE_MOVIE_FAVORITE, payload: index };
}

export function getMoviesDetails(id) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=19bd072b&i=${id}`
    );
    const json = await response.json();
    dispatch({ type: GET_MOVIES_DETAILS, payload: json });
  };
}

export function getMovies(titulo) {
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=19bd072b&s=${titulo}`
    );
    const json = await response.json();
    dispatch({ type: GET_MOVIES, payload: json });
  };
}
