import React from "react";

const Card = ({ cardId, message, likesCount, onDelete, onLike }) => {
  const onDeleteClick = () => {
    onDelete(cardId);
  };

  const onLikeClick = () => {
    onLike(cardId);
  };

  return (
    <div className="card-display">
      <h3>{message}</h3>
      <p>{likesCount}</p>
      <button type="button" onClick={onLikeClick}>
        +1
      </button>
      <button type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Card;
