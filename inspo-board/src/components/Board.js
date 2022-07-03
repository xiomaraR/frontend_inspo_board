import React from "react";

const Board = ({ title, owner }) => {
  return (
    <li>
      {title} - {owner}
    </li>
  );
};

export default Board;
