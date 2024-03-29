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
        {cartItems.length === 0 ? (
          <div className="cardButtonBox">
            <div className="back-btn">
              <Link to="/app" className="button-underline">
                <button className="btn-grad">Shop Items</button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {cartItems.map((item) => {
              return (
                <div className="card">
                  <img className="img" src={item.cover_image} alt="" />
                  <div className="card-text-Deatil">

                  <h3>Title:{item.title.substr(0, 20) + "..."}</h3>
                  <h4>Release Date:{item.releaseDate}</h4>
                  <h4>Pages:{item.pages}</h4>
                  {/* <h5>Price:${item.price}</h5> */}
                  </div>

                  <div className="card-btn">
                    <div className="Remove-btn">
                      <button
                        className="btn-grad"
                        onClick={() =>
                          dispatch({ type: "Remove-Product", data: item })
                        }
                      >
                        Remove
                      </button>
                    </div>
                    <div className="View-btn">
                      <Link to="/app/details"  className="button-underline">
                        <button
                          className="btn-grad"
                          onClick={() =>
                            dispatch({ type: "Selected-Products", data: item })
                          }
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
