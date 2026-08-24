import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  // page can be 'landing', 'products', or 'cart'
  const [page, setPage] = useState('landing');

  const goToProducts = () => setPage('products');
  const goToCart = () => setPage('cart');
  const goToLanding = () => setPage('landing');

  if (page === 'products') {
    return <ProductList onCartClick={goToCart} onHomeClick={goToLanding} />;
  }

  if (page === 'cart') {
    return <CartItem onContinueShopping={goToProducts} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Discover a curated collection of houseplants that bring life, color,
          and cleaner air into your home. From easy-care succulents to lush
          statement plants, find the perfect green companion for every space.
        </p>
        <button className="get-started-button" onClick={goToProducts}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
