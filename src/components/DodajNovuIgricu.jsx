import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function DodajNovuIgricu({ handleDodaj, duzinaNiza }) {
  const [userData, setUserData] = useState({
    id: duzinaNiza + 1,
    naziv: "",
    opis: "",
    kategorija: "",
    cena: "",
    slika: "",
    favorite: false,
  });

  function handleInput(e) {
    let novaIgrica = userData;
    novaIgrica[e.target.name] = e.target.value;

    setUserData(novaIgrica);
  }

  // function handleDodaj(e){
  //   console.log("ajmooo");
  //   console.log(e);
  //   // axios.post("http://localhost:3000/novaigra", userData).then((res) => {
  //   //   console.log(res.data);
  //   // }).catch((e)=>{
  //   //   console.log(e);
  //   // });
  // }

  return (
    <div className="page-wrapper pozadina-gr p-t-30 p-b-30">
      <div className="cont-black">
        <h2 className="title">DODAJ NOVU IGRICU</h2>

        <form id="novaKartica">
          <div className="grupa">
            <label htmlFor="naziv" className="lbl">
              Naziv
            </label>
            <input
              type="text"
              name="naziv"
              id="naziv"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              // value="naziv"
              onInput={handleInput}
            />
          </div>
          <div className="grupa">
            <label htmlFor="opis" className="lbl">
              Opis
            </label>
            <input
              type="text"
              name="opis"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
            />
          </div>
          <div className="grupa">
            <label htmlFor="kategorija" className="lbl">
              Kategorija
            </label>
            <input
              type="text"
              name="kategorija"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
            />
          </div>
          <div className="grupa">
            <label htmlFor="slika" className="lbl">
              Slika
            </label>
            <input
              type="text"
              name="slika"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
            />
          </div>

          <div className="p-t-20 grupa">
            <Link to="/">
              <input
                className="btn btn-inpt purple"
                // type="submit"
                value="Potvrdi"
                readOnly
                onClick={() => {
                  handleDodaj(userData);
                }}
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DodajNovuIgricu;
