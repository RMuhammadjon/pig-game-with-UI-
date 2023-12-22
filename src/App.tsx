import React, { useState } from "react";
import axios from "axios";
import Game from "./components/game";

const App: React.FC = () => {
  const [newGameId, setNewGameId] = useState<string | null>(null);

  const handleNewGame = async () => {
    try {
      const response = await axios.post("http://localhost:4001/api/games/pig", {
        player1: "Player 1",
        player2: "Player 2",
        max: 20,
      });
      setNewGameId(response.data.data.game.id);
    } catch (error) {
      console.error("Error creating new game:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex items-center justify-center flex-col gap-6">
        <h1 className=" text-[50px] italic">Pig Game</h1>
        <button
          className=" bg-red-600 p-3 rounded  text-white font-mono "
          onClick={handleNewGame}
        >
          Start New Game
        </button>
      </div>
      {newGameId && <Game gameId={newGameId} />}
    </div>
  );
};

export default App;
