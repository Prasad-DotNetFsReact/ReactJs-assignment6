import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import the custom CSS file

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const products = useSelector((state) => state.products); // Redux for products

  const [cart, dispatch] = useReducer(cartReducer, []);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD', payload: product });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE', payload: productId });
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-5">Cart</h2>
      {cart.length > 0 ? (
        <div>
          <ul className="list-group">
            {cart.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Total: ${totalAmount}</h3>
        </div>
      ) : (
        <p className="mt-3">The cart is empty</p>
      )}
    </div>
  );
};

export default App;
