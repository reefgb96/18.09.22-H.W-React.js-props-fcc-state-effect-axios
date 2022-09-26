import { createSlice } from "@reduxjs/toolkit";
import randNumReducer from "./generatRandNum";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialEvenOddNumState = {
  isEven: "",
};

const EvenOddNumSlice = createSlice({
  //for redux use
  name: "isEven",
  //initial state
  initialState: initialEvenOddNumState,

  reducers: {
    isEvenOdd(state) {
      if (randNumReducer % 2 === 0) {
        state.isEven += "Even";
        console.log("Even");
      }
      if (randNumReducer % 3 === 0) {
        state.isEven += "Odd";
        console.log("Odd");
      }
    },
  },
});

/*
    export the actions (the functions that will munipulate the "state"),
    so we can use them from other components/pages.
    this is how we can get access to this actions to update/munipulate the "state".
*/
export const EvenOddActions = EvenOddNumSlice.actions;

/*
    export the actions, the state and the other configurations to redux (index.js) of redux
    so redux can configure the "big state"
*/
export default EvenOddNumSlice.reducer;
