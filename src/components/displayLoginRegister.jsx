import React from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useSelector } from "react-redux";

const DisplayLoginRegister = () => {
  let displayNow = useSelector((state) => state.logInRegister.logIn);

  return <div>{displayNow ? <RegisterPage /> : <LoginPage />}</div>;
};

export default DisplayLoginRegister;
