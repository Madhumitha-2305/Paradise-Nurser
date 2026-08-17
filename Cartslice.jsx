import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Update the quantity of an item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (cartItem) => cartItem.id === id
      );

      if (item) {
        item.quantity = quantity;

        // Remove item if quantity becomes zero or less
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (cartItem) => cartItem.id !== id
          );
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
