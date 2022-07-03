import React from "react";

const Card = ({ message, likesCount }) => {
  return (
    <div className="card-display">
      <h3>{message}</h3>
      <p>{likesCount}</p>
    </div>
  );
};

export default Card;
