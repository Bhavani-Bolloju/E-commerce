import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  savedItems: [],
  user: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const items = [...state.cartItems];
      const index = items.findIndex((item) => item.id == action.payload.id);
      const item = items[index];
      state.totalAmount += +action.payload.price * +action.payload.qty;
      if (index >= 0) {
        const updateItem = {
          ...item,
          qty: action.payload.qty + item.qty,
        };
        state.cartItems[index] = updateItem;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const items = [...state.cartItems];
      const index = items.findIndex((item) => item.id === action.payload);
      const item = items[index];
      state.totalAmount -= item.price;

      if (item.qty <= 1) {
        const filteredItems = items.filter(
          (item) => item.id !== action.payload
        );
        // console.log(filteredItems);
        state.cartItems = filteredItems;
      } else {
        const updatedItem = { ...item, qty: +item.qty - 1 };
        state.cartItems[index] = updatedItem;
      }
    },
    saveItem: (state, action) => {
      const items = [...state.savedItems];
      const index = items.findIndex((item) => item.id === action.payload.id);

      if (index < 0) {
        state.savedItems.push(action.payload);
      } else {
        const filterItems = items.filter(
          (item) => item.id !== action.payload.id
        );
        state.savedItems = filterItems;
      }
    },
    removeSavedItem: (state, action) => {
      const items = [...state.savedItems];
      const filterItems = items.filter((item) => item.id !== action.payload);
      state.savedItems = filterItems;
    },
    loggedUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { addItem, removeItem, saveItem, removeSavedItem, loggedUser } =
  cartSlice.actions;

export default cartSlice.reducer;
