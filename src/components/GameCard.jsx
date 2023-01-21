import React from "react";

const GameCard = ({ proizvod }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={proizvod.slika} alt=""></img>
      </div>
      <div className="card-body">
        <div className="category">{proizvod.kategorija}</div>
        <br />
        <h4 className="naslov">{proizvod.naslov}</h4>
        <p className="opis">{proizvod.opis}</p>
        <p className="cena">
          <strong>$ {proizvod.cena}</strong>
        </p>

        <button type="button" className="btn btn-custom">
          Uredi
        </button>
        <button type="button" className="btn btn-custom obrisi">
          Obriši
        </button>
      </div>
    </div>
  );
};

export default GameCard;
