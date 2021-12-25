import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../A-Navigation/NavBar";
import BookDetails from "../B-Books/BookDetails";
import BookParent from "../B-Books/BookParent";
import Cart from "../B-Books/Cart";
const Landing = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <BrowserRouter>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<BookParent search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
