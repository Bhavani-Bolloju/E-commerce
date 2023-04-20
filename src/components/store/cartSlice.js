import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  savedItems: [],
  user: null,
  status: false,
  cartNotification: false,
  itemRemoveNotification: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addFetchData: (state, action) => {
      state.status = false;
      state.cartItems = action.payload.cartItems;
      state.totalAmount = +action.payload.totalAmount;
    },
    addFetchSavedItems: (state, action) => {
      state.status = false;
      state.savedItems = action.payload;
    },
    addItem: (state, action) => {
      state.status = true;
      const items = [...state.cartItems];
      const index = items.findIndex((item) => item.id == action.payload.id);
      const item = items[index];
      const totalAmount =
        state.totalAmount + +action.payload.price * +action.payload.qty;
      state.totalAmount = +totalAmount.toFixed(2);

      if (index >= 0) {
        const updateItem = {
          ...item,
          qty: action.payload.qty + item.qty
        };
        state.cartItems[index] = updateItem;
      } else {
        state.cartItems.push(action.payload);
      }
      state.cartNotification = true;
    },
    removeItem: (state, action) => {
      state.status = true;
      const items = [...state.cartItems];
      const index = items.findIndex((item) => item.id === action.payload);
      const item = items[index];
      state.totalAmount = +(state.totalAmount - item.price).toFixed(2);

      if (item.qty <= 1) {
        const filteredItems = items.filter(
          (item) => item.id !== action.payload
        );
        state.cartItems = filteredItems;
        state.itemRemoveNotification = true;
      } else {
        const updatedItem = { ...item, qty: +item.qty - 1 };
        state.cartItems[index] = updatedItem;
      }
    },
    saveItem: (state, action) => {
      state.status = true;
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
      state.status = true;
      const items = [...state.savedItems];
      const filterItems = items.filter((item) => item.id !== action.payload);
      state.savedItems = filterItems;
    },
    loggedUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    orderConfirmed: (state, action) => {
      state.status = true;
      console.log("emptying cart");
      state.cartItems = [];
      state.totalAmount = 0;
    },
    confirmAdd: (state) => {
      state.cartNotification = !state.cartNotification;
    },
    confirmRemove: (state) => {
      state.itemRemoveNotification = !state.itemRemoveNotification;
    }
  }
});

export const {
  addItem,
  removeItem,
  saveItem,
  removeSavedItem,
  loggedUser,
  addFetchData,
  addFetchSavedItems,
  orderConfirmed,
  confirmAdd,
  confirmRemove
} = cartSlice.actions;

export default cartSlice.reducer;
