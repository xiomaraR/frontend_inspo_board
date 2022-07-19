import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";

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

BoardList.propTypes = {
  Boards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;
