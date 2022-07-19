import React from "react";
import PropTypes from "prop-types";

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

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Card;
