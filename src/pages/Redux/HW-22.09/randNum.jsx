import { useDispatch } from "react-redux";
import { randNumActions } from "../store/generatRandNum";
import { EvenOddActions } from "../store/EvenOdd";

const RandNum = () => {
  const dispatch = useDispatch();
  const handleGenerateNumClick = () => {
    dispatch(randNumActions.generateRandNum());
    dispatch(EvenOddActions.isEvenOdd());
  };

  return (
    <div className="mt-5 pt-5">
      <button className="btn btn-danger" onClick={handleGenerateNumClick}>
        Generate Number
      </button>
    </div>
  );
};

export default RandNum;
