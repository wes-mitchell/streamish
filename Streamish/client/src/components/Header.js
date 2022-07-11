import React from "react";
import { Link } from "react-router-dom";

const Header = ({isLoggedIn}) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        StreamISH
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/videos/add" className="nav-link">
            New Video
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={isLoggedIn = null} to="/login" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;