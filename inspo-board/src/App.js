import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";

const appURL = "https://bored-inspo-backend.herokuapp.com/";

const boardApiToJson = (board) => {
  const { board_id: boardId, title, owner } = board;

  return { boardId, title, owner };
};

const getBoards = () => {
  return axios
    .get(`${appURL}/boards`)
    .then((response) => {
      return response.data.map(boardApiToJson);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");

  useEffect(() => {
    refreshBoards();
  }, []);

  const refreshBoards = () => {
    return getBoards()
      .then((newBoards) => {
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const selectBoard = (title, owner) => {
    const board = { title: title, owner: owner };

    setSelectedBoard(board);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspo Board</h1>
      </header>
      <main>
        <div>
          <h2>Board List</h2>
          <BoardList boards={boards} onSelectBoard={selectBoard} />
        </div>
        <div>
          <h2>Selected Board:</h2>
          <h3>
            {selectedBoard
              ? `${selectedBoard.title} - ${selectedBoard.owner}`
              : "Select a board from the list!"}
          </h3>
        </div>
        <div>
          <h2>Create a new board:</h2>
          <NewBoardForm />
        </div>
      </main>
    </div>
  );
}

export default App;
