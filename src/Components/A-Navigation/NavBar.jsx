import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Link to="/">Books</Link>
      <input type="search" />
      <button>Search</button>
      <Link to="/cart">Cart:</Link>
    </div>
  );
};

export default NavBar;
