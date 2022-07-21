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

  const colors = [
    "darkseagreen",
    "palegoldenrod",
    "antiquewhite",
    "lightblue",
    "burlywood",
    "pink",
    "steelblue",
    "darksalmon",
    "khaki",
    "plum",
    "silver",
    "palevioletred",
    "lightseagreen ",
    "lemonchiffon",
  ];
  const getColor = () => {
    const len = colors.length;
    const randomNum = Math.floor(Math.random() * len);
    let color = colors[randomNum];
    console.log(color);
    return color;
  };

  return (
    <div className="card-display" style={{ backgroundColor: getColor() }}>
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
