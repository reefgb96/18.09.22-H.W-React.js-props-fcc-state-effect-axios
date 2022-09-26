import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import countReducer from "./count";

import registerReducer from "../pages/store-HW/register";
import logInReducer from "../pages/store-HW/loginBtn";
import logInRegisterReducer from "../pages/store-HW/navBtns";

import randNumReducer from "../pages/Redux/store/generatRandNum";
import evenOddReducer from "../pages/Redux/store/EvenOdd";

//initial the global redux "state"
const store = configureStore({
  reducer: {
    auth: authReducer,
    count: countReducer,

    registration: registerReducer,
    loggedIn: logInReducer,
    logInRegister: logInRegisterReducer,

    randNum: randNumReducer,
    isEven: evenOddReducer,
  },
});

export default store;
