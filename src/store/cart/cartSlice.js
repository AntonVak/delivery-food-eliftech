import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  user: {
    name: "",
    email: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) state.items.push({ ...action.payload, count: 1 });
      if (existingItem)
        state.items = state.items.map((item) =>
          item.id === existingItem.id
            ? { ...existingItem, count: existingItem.count + 1 }
            : item
        );
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
    },
    decrement: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      });
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});
export const { addItem, removeItem, increment, decrement, cartNumber, setTotalPrice } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
