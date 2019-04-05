import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/about"
          className="nav-link"s
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/discover"
          className="nav-link"
        >
          Discover
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/search"
          className="nav-link"
        >
          Search
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
