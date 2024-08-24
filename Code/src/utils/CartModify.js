import { createSlice } from "@reduxjs/toolkit";

const CartModify = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload
          );
        }
      }
    },
    clearcart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearcart } = CartModify.actions;

export default CartModify.reducer;
