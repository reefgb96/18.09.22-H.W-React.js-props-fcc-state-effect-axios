import { useState, useEffect } from "react";
import axios from "axios";
import { RickMortyCards } from "./RickMortyCards";
import CreateCardModal from "./CreateCardModal";

const RickMortyPage = () => {
  let charactersArr = [];
  let [childData, setChildData] = useState({});
  let [dataArr, setDataArr] = useState(null);
  const [apiLink, setApiLink] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  const sendReq = () => {
    axios
      .get(apiLink)
      .then((res) => {
        charactersArr = res.data;
        setDataArr(charactersArr);
      })
      .catch((err) => console.log("err ", err));
  };

  useEffect(() => {
    sendReq();
  }, []);

  const handleAddCard = (data) => {
    dataArr.results = { ...data };
    // setDataArr(dataArr);
    displayCards();
  };

  useEffect(() => {
    sendReq();
  }, [dataArr]);

  const dispalyBtns = () => {
    if (dataArr != []) {
      return (
        <>
          <div>
            <CreateCardModal onAddCard={handleAddCard} arr={dataArr} />
          </div>
          <div>
            <button onClick={handleNextPage}>next</button>
            <button onClick={handlePrevPage}>prev</button>
          </div>
        </>
      );
    }
  };

  const handleNextPage = () => {
    setApiLink(dataArr.info.next);
  };
  const handlePrevPage = () => {
    setApiLink(dataArr.info.prev);
  };

  useEffect(() => {
    sendReq();
  }, [apiLink]);

  const handleDeleteCard = (id) => {
    let newDataArr = dataArr.filter((item) => item.id !== id);
    setDataArr(newDataArr);
  };

  const displayCards = () => {
    if (dataArr) {
      let cardsToDisplay = dataArr.results.map((item) => {
        return (
          <RickMortyCards
            item={item}
            key={item.id}
            onDelete={handleDeleteCard}
          />
        );
      });
      return cardsToDisplay;
    }
  };

  useEffect(() => {
    displayCards();
  }, [dataArr]);

  return (
    <>
      {dispalyBtns()}

      <div className="row row-cols-1 row-cols-md-2 g-4">{displayCards()}</div>
    </>
  );
};
export default RickMortyPage;
