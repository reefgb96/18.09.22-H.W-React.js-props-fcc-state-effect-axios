import { useState, useEffect } from "react";

const SideEffectPage = () => {
  const [time, setTime] = useState(Date.now());
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      setTime(Date.now());
      console.log("time", time);
    }, 1000);
    return () => {
      /*
            this code will execute when the component will deleted
        */
      clearInterval(intervalId);
    };
  }, []);
  /*
    if depArr is empty useEffect will wait untill this component will load,
    then he will execute the code 1 time
  */

  return time;
};

export default SideEffectPage;
