import React, { useReducer } from 'react';

const initialState = {
  cart: [],
  products: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE':
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

const LocalCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalAmount = state.cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button
              onClick={() => dispatch({ type: 'ADD', payload: product })}
              className="btn btn-primary ml-3"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {state.cart.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button
              onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}
              className="btn btn-danger ml-3"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
};

export default LocalCart;
