import React, { useEffect } from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  useEffect(() => {
    const moviesFav = localStorage.getItem("moviesFav")
      ? JSON.parse(localStorage.getItem("moviesFav"))
      : [];
    if (!moviesFav.length) {
      localStorage.setItem("moviesFav", JSON.stringify(moviesFav));
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Buscador} />
      <Route path="/favs" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
    </div>
  );
}

export default App;
