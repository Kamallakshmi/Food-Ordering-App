import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // !we have to add slices in our store in the form of reducer
  reducer: {
    // ! here it is reducer one reducer for the whole app
    // this is main reducer function is the combination of different small slices( which also have reducer function)
    cart: cartReducer, // this is small reducer for cart slice
  },
});

export default appStore;
