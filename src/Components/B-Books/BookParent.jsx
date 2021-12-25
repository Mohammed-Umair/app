import axios from "axios";
import React, { useEffect, useState } from "react";
import BookChild from "./BookChild";
import "./Books.css";
const BookParent = () => {
  const [books, setBooks] = useState([]);
  const getAllData = async () => {
    const allBooks = await axios.get("products.json");
    setBooks(allBooks.data);
    console.log("Check books", allBooks.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <div className="parent">
        {books.map((item) => {
          console.log("map==>", item);
          return <BookChild item={item} />;
        })}
      </div>
    </div>
  );
};

export default BookParent;
