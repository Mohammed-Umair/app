import React from "react";

const BookChild = ({ item }) => {
  return (
    <div className="card">
      <img className="img" src={item.cover_image} alt="" />
      <h3>Title:{item.title.substr(0, 20) + "..."}</h3>
      <h4>Release Date:{item.releaseDate}</h4>
      <h4>Pages:{item.pages}</h4>
      <div className="btn">
        <button className="btn-grad">Add To Cart</button>
        <button className="btn-grad">View Details</button>
      </div>
    </div>
  );
};

export default BookChild;
