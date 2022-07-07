import React from "react";
import Card from "./Card";

const CardList = ({ cards, onDeleteCard }) => {
  return (
    <div>
      {cards.map((card) => {
        return (
          <Card
            key={card.card_id}
            cardId={card.card_id}
            message={card.message}
            likesCount={card.likes_count}
            onDelete={onDeleteCard}
          />
        );
      })}
    </div>
  );
};

export default CardList;
