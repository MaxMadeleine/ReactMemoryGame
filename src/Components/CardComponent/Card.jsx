import React from "react";

function Card({ card, onClick }) {
  if (!card) {
    return null; // Return null if card is undefined
  }

  return (
    <div
      onClick={onClick} 
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: card.flipped || card.matched ? "white" : "gray", 
        border: "1px solid black",
        fontSize: "24px",
        cursor: "pointer",
      }}
    >
      {card.flipped || card.matched ? card.symbol : "?"}
    </div>
  );
}

export default Card;