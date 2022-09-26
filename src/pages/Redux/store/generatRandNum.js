import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialRandNumState = {
  num: 0,
};

const randNumSlice = createSlice({
  //for redux use
  name: "num",
  //initial state
  initialState: initialRandNumState,

  reducers: {
    generateRandNum(state) {
      state.num = Math.floor(Math.random() * 100) + 1;
      //   if (state % 2 === 0) {
      //     isEven = "Even";
      //   } else {
      //     isEven = "Odd";
      //   }
    },
  },
});

/*
    export the actions (the functions that will munipulate the "state"),
    so we can use them from other components/pages.
    this is how we can get access to this actions to update/munipulate the "state".
*/
export const randNumActions = randNumSlice.actions;

/*
    export the actions, the state and the other configurations to redux (index.js) of redux
    so redux can configure the "big state"
*/
export default randNumSlice.reducer;
