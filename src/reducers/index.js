import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIES_DETAILS,
  REMOVE_MOVIE_FAVORITE,
  LOADING,
} from "../actions/actionTypes";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: [...state.moviesFavourites, action.payload],
      };
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (el, i) => i !== action.payload
        ),
      };
    case GET_MOVIES_DETAILS:
      return {
        ...state,
        loading: true,
        movieDetail: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default rootReducer;
