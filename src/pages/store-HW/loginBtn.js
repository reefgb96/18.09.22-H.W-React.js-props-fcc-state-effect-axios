import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialLogInState = {
  logIn: false,
};

const logInSlice = createSlice({
  //for redux use
  name: "logIn",
  //initial state
  initialState: initialLogInState,
  //functions to munipulate the state
  //the functions inside the reducers called actions
  reducers: {
    /*
        we will call this function when we logged in
        to update redux "state" that the user logged in
    */
    logIn(state) {
      state.loggedIn = true;
    },
  },
});

/*
    export the actions (the functions that will munipulate the "state"),
    so we can use them from other components/pages.
    this is how we can get access to this actions to update/munipulate the "state".
*/
export const logInActions = logInSlice.actions;

/*
    export the actions, the state and the other configurations to redux (index.js) of redux
    so redux can configure the "big state"
*/
export default logInSlice.reducer;
