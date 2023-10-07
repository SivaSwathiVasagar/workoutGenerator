import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/workoutGenerator/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/workoutGenerator/blog">
        <div>Blog</div>
      </NavLink>
      <NavLink to="/workoutGenerator/about">
        <div>About</div>
      </NavLink>
    </div>
  );
}
