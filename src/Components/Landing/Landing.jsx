import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../A-Navigation/NavBar";
import NavBarHeader from "../A-Navigation/Navigation";
import BookDetails from "../B-Books/BookDetails";
import BookParent from "../B-Books/BookParent";
import Cart from "../B-Books/Cart";
const Landing = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar setSearch={setSearch} /> */}
        <NavBarHeader setSearch={setSearch} />
        <Routes>
          <Route path="/app/" element={<BookParent search={search} />} />
          <Route path="/app/cart" element={<Cart />} />
          <Route path="/app/details" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
