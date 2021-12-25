import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Books.css";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.BookReducer.cart);
  console.log("check cartItems==>", cartItems);
  return (
    <div>
      <div className="parent">
        {cartItems.map((item) => {
          return (
            <div className="card">
              <img className="img" src={item.cover_image} alt="" />
              <h3>Title:{item.title.substr(0, 20) + "..."}</h3>
              <h4>Release Date:{item.releaseDate}</h4>
              <h4>Pages:{item.pages}</h4>
              <button
                onClick={() => dispatch({ type: "Remove-Product", data: item })}
              >
                Remove
              </button>
              <Link to="/details">
                <button onClick={() => dispatch({ type: "Selected-Products" ,data:item})}>
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
