import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Thank you for shopping with Paradise Nursery!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h1>Shopping Cart 🛒</h1>
          <h2>Your cart is empty</h2>
          <p>
            You haven't added any plants to your cart yet.
          </p>

          <button
            className="continue-shopping-btn"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>Shopping Cart 🛒</h1>
        <p>
          You have {totalItems}{" "}
          {totalItems === 1 ? "item" : "items"} in your cart.
        </p>
      </header>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h2>{item.name}</h2>

                <p className="cart-category">
                  {item.category}
                </p>

                <p className="cart-item-price">
                  ${item.price.toFixed(2)} each
                </p>

                <div className="quantity-section">
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecrease(item)}
                  >
                    −
                  </button>

                  <span className="quantity">
                    {item.quantity}
                  </span>

                  <button
                    className="quantity-btn"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>

                <p className="item-subtotal">
                  Subtotal: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="total-row">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>

          <button
            className="continue-shopping-btn"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </button>
        </aside>
      </div>
    </div>
  );
};

export default CartItem;
