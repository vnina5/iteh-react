import React from "react";
import { useState } from "react";
import GameCard from "./GameCard";

function Games({ proizvodi, addFavorite }) {
  const [sortiranje, setSortiranje] = useState("none");

  function handleSort(e) {
    console.log(e.target.value);
    setSortiranje(e.target.value);
  }

  return (
    <>
      <div className="sortiranje">
        <label htmlFor="cena">Sortiranje: </label>
        <select name="cena" id="cena" className="sort" onChange={handleSort}>
          <option value="none">Podrazumevano</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>

      <div className="container" id="kontejner">
        {sortiranje == "asc"
          ? proizvodi
              .sort((a, b) => (a.naziv < b.naziv ? -1 : 1))
              .map((prod) => (
                <GameCard
                  proizvod={prod}
                  key={prod.id}
                  addFavorite={addFavorite}
                  inFav={false}
                />
              ))
          : sortiranje == "desc"
          ? proizvodi
              .sort((a, b) => (a.naziv < b.naziv ? 1 : -1))
              .map((prod) => (
                <GameCard
                  proizvod={prod}
                  key={prod.id}
                  addFavorite={addFavorite}
                />
              ))
          : proizvodi.map((prod) => (
              <GameCard
                proizvod={prod}
                key={prod.id}
                addFavorite={addFavorite}
              />
            ))}
      </div>
    </>
  );
}

export default Games;
