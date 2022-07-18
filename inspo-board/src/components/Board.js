import React from "react";

const Board = ({ boardId, title, owner, onSelectBoard }) => {
  const onItemClick = () => {
    onSelectBoard(boardId, title, owner);
  };

  return (
    <li onClick={onItemClick}>
      {title} - {owner}
    </li>
  );
};

export default Board;
