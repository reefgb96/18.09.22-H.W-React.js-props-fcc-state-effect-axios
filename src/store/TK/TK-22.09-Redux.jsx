import React from "react";
// import { useSelector } from "react-redux";
// import countReducer from "../count";
import Btns from "./TK-22.09-Redux-btns";
import Header from "./TK-22.09-Redux-header";

const DisplayPage = () => {
  return (
    <div className="container text-center bg-light">
      <div>
        <Header />
        <Btns />
      </div>
    </div>
  );
};
export default DisplayPage;
