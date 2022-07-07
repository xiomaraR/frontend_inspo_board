import React from "react";

const Card = ({ cardId, message, likesCount, onDelete }) => {
  const onDeleteClick = () => {
    onDelete(cardId);
  };

  return (
    <div className="card-display">
      <h3>{message}</h3>
      <p>{likesCount}</p>
      <button type="button">+1</button>
      <button type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Card;
