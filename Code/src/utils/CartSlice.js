import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //initial state if slice
  },
  reducers: {
    //reducer is an object that has different action like additem,removeitem
    //action is additem and the reducers function is the function below  " () -> {} " which modifies the slice of our store by getting acces to state.
    // it modifies the state based on the action
    addItem: (state, action) => {
      //changing the state here
      //suppose if i get items which is an array
      state.items.push(action.payload);

      //what is action.payload => when we'll dispatch an action like we'll add item so we'll get the paylaod when we add this item
    },
    removeitem: (state, action) => {
      //mutating state over or modifying state over here
      state.items.pop();
    },
    clearcart: (state) => {
      state.items.length = 0; //make items to 0
    },
  },
});

export const { addItem, removeitem, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
