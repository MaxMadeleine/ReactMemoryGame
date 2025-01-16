import React, { useState } from "react";
import Card from "../CardComponent/Card.jsx";

function Board({ cards, setCards, moves, setMoves }) {
  const [selectedCards, setSelectedCards] = useState([]); // Stores the selected cards

  const handleCardClick = (card) => {
    // If the card is already flipped or if two cards are already selected, do nothing
    if (card.flipped || selectedCards.length === 2) {
      return;
    }

    // Flip the card
    card.flipped = true;
    setCards([...cards]); // Update the cards in state

    // Add the card to the selected cards
    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);

    // If two cards are selected, check if they match
    if (newSelectedCards.length === 2) {
      checkForMatch(newSelectedCards);
    }
  };

  const checkForMatch = (selected) => {
    const [firstCard, secondCard] = selected;

    if (firstCard.symbol === secondCard.symbol) {
      // If the cards match, mark them as matched
      firstCard.matched = true;
      secondCard.matched = true;
    } else {
      // If the cards don't match, flip them back after 1 second
      setTimeout(() => {
        firstCard.flipped = false;
        secondCard.flipped = false;
        setCards([...cards]); // Update the cards in state
      }, 500);
    }

    // Clear selected cards and update the number of moves
    setSelectedCards([]);
    setMoves(moves + 1);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
      {/* Render all the cards and attach the click handler */}
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
      ))}
    </div>
  );
}

export default Board;
