import React from "react";
import { Link } from "react-router-dom";
import "./Books.css";
import { useDispatch } from "react-redux";

const BookChild = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img className="img" src={item.cover_image} alt="" />
      <div className="card-text-Deatil">

      <h3 className="cardText">Title:{item.title.substr(0, 20) + "..."}</h3>
      <h4 className="cardText">Release Date:{item.releaseDate}</h4>
      <h4 className="cardText">Pages:{item.pages}</h4>
      </div>
      {/* <h5>Price:${item.price}</h5> */}
      <div className="btn">
        <div className="Add-btn">
          <button
            className="btn-grad"
            onClick={() => dispatch({ type: "Add-Cart", data: item })}
          >
            Add To Cart
          </button>
        </div>
        <div className="View-btn">
          <Link to="/app/details">
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
};

export default BookChild;
