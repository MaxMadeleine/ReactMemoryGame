import './HomePage.scss'
import React, { useState } from "react";



// A simple card component instead of importing it
function Card({ symbol, isFlipped, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-20 h-20 bg-blue-100 border rounded"
    >
      {isFlipped ? symbol : "?"}
    </button>
  );
}

function Board() {
  // Sample cards - in a real game you'd pass these as props
  const [cards, setCards] = useState([
    { id: 1, symbol: "🐶", isFlipped: false },
    { id: 2, symbol: "🐱", isFlipped: false },
    { id: 3, symbol: "🐶", isFlipped: false },
    { id: 4, symbol: "🐱", isFlipped: false },
  ]);
  
  // Keep track of flipped cards
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (clickedCard) => {
    // Don't do anything if two cards are already flipped
    if (flippedCards.length === 2) return;
    
    // Don't allow clicking the same card twice
    if (flippedCards.includes(clickedCard)) return;

    // Flip the card
    const newCards = cards.map(card => {
      if (card.id === clickedCard.id) {
        return { ...card, isFlipped: true };
      }
      return card;
    });
    setCards(newCards);
    
    // Add to flipped cards
    const newFlipped = [...flippedCards, clickedCard];
    setFlippedCards(newFlipped);

    // If we now have 2 cards flipped, check if they match
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      
      // Check for match after a short delay
      setTimeout(() => {
        if (first.symbol === second.symbol) {
          // Match found! Keep cards face up
          console.log("Match found!");
        } else {
          // No match - flip cards back
          setCards(cards.map(card => ({
            ...card,
            isFlipped: false
          })));
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

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

