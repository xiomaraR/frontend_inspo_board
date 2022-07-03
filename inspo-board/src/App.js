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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspo Board</h1>
      </header>
      <main>
        <div>
          <BoardList boards={boards} />
        </div>
        <div>
          <NewBoardForm />
        </div>
      </main>
    </div>
  );
}

export default App;
