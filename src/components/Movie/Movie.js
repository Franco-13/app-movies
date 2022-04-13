import React from "react";
import { connect } from "react-redux";
import { getMoviesDetails } from "../../actions/index.js";
import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getDetails(movieId);
  }

  render() {
    console.log(this.props.details);
    return !this.props.loading ? (
      <div className="loading">CARGANDO</div>
    ) : (
      <section>
        <div className="containerMovie">
          <h1 className="title">
            {`${this.props.details.Title} - ${this.props.details.Year}`}{" "}
          </h1>
          <div className="detailsAndImg">
            <ul>
              <li>
                <p className="pDetail">
                  <b>Rated:</b> {this.props.details.Rated}
                </p>
              </li>
              <li>
                <p className="pDetail">
                  <b>Runtime:</b> {this.props.details.Runtime}
                </p>
              </li>
              <li>
                <p className="pDetail">
                  <b>Genre:</b> {this.props.details.Genre}
                </p>
              </li>
              <li>
                <p className="pDetail">
                  <b>Actors:</b> {this.props.details.Actors}
                </p>
              </li>
              <li>
                <p className="pDetail">
                  <b>Director:</b> {this.props.details.Director}
                </p>
              </li>
              <li>
                <p className="pDetail">
                  <b>Language:</b> {this.props.details.Language}
                </p>
              </li>
              <li>
                <p className="pDetail">
                  <b>Country:</b> {this.props.details.Country}
                </p>
              </li>
              <li>
                <p className="pDetail">
                  <b>Awards:</b> {this.props.details.Awards}
                </p>
              </li>
              <li>
                <p className="pDetail">
                  <b>Plot:</b> {this.props.details.Plot}
                </p>
              </li>
            </ul>
            <img
              className="imageMovie"
              src={this.props.details.Poster}
              alt={this.props.details.Title}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  details: state.movieDetail,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getDetails: (id) => dispatch(getMoviesDetails(id)),
});

//export default (Movie);
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
