import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => {
        return (
          <Card
            key={card.card_id}
            message={card.message}
            likesCount={card.likes_count}
          />
        );
      })}
    </div>
  );
};

export default CardList;
