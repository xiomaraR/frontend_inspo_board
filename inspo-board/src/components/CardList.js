import React from "react";
import Card from "./Card";

const CardList = ({ cards, onDeleteCard, onLikeCard }) => {
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
            onLike={onLikeCard}
          />
        );
      })}
    </div>
  );
};

export default CardList;
