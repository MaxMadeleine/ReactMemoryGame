import React from "react";

function Card({ card, onClick }) {
  return (
    <div
      onClick={onClick} // Når spilleren klikker, kaldes onClick-funktionen
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: card.flipped || card.matched ? "white" : "gray", // Skift farve afhængigt af kortets status
        border: "1px solid black",
        fontSize: "24px",
        cursor: "pointer",
      }}
    >
      {/* Hvis kortet er vendt eller matchet, vis symbol; ellers vis "?" */}
      {card.flipped || card.matched ? card.symbol : "?"}
    </div>
  );
}

export default Card;
