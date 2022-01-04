import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookChild from "./BookChild";
import "./Books.css";
const BookParent = ({ search }) => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const stateProducts = useSelector((state) => state.BookReducer.books);
  const getAllData = async () => {
    const allBooks = await axios.get("http://localhost:3030/");
    console.log("Check books", allBooks.data);
    // dispatch({ type: "Add-Book", data: allBooks.data});
    setBooks(allBooks.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  useEffect(() => {
    const filtered = stateProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setBooks(filtered);
  }, [search]);
  return (
    <div>
      <div className="parent">
        {books.map((item) => {
          // console.log("map==>", item);
          return <BookChild item={item} />;
        })}
      </div>
    </div>
  );
};

export default BookParent;
