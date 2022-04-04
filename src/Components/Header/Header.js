import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link className="routs" to="/home">
          HOME
        </Link>
        <Link className="routs" to="/reviews">
          REVIEWS
        </Link>
        <Link className="routs" to="/dashboard">
          DASHBOARD
        </Link>
        <Link className="routs" to="/blogs">
          BLOGS
        </Link>
        <Link className="routs" to="/about">
          ABOUT
        </Link>
      </nav>
    </div>
  );
};

export default Header;
