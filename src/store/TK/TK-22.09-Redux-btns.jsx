import React from "react";
import { useDispatch } from "react-redux";
import { countActions } from "../count";

const Btns = () => {
  const dispatch = useDispatch();
  const handlePlusClick = () => {
    dispatch(countActions.countPlus());
  };
  const handleMinusClick = () => {
    dispatch(countActions.countMinus());
  };
  return (
    <div className="my-5">
      <button className="btn btn-warning mx-5" onClick={handlePlusClick}>
        <h3>Plus</h3>
      </button>
      <button className="btn btn-warning mx-5" onClick={handleMinusClick}>
        <h3>Minus</h3>
      </button>
    </div>
  );
};

export default Btns;
