import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Data from './Data';

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = Data.find((item) => item.id === parseInt(id));

    if (foundProduct) {
      setProduct(foundProduct);

      const related = Data.filter(
        (item) => item.category === foundProduct.category && item.id !== foundProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img
            src={product.imgsrc}
            alt={product.title}
            className="img-fluid"
            style={{ maxWidth: '360px', borderRadius: '10px' }}
          />
          <h1 className="mt-3">{product.title}</h1>
          <p>{product.description}</p>
          <h4 className="text-primary">₹{product.price}</h4>
          <button onClick={() => addToCart(product)} className="btn btn-warning">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Related Products</h2>
        <div className="row d-flex justify-content-center">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card shadow-sm p-3">
                  <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                    <img
                      src={item.imgsrc}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                  </Link>
                  <div className="card-body text-center">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <h6 className="text-primary">₹{item.price}</h6>
                    <button onClick={() => addToCart(item)} className="btn btn-warning">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5 className="text-center">No related products found.</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
