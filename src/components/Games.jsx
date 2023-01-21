import React from "react";
import GameCard from "./GameCard";

function Games({ proizvodi }) {
  return (
    <div className="container" id="kontejner">
      {proizvodi.map((prod) => (
        <GameCard proizvod={prod} />
      ))}
    </div>
  );
}

export default Games;
