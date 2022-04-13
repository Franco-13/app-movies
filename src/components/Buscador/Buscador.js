import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import { addMovieFavorite, getMovies } from "../../actions/index.js";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleAddMovie(el) {
    let find = this.props.pelisFav?.find((movie) => movie.id === el.imdbID);

    if (find === undefined) {
      this.props.addMovieFavorite({
        id: el.imdbID,
        titulo: el.Title,
      });
    } else {
      return;
    }
  }

  render() {
    const { title } = this.state;
    return (
      <section>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="searchBar">
            <label className="labelSearch" htmlFor="title">
              Película
            </label>
            <input
              className="inputSearch"
              type="text"
              id="title"
              autoComplete="off"
              placeholder="Título de la película"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button
              className="btnSearch"
              type="submit"
              onClick={() => this.props.getMovies(title)}
            >
              Buscar
            </button>
          </div>
        </form>
        <div className="containerList">
          <ul className="moviesList">
            {this.props.busqueda &&
              this.props.busqueda?.map((el, i) => (
                <div key={el.imdbID + i} className="movieListItem">
                  <li>
                    <h4>{el.Title}</h4>
                  </li>
                  <div className="btnContainer">
                    {this.props.pelisFav?.filter(
                      (movie) => movie.id === el.imdbID
                    )?.length ? (
                      <button className="btnAdd btnDisabled" disabled>
                        Agregar a Favoritas
                      </button>
                    ) : (
                      <button
                        className="btnAdd"
                        onClick={() => this.handleAddMovie(el)}
                      >
                        Agregar a Favoritas
                      </button>
                    )}
                    <Link
                      to={`/movie/${el.imdbID}`}
                      className="detailsMovieLink"
                    >
                      <button className="btnAdd">Ver detalles</button>
                    </Link>
                  </div>
                </div>
              ))}
          </ul>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  busqueda: state.moviesLoaded,
  pelisFav: state.moviesFavourites,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
};

//export default Buscador;
export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
