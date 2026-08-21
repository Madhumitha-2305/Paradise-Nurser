import React from "react";

const CartItem = ({ cartItems, setCartItems }) => {

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>

                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>

                <p>
                  Subtotal: ₹{item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

          <div className="cart-summary">
            <h2>Total Items: {totalQuantity}</h2>
            <h2>Total Cost: ₹{totalPrice}</h2>

            <button
              onClick={() => alert("Thank you for shopping with Paradise Nursery!")}
            >
              Checkout
            </button>
          </div>
        </>
      )}

    </div>
  );
};

export default CartItem;
