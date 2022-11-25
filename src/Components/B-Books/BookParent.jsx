import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookChild from "./BookChild";
import "./Books.css";
import { BookItems } from "../../data/products";

const BookParent = ({ search }) => {
  console.log("BookItems", BookItems);
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const stateProducts = useSelector((state) => state.BookReducer.books);
  // const getAllData = async () => {
  //   const allBooks = await axios.get("http://localhost:3030/");
  //   // console.log("Check books", allBooks.data);
  //   dispatch({ type: "Add-Book", data: allBooks.data });
  //   setBooks(allBooks.data);
  // };

  // useEffect(() => {
  //   getAllData();
  // }, []);

  useEffect(() => {
    dispatch({ type: "Add-Book", data: BookItems });
    setBooks(stateProducts);
  }, [stateProducts]);
  console.log(stateProducts, "stateProducts");
  console.log(books, "books");

  useEffect(() => {
    const filtered = stateProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setBooks(filtered);
  }, [search]);
  return (
    <div>
      <div className="parent">
        {books.map((item ,index) => {
          // console.log("map==>", item);
          return <BookChild key={index} item={item} />;
        })}
      </div>
      <div className="Footer">
        <h6>All Right reserved by Md Umair</h6>
      </div>
    </div>
  );
};

export default BookParent;
