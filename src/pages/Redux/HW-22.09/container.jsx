import React from "react";
import DispPage from "./dispPage";
import RandNum from "./randNum";

const RandNumcontainer = () => {
  return (
    <div className="p-5 border-top border-dark bg-light text-center">
      <DispPage />
      <RandNum />
    </div>
  );
};

export default RandNumcontainer;
