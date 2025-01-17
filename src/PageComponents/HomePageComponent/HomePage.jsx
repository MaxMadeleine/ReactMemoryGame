import './HomePage.scss'
import Board from "../../Components/BoardComponent/Board.jsx";
import Scoreboard from "../../Components/ScoreboardComponent/Scoreboard.jsx";
import { shuffleArray } from "../../Utils/Shuffle.js";
import React, { useState } from "react";

//test


export const HomePage = () => {

  const cardThemes = ["🍎", "🍌", "🍒", "🍇", "🍓", "🥝", "🍍", "🍑", "🍋", "🥭"];
  const [cards, setCards] = useState(
    shuffleArray([...cardThemes, ...cardThemes]).map((symbol, id) => ({
      id, 
      symbol, 
      flipped: false, 
      matched: false, 
    }))
  );

  const [moves, setMoves] = useState(0); 

  return (
    <div>
      <h1>Memory Game</h1>
    
      <Board cards={cards} setCards={setCards} moves={moves} setMoves={setMoves} />
     
      <Scoreboard moves={moves} />
    </div>
  );
};


