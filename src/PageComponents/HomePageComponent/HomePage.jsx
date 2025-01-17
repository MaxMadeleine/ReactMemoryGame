import React, { useState } from "react";
import Card from '../../Components/CardComponent/Card';
import './HomePage.scss';
import { shuffleArray } from '../../Utils/Shuffle';

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

  const handleCardClick = (card) => {
    // Handle card click logic here
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card} // Pass the card object as a prop
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
}