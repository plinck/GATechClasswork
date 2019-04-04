import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact/learn"
          className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
