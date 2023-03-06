import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const items = [...state.cartItems];
      const index = items.findIndex((item) => item.id == action.payload.id);

      if (index >= 0) {
        const item = items[index];
        const updateItem = {
          ...item,
          qty: action.payload.qty + item.qty,
        };
        state.cartItems[index] = updateItem;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      const items = [...state.cartItems];
      const index = items.findIndex((item) => item.id === action.payload);
      const item = items[index];
      if (item.qty <= 1) {
        const filteredItems = items.filter(
          (item) => item.id !== action.payload
        );
        console.log(filteredItems);
        state.cartItems = filteredItems;
      } else {
        const updatedItem = { ...item, qty: +item.qty - 1 };
        state.cartItems[index] = updatedItem;
      }
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
