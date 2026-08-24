import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const parseCost = (cost) => parseFloat(cost.replace('$', ''));

  const calculateItemTotal = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div className="cart-container">
      <nav className="navbar">
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>🌿 Paradise Nursery</span>
        <div className="nav-links">
          <span onClick={onContinueShopping}>Home</span>
          <span onClick={onContinueShopping}>Plants</span>
          <span className="cart-icon">🛒 Cart <span className="cart-count">{totalQuantity}</span></span>
        </div>
      </nav>

      <h1 style={{ margin: '20px 0' }}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div className="cart-item" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Unit Price: {item.cost}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <p>Total: ${calculateItemTotal(item)}</p>
            </div>
            <button className="delete-button" onClick={() => handleDelete(item)}>
              Delete
            </button>
          </div>
        ))
      )}

      <div className="cart-summary">
        Total Cart Amount: ${calculateTotalAmount()}
      </div>

      <div className="cart-actions">
        <button className="continue-shopping-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
