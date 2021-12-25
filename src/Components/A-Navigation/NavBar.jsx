import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = ({ setSearch }) => {
  const cartItems = useSelector((state) => state.BookReducer.cart);
  return (
    <div className="nav">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Link className="logo" to="/">
        <i className="fas fa-book"></i> <span> Books</span>
      </Link>
      <input
        className="search-bar"
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search Here..."
      />
      <button className="search-btn">Search</button>
      <Link className="cart-achor" to="/cart">
        <i className="fas fa-briefcase"></i>{" "}
        <span> Cart:{cartItems.length}</span>
      </Link>
    </div>
  );
};

export default NavBar;
