import React from "react";
import { useState } from "react";
import GameCard from "./GameCard";

function Games({ proizvodi, addFavorite }) {
  const [sortiranje, setSortiranje] = useState("none");

  function handleSort(e) {
    // console.log(e.target.value);
    setSortiranje(e.target.value);
  }

  return (
    <>
      <div className="sortiranje">
        <label htmlFor="sort">Sortiranje: </label>
        <select name="sort" id="sort" className="sort" onChange={handleSort}>
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
                  inFav={false}
                />
              ))
          : proizvodi.map((prod) => (
              <GameCard
                proizvod={prod}
                key={prod.id}
                addFavorite={addFavorite}
                inFav={false}
              />
            ))}
      </div>
    </>
  );
}

export default Games;
