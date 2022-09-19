import { Fragment, useState } from "react";

const ConditionPage = () => {
  const [showArray, setShowArray] = useState(true);
  const handleBtnClick = () => {
    setShowArray(!showArray);
  };
  return (
    <Fragment>
      {showArray && <h1>your array</h1>}
      <button onClick={handleBtnClick}>toggle showArray</button>
    </Fragment>
  );
};

export default ConditionPage;
