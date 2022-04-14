import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIES_DETAILS,
  REMOVE_MOVIE_FAVORITE,
  LOADING,
} from "./actionTypes";

export function addMovieFavorite(payload) {
  const moviesFavourites = JSON.parse(localStorage.getItem("moviesFav"));

  const find = moviesFavourites.find((movie) => movie.id === payload.id);

  if (!find) {
    moviesFavourites.push(payload);
  }

  localStorage.setItem("moviesFav", JSON.stringify(moviesFavourites));

  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeMovieFavorite(payload) {
  const moviesFavourites = JSON.parse(localStorage.getItem("moviesFav"));
  let index = moviesFavourites.findIndex((movie) => movie.id === payload.id);

  if (index !== -1) {
    moviesFavourites.splice(index, 1);
  }

  localStorage.setItem("moviesFav", JSON.stringify(moviesFavourites));
  return { type: REMOVE_MOVIE_FAVORITE, payload };
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
