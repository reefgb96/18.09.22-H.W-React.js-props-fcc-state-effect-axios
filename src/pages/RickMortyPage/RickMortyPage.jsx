import { useState, useEffect } from "react";
import axios from "axios";
import { RickMortyCards } from "./RickMortyCards";

const RickMortyPage = () => {
  let charactersArr = [];
  let [dataArr, setDataArr] = useState(charactersArr);
  let apiLink = "https://rickandmortyapi.com/api/character/";

  const sendReq = () => {
    axios
      .get(apiLink)
      .then((res) => {
        charactersArr = res.data;
        setDataArr(charactersArr.results);
      })
      .catch((err) => console.log("err ", err));
  };

  useEffect(() => {
    sendReq();
  }, []);

  const handleNextPage = () => {
    setDataArr(dataArr.info.next);
  };

  const handlePrevPage = () => {};

  const handleDeleteCard = (id) => {
    let newDataArr = dataArr.filter((item) => item.id !== id);
    setDataArr(newDataArr);
  };

  return (
    <>
      {/* <div>
        <button onClick={handleNextPage}>next</button>
        <button onClick={handlePrevPage}>prev</button>
      </div> */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {dataArr.map((item) => {
          return (
            <RickMortyCards
              item={item}
              key={item.id}
              onDelete={handleDeleteCard}
            />
          );
        })}
      </div>
    </>
  );
};
export default RickMortyPage;
