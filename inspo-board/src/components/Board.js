import React from "react";

const Board = ({ title, owner, onSelectBoard }) => {
  const onItemClick = () => {
    onSelectBoard(title, owner);
  };

  return (
    <li onClick={onItemClick}>
      {title} - {owner}
    </li>
  );
};

export default Board;
