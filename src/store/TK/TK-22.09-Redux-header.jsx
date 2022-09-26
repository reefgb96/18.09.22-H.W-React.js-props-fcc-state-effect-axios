import React from "react";
import countReducer from "../count";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.count.counter);
  return (
    <div className="my-5">
      <h1>Count: {count}</h1>
    </div>
  );
};

export default Header;
