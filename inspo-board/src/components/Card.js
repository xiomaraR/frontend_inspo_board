import React from "react";
import heart from "../images/heart.png";
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
      <div className="pos-ll">
        {likesCount}
        <button
          img
          src
          className="like-btn"
          type="button"
          onClick={onLikeClick}
        >
          {" "}
          <img src={heart} alt="heart like icon" />
        </button>
      </div>
      <button className="btn-ur" type="button" onClick={onDeleteClick}>
        X
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
