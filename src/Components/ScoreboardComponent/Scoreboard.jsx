import React from "react";

function Scoreboard({ moves }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Vis antal træk */}
      <h2>Moves: {moves}</h2>
    </div>
  );
}

export default Scoreboard;
