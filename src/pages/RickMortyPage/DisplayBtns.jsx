import React from "react";

const DisplayBtns = ({ onDisplayRM, onDisplayReg }) => {
  const handleOnDisplayRM = () => {
    onDisplayRM(true);
  };
  const handleOnDisplayReg = () => {
    onDisplayReg(false);
  };
  return (
    <div className="d-flex justify-content-center">
      <div
        className="btn-group w-25 mb-5"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handleOnDisplayRM}
        >
          Rick and Morty
        </button>

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleOnDisplayReg}
        >
          RegisterPage
        </button>
      </div>
    </div>
  );
};

export default DisplayBtns;
