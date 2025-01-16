import './HomePage.scss'
import Board from "../../Components/BoardComponent/Board.jsx";
import Scoreboard from "../../Components/ScoreboardComponent/Scoreboard.jsx";
import { shuffleArray } from "../../Utils/Shuffle.js";
import React, { useState } from "react";




export const HomePage = () => {
  // Dette er temaet for kortene (10 symboler). Vi laver to sæt for at få matchende par.
  const cardThemes = ["🍎", "🍌", "🍒", "🍇", "🍓", "🥝", "🍍", "🍑", "🍋", "🥭"];
  const [cards, setCards] = useState(
    shuffleArray([...cardThemes, ...cardThemes]).map((symbol, id) => ({
      id, // Hvert kort får en unik ID
      symbol, // Kortets symbol (fx 🍎)
      flipped: false, // Kortet starter med bagsiden opad
      matched: false, // Kortet er ikke matchet endnu
    }))
  );

  const [moves, setMoves] = useState(0); // Antal træk, spilleren har brugt

  return (
    <div>
      <h1>Memory Game</h1>
      {/* Her viser vi spillebrættet og giver det nødvendige data */}
      <Board cards={cards} setCards={setCards} moves={moves} setMoves={setMoves} />
      {/* Her viser vi spillerens resultater (antal træk) */}
      <Scoreboard moves={moves} />
    </div>
  );
};


