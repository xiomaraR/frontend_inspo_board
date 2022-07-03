import React from "react";
import Board from "./Board";

const BoardList = ({ boards }) => {
  return (
    <ol className="board-list">
      {boards.map((board) => {
        return <Board title={board.title} owner={board.owner} />;
      })}
    </ol>
  );
};

export default BoardList;
