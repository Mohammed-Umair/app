import React from "react";
import "./Books.css";
import { useDispatch, useSelector } from "react-redux";
const BookDetails = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state) => state.BookReducer.selectedBooks[0]
  );
  return (
    <div className="mainDetailpage">

    <div className="box1">
      <div className="card-detail">
        <img className="Detailimg" src={selectedItems.cover_image} alt="" />
        <h3 className="cardText">
          Title:{selectedItems.title.substr(0, 20) + "..."}
        </h3>
        <h4 className="cardText">Release Date:{selectedItems.releaseDate}</h4>
        <h4 className="cardText">Pages:{selectedItems.pages}</h4>

        <div className="btn">
          <div className="Add-btn">
            <button
              className="btn-grad"
              onClick={() =>
                dispatch({ type: "Add-Cart", data: selectedItems })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="box2">
        <p>
          {" "}
          <b> Description:</b>
          {selectedItems.desc}
        </p>
      </div>
    </div>
                </div>
  );
};

export default BookDetails;
