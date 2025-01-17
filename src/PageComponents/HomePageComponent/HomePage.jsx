import './HomePage.scss'
import React, { useState } from "react";




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

  const [moves, setMoves] = useState(0); // Antal træk, spilleren har brugt

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cards.map(card => (
        <Card
          key={card.id}
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
}

export default Board;

