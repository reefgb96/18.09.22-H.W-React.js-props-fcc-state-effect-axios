import React from "react";
import { useState } from "react";

const CreateCardModal = (props) => {
  let [cardInput, setCardInput] = useState({
    name: "",
    origin: "",
    image: "",
    newCardBiz: false,
  });
  let newCard = [];
  let parentCardsArr;

  const handleUserInputChange = (ev) => {
    newCard = JSON.parse(JSON.stringify(cardInput));
    if (cardInput.hasOwnProperty(ev.target.id)) {
      newCard[ev.target.id] = ev.target.value;
      setCardInput({
        name: newCard.name,
        origin: newCard.origin,
        image: newCard.image,
        newCardBiz: newCard.newCardBiz,
      });
      //   setCardInput(newCard);
    }
  };

  const handleBizChecked = (ev) => {
    if (ev.target.checked) cardInput.newCardBiz = true;
    if (!ev.target.checked) cardInput.newCardBiz = false;
    console.log(cardInput);
  };

  const handlePassDataToParent = (ev) => {
    ev.preventDefault();
    parentCardsArr = props.arr.results;
    parentCardsArr = { ...parentCardsArr, cardInput };
    props.onAddCard(parentCardsArr);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Card
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Card
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={cardInput.name}
                  onChange={handleUserInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="origin">
                  Description:
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="origin"
                  value={cardInput.origin}
                  onChange={handleUserInputChange}
                />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="image">
                  Image:
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  value={cardInput.image}
                  onChange={handleUserInputChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="newCardBiz"
                  value={cardInput.newCardBiz}
                  onChange={handleBizChecked}
                />
                <label className="form-check-label" htmlFor="newCardBiz">
                  Business
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handlePassDataToParent}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCardModal;
