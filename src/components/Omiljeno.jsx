import React from "react";
import GameCard from "./GameCard";

function Omiljeno({ proizvodi, removeFavorite }) {
  return (
    <>
      <div className="naslov-fav">
        <h2>Moje omiljene igre</h2>
        <div className="crta"></div>
      </div>
      <div className="container" id="kontejner">
        {proizvodi.map((prod) => (
          <GameCard
            proizvod={prod}
            key={prod.id}
            removeFavorite={removeFavorite}
            inFav={true}
          />
        ))}
      </div>
    </>
  );
}

export default Omiljeno;
