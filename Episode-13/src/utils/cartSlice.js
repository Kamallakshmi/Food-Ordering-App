import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // this cartSlice is the function that takes a configuration to create the slice
  name: "cart", // 1st config is name of slice
  initialState: {
    // it is object
    // 2nd config is the type of cart items
    items: [], // cart is initally empty but now we are adding dummy data to make cart visible 2 items it should read from the cart slice. How to read ? go to header component to check
  },
  reducers: {
    //! here it is reducers
    // it is object
    // reducer function corresponding to those actions
    // corresponding reducer function we are going to write below this function will modify the slice of the store(cart)
    // How to modify the slide of the store?
    // 1. This reducer function  gets access to the intialState and get it using 1st param(State) and also gets acces to 2nd param(action).
    addItem: (state, action) => {
      // addItem means action
      // after we get access to state of the store using params, we have to push(since items is an array) the action
      state.items.push(action.payload);
    }, // we can add an item, remove , clear (similar like API to communicate woth redux store)
    removeItem: (state) => {
      state.items.pop(); // removing the top item we added, we can also write manual code to remove an items from cart
    },
    clearItem: (state) => {
      // we dont need action for clearItem reducer function, because it just removes an item from the cart.
      state.items.length = 0;
      // return { items: [] }; this new object will be replaced inside originalState = { items: []}
    },
  },
});

// we should have to export two thing (action and reducers),this exxporting syntax gives by redux toolkit
export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;

// finally go and add this slice into the store

//! Vanilla Redux(Older redux) - DONT mutate state [state.items.push(action.payload);] its illegal and returning is mandatory
// const newState = [...state];
// newState.items.push(action.payload); we modify the new state
// return newState;(mandatory step)

//! Redux Toolkit
// We have to mutate the state and returning is not mandatory
// Redux toolkit says either mutate the existing state or return a new state
// React uses this immer library to find out the diff between orginal state and new state and give new immutable state. redux do the same thing like vanilla redux but toolkit take care of it.
//! IMMER JS(JS Library) - Immer takes existing state and takes new state and calculate diff between them and gives new state to redux.
