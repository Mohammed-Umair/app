import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from '../A-Navigation/NavBar';
import BookDetails from '../B-Books/BookDetails';
import BookParent from '../B-Books/BookParent';
import Cart from '../B-Books/Cart';
const Landing = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<BookParent/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/details" element={<BookDetails/>} />
            </Routes>

            </BrowserRouter>
        </div>
    );
};

export default Landing;