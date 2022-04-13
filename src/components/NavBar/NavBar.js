import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logoHenry.png";

import "./Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navName">
        <span>Movies App</span>
        <img
          id="logoHenry"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <div>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favs">Favoritas</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
