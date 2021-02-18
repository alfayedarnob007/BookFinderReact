import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" style={{ marginLeft: 20 }}>
            Book Finder
          </Link>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
            style={{ marginRight: 20 }}
          >
            <li>
              <a href="#!">Top Books</a>
            </li>
            <li>
              <a href="#!">Trending Books</a>
            </li>
            <li>
              <a href="#!">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
