import React from "react";
import { useSelector } from "react-redux";

const DispPage = () => {
  const number = useSelector((state) => state.randNum.num);
  let parity = useSelector((state) => state.isEven.isEven);
  -number % 2 === 0 ? (parity = "Even") : (parity = "Odd");
  // const number = useSelector((state) => state.randNum.num);
  return (
    <div>
      <h1>Random Number: {number}</h1>
      <h2>Number is: {parity}</h2>
    </div>
  );
};

export default DispPage;
