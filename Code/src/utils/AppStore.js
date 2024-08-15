import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import CartModify from "./CartModify";
const AppStore = configureStore({
  //each slice has its reducer so add that in appstore
  //in diagram big reducer contain small reducer and it is one bcoz we have only one slice
  //this **reducer** is big reducer for your App and it can have multiple small reducers and when we create slice in CartSlice we use reducers
  reducer: {
    cart: cartReducer,
    cartmod: CartModify,
  },
});

export default AppStore;
