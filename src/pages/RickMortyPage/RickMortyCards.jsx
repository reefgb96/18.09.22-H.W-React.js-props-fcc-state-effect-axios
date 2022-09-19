import React from "react";
import "./RickMortyCards.css";

export const RickMortyCards = ({ item, onDelete }) => {
  const handleOnDelete = () => {
    onDelete(item.id);
  };

  return (
    <>
      <div
        className="col d-flex justify-content-center"
        key={"char-" + item.id}
      >
        <div
          className="card rick-morty-cards d-flex align-items-center bg-light"
          id={"card-" + item.id}
        >
          <img
            src={item.image}
            className="card-img-top rick-morty-img"
            alt={item.name}
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Origin: {item.origin.name}</p>
          </div>
          <button
            className="delete-card btn btn-dark my-2"
            onClick={handleOnDelete}
          >
            ❌ Delete Card ❌
          </button>
        </div>
      </div>
    </>
  );
};
