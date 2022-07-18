import React from "react";
import Board from "./Board";

const BoardList = ({ boards, onSelectBoard }) => {
  return (
    <ol className="board-list">
      {boards.map((board) => {
        return (
          <Board
            key={board.boardId}
            boardId={board.board_id}
            title={board.title}
            owner={board.owner}
            onSelectBoard={onSelectBoard}
          />
        );
      })}
    </ol>
  );
};

export default BoardList;
