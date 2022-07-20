import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

const appURL = "https://bored-inspo-backend.herokuapp.com/";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [cards, setCards] = useState([]);
  const [boardFormVisibility, setBoardFormVisibility] = useState(true);

  useEffect(() => {
    getBoards();
  }, []);

  const getBoards = () => {
    return axios
      .get(`${appURL}/boards`)
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const selectBoard = (boardId, title, owner) => {
    const board = { boardId: boardId, title: title, owner: owner };
    setSelectedBoard(board);

    axios
      .get(`${appURL}/boards/${boardId}/cards`)
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getCardsSortedByLikes = () => {
    axios
      .get(`${appURL}/boards/${selectedBoard.boardId}/cards`, {
        params: { sort: "likes" },
      })
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getCardsSortedByID = () => {
    axios
      .get(`${appURL}/boards/${selectedBoard.boardId}/cards`, {
        params: { sort: "id" },
      })
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getCardsSortedAlphabet = () => {
    axios
      .get(`${appURL}/boards/${selectedBoard.boardId}/cards`, {
        params: { sort: "letter" },
      })
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const addBoard = (title, owner) => {
    axios
      .post(`${appURL}/boards`, { title, owner })
      .then((result) => {
        const newBoard = {
          board_id: result.data.board.board_id,
          title: result.data.board.title,
          owner: result.data.board.owner,
        };
        setBoards([...boards, newBoard]);
      })
      .catch((error) => console.log(error.response.data));
  };

  const addCard = (message) => {
    axios
      .post(`${appURL}/boards/${selectedBoard.boardId}/cards`, { message })
      .then((result) => {
        const newCard = {
          card_id: result.data.card.card_id,
          message: result.data.card.message,
          likes_count: result.data.card.likes_count,
          board_id: result.data.card.board_id,
        };
        setCards([...cards, newCard]);
      })
      .catch((error) => console.log(error.response.data));
  };

  const deleteCard = (cardId) => {
    axios
      .delete(`${appURL}/cards/${cardId}`)
      .then(() => {
        const newCards = cards.filter((card) => card.card_id !== cardId);
        setCards(newCards);
      })
      .catch((error) => console.log(error.response.data));
  };

  const likeCard = (cardId) => {
    axios.patch(`${appURL}/cards/${cardId}`).then((result) => {
      const cardsCopy = [...cards];
      for (const card of cardsCopy) {
        if (card.card_id === cardId) {
          card.likes_count = result.data.likes_count;
        }
      }
      setCards(cardsCopy);
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Inspo Board</h1>
      </header>
      <main>
        <h2>Board List</h2>
        <BoardList boards={boards} onSelectBoard={selectBoard} />

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
          {boardFormVisibility ? (
            <NewBoardForm onAddBoardCallback={addBoard} />
          ) : (
            ""
          )}
          <button
            type="button"
            onClick={() => {
              setBoardFormVisibility(!boardFormVisibility);
            }}
          >
            {boardFormVisibility
              ? "Hide New Board Form"
              : "Show New Board Form"}
          </button>
        </div>
        {selectedBoard ? (
          <>
            <div>
              <h2 className="board-cards">Cards for {selectedBoard.title}</h2>
              <CardList
                cards={cards}
                onDeleteCard={deleteCard}
                onLikeCard={likeCard}
              />
              <button type="button" onClick={getCardsSortedByID}>
                Sort by card ID
              </button>
              <button type="button" onClick={getCardsSortedAlphabet}>
                Sort alphabetically
              </button>
              <button type="button" onClick={getCardsSortedByLikes}>
                Sort by number of likes
              </button>
            </div>
            <div>
              <h2>Create a new card:</h2>
              <NewCardForm onAddCardCallback={addCard} />
            </div>
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
