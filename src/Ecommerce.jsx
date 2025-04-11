import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Product from './Product';
import ProductDetail from './ProductDetail';
import Searchitem from './Searchitem';
import Cart from './Cart';
import Login from './Login';
import Logout from './Logout';
import Data from './Data';
import './ecart.css';

const Ecommerce = () => {
    const [data, setData] = useState([...Data]); // ✅ will work if Data is an array

  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    
    window.addEventListener('storage', handleStorageChange);
    
  
    const checkToken = setInterval(() => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    }, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(checkToken);
    };
  }, []);

  return (
    <Router>
      {isAuthenticated && <Navbar1 cart={cart} setData={setData} />}
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login onLogin={() => setIsAuthenticated(true)} /> : <Navigate to="/" />} />
        <Route path="/" element={isAuthenticated ? <Product data={data} cart={cart} setCart={setCart} /> : <Navigate to="/login" />} />
        <Route path="/product/:id" element={isAuthenticated ? <ProductDetail data={data} cart={cart} setCart={setCart} /> : <Navigate to="/login" />} />
        <Route path="/search/:term" element={isAuthenticated ? <Searchitem data={data} cart={cart} setCart={setCart} /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isAuthenticated ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/login" />} />
        <Route path="/logout" element={<Logout onLogout={() => setIsAuthenticated(false)} />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default Ecommerce;