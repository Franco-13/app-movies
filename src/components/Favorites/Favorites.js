import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions/index.js";

export class ConnectedList extends Component {
  render() {
    return (
      <section>
        <h2>Películas Favoritas</h2>
        <div className="containerList">
          <ul className="moviesList">
            {/* Aqui deberias poner tu lista de peliculas! */}
            {this.props.pelisFav &&
              this.props.pelisFav.map((el, i) => (
                <div key={el.id + i} className="movieListItem">
                  <li className="detailsMovieLink">
                    <h4>{el.titulo}</h4>
                  </li>
                  <div className="btnContainer">
                    <button
                      className="btnAdd"
                      onClick={() => this.props.removeMovieFavorite(i)}
                    >
                      Quitar Pelicula
                    </button>
                    <Link to={`/movie/${el.id}`} className="detailsMovieLink">
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
  pelisFav: state.moviesFavourites,
});

const mapDispatchToProps = (dispatch) => ({
  removeMovieFavorite: (movie) => dispatch(removeMovieFavorite(movie)),
});

//export default (ConnectedList);
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
