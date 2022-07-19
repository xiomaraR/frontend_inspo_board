import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

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

CardList.propTypes = {
  Cards: PropTypes.arrayOf({
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
  }),
  onDeleteCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
};
export default CardList;
