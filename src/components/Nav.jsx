import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/" activeClassName="active">
        <div>Home</div>
      </NavLink>
      <NavLink to="/blog" activeClassName="active">
        <div>Blog</div>
      </NavLink>
    </div>
  );
}
