import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart, setCart }) => {
  const handleCheckout = () => {
    toast.success('Order placed successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, item) => acc + parseInt(item.price), 0);

  return (
    <div className="container mt-5">
      <ToastContainer />

      {cart.length === 0 ? (
        <div className="text-center">
          <h1>Your Cart is Empty</h1>
          <Link to="/" className="btn btn-warning mt-3">Continue Shopping...</Link>
        </div>
      ) : (
        <>
          {cart.map((Item) => (
            <div key={Item.id} className="card mb-3 mx-auto" style={{ maxWidth: '600px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Item.imgsrc} className="img-fluid rounded-start" alt={Item.title} />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center text-center">
                  <h5 className="card-title">{Item.title}</h5>
                  <p className="text-primary fw-bold">₹{Item.price}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <h4>Total: ₹{totalPrice}</h4>
            <button className="btn btn-success mx-2" onClick={handleCheckout}>Checkout</button>
            <button className="btn btn-danger mx-2" onClick={() => setCart([])}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;