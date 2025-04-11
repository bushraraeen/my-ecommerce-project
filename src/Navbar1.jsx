import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Data from './Data';
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar1 = ({ setData, cart = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const filteredData = Data.filter((product) => product.category === category);
    setData(filteredData);
  };

  const filterByPrice = (price) => {
    const filteredData = Data.filter((product) => product.price >= price);
    setData(filteredData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  ;

  return (
    <>
      <header className="sticky-top">
        {/* Navbar with Home, Cart, Logout */}
        <div className="nav-bar">
          <Link to="/" className="brand" onClick={() => setData(Data)}>Home</Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search product"
            />
          </form>

          <Link to="/cart" className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartPlusFill style={{ fontSize: '1.5rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </button>
          </Link>

          <Link to="/logout" className="btn btn-outline-danger">Logout</Link>
        </div>

        {/* Filters only visible on home page */}
        {location.pathname === '/' && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by{" -> "}</div>
            <div onClick={() => setData(Data)} className="items">No Filter</div>
            <div onClick={() => filterByCategory('Tshirt')} className="items">Tshirt</div>
            <div onClick={() => filterByCategory('Tops')} className="items">Tops</div>
            <div onClick={() => filterByCategory('Men-shirts')} className="items">Men-shirts</div>
            <div onClick={() => filterByPrice(392)} className="items">{">="} 392</div>
            <div onClick={() => filterByPrice(492)} className="items">{">="} 492</div>
            <div onClick={() => filterByPrice(592)} className="items">{">="} 592</div>
           
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar1;
