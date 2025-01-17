import React, { useState } from "react";
import Card from "../CardComponent/Card.jsx";

function Board({ cards, setCards, moves, setMoves }) {
  const [selectedCards, setSelectedCards] = useState([]); 

  const handleCardClick = (card) => {
    
    if (card.flipped || selectedCards.length === 2) {
      return;
    }

    card.flipped = true;
    setCards([...cards]); 

    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      checkForMatch(newSelectedCards);
    }
  };

  const checkForMatch = (selected) => {
    const [firstCard, secondCard] = selected;

    if (firstCard.symbol === secondCard.symbol) {
      firstCard.matched = true;
      secondCard.matched = true;
    } else {
      setTimeout(() => {
        firstCard.flipped = false;
        secondCard.flipped = false;
        setCards([...cards]); 
      }, 500);
    }

    setSelectedCards([]);
    setMoves(moves + 1);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
  
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
      ))}
    </div>
  );
}

export default Board;
