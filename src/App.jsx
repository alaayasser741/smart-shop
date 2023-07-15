/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Product';
import Footer from './Components/Footer/Footer';
import SingleProduct from './Components/Shared/SingleProduct/SingleProduct';
import Cart from './Components/Cart/Cart';
import Login from './Components/Register/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
