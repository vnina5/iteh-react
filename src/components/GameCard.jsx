import React from "react";
import { useState } from "react";
import {
  FaPencilAlt,
  FaTrashAlt,
  FaCartPlus,
  FaRegStar,
  FaStar,
  FaWindowClose,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const GameCard = ({ proizvod, addFavorite, removeFavorite, inFav }) => {
  const [hide, setHide] = useState(false);
  let fav = proizvod.favorite;

  return (
    <div className={hide == false ? "card" : "hide"}>
      <div className="card-header">
        <img src={proizvod.slika} alt=""></img>
      </div>

      <div className="card-body">
        <div className="category">{proizvod.kategorija}</div>
        <br />
        <h4 className="naslov">{proizvod.naziv}</h4>
        <br />
        <p className="opis">{proizvod.opis}</p>
        <br />
        {/* <p className="cena">
          <strong>$ {proizvod.cena}</strong>
        </p> */}
        <div>
          {!inFav ? (
            <>
              <button
                type="button"
                className="btn btn-custom pink"
                onClick={() => addFavorite(proizvod.id)}
              >
                {fav ? <FaStar /> : <FaRegStar />}
              </button>

              <button
                type="button"
                className="btn btn-custom blue"
                onClick={() => {
                  setHide(true);
                }}
              >
                <FaTrashAlt />
              </button>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-custom purple"
              onClick={() => removeFavorite(proizvod.id)}
            >
              <CgClose />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
