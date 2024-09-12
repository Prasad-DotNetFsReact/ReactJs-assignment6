import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Links = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <Link className="navbar-brand" to="/">
        Shopping Cart
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkout">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Links;
