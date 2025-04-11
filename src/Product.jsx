import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ data, cart, setCart }) => {
  const addToCart = (id, price, title, imgsrc) => {
    const obj = { id, price, title, imgsrc };
    setCart([...cart, obj]);

    toast.success('Product added to cart', {
      position: "top-right",
      autoClose: 150,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row">
          {data.map((Item) => (
            <div key={Item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card" style={{ width: '18rem' }}>
                <Link
                  to={`/product/${Item.id}`} 

                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={Item.imgsrc}
                    className="card-img-top"
                    alt={Item.title}
                    style={{ height: '250px', objectFit: 'contain' }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{Item.title}</h5>
                  <button className="btn btn-primary mx-3">₹{Item.price}</button>
                  <button
                    onClick={() => addToCart(Item.id, Item.price, Item.title, Item.imgsrc)}
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
