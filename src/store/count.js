import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialCountState = {
  counter: 0,
};

const countSlice = createSlice({
  //for redux use
  name: "count",
  //initial state
  initialState: initialCountState,
  //functions to munipulate the state
  //the functions inside the reducers called actions
  reducers: {
    /*
        we will call this function when we logged in
        to update redux "state" that the user logged in
    */
    countPlus(state) {
      state.counter = state.counter + 1;
    },
    /*
        we will call this function when we logged out
        to update redux "state" that the user logged out
    */
    countMinus(state) {
      state.counter = state.counter - 1;
    },
  },
});

/*
    export the actions (the functions that will munipulate the "state"),
    so we can use them from other components/pages.
    this is how we can get access to this actions to update/munipulate the "state".
*/
export const countActions = countSlice.actions;

/*
    export the actions, the state and the other configurations to redux (index.js) of redux
    so redux can configure the "big state"
*/
export default countSlice.reducer;
