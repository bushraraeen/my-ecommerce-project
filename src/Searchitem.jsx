import React from 'react';
import { useParams } from 'react-router-dom';

const Searchitem = ({ data, cart, setCart }) => {
  const { term } = useParams(); 


  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(term.toLowerCase())
  );

  const addToCart = (item) => {
    setCart([...cart, item]); 
  };

  return (
    <div className="container">
      <h2 className="text-center my-4"></h2>
      <div className="row">
        {filteredData.length > 0 ? (
          filteredData.map((Item) => (
            <div key={Item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src={Item.imgsrc} className="card-img-top" alt={Item.title} />
                <div className="card-body">
                  <h5 className="card-title">{Item.title}</h5>
                  <p className="card-text">{Item.description}</p>
                  <button className="btn btn-primary mx-3">₹{Item.price}</button>
                  <button onClick={() => addToCart(Item)} className="btn btn-warning">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center my-5">No results found for "{term}"</h3>
        )}
      </div>
    </div>
  );
};

export default Searchitem;