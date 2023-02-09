import "./App.css";
import "./Main.css";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Footer from "./components/Footer";
import DodajNovuIgricu from "./components/DodajNovuIgricu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Omiljeno from "./components/Omiljeno";

function App() {
  const [fav, setFav] = useState([]);

  const [niz, setNiz] = useState([
    {
      id: 1,
      naziv: "FIFA 23",
      opis: "FIFA 23 is a football video game published by Electronic Arts. It is the 30th installment in the FIFA series that is developed by EA Sports, and the final installment under the FIFA banner.",
      kategorija: "Sport",
      cena: 80.25,
      slika:
        "https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png",
      favorite: false,
    },
    {
      id: 2,
      naziv: "SIMS 4",
      opis: "The Sims 4 is a social simulation game developed by Maxis and published by Electronic Arts. It is the fourth major title in The Sims series, and is the sequel to The Sims 3 (2009).",
      kategorija: "Zabava",
      cena: 90.99,
      slika:
        "https://assets-prd.ignimgs.com/2022/11/01/the-sims-4-1667312977731.jpg",
      favorite: false,
    },
    {
      id: 3,
      naziv: "MINECRFT",
      opis: "Minecraft is a sandbox game developed by Mojang Studios. The game was created by Markus Notch Persson in the Java programming language. ",
      kategorija: "Zabava",
      cena: 50.99,
      slika:
        "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
      favorite: false,
    },
    {
      id: 4,
      naziv: "NBA 2K23",
      opis: "NBA 2K23 is a basketball video game developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). ",
      kategorija: "Sport",
      cena: 99.99,
      slika:
        "https://assets.2k.com/1a6ngf98576c/aJr72dhZ0T5pPPOut92oZ/fd57ea3ee5e28452faa1f24d72d3f9a7/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-STD_EDITION-425x535.jpg",
      favorite: false,
    },
    {
      id: 5,
      naziv: "FORTNITE",
      opis: "Fortnajt je onlajn video-igra preživljavanja razvijena od strane studija Epic Games. ",
      kategorija: "Akcija",
      cena: 119.99,
      slika:
        "https://assets1.ignimgs.com/2018/03/06/fortnite---button-1520296499714.jpg",
      favorite: false,
    },
  ]);

  // const [userData, setUserData] = useState({
  //   id: niz.length + 1,
  //   naziv: "",
  //   opis: "",
  //   kategorija: "",
  //   cena: "",
  //   slika: "",
  //   favorite: false,
  // });

  // function handleInput(e) {
  //   let novaIgrica = userData;
  //   novaIgrica[e.target.name] = e.target.value;
  //   // console.log(novaIgrica);
  //   // novaIgrica.id = niz.length + 1;
  //   setUserData(novaIgrica);
  //   // console.log(novaIgrica);
  // }

  let duzinaNiza = niz.length;

  function handleDodaj(userData) {
    // niz[niz.length+1] = userData;
    let noviNiz = niz;
    noviNiz[noviNiz.length] = userData;
    setNiz(noviNiz);
    console.log(niz);
  }

  function addFavorite(id) {
    niz.forEach((i) => {
      if (i.id === id) {
        i.favorite = true;
        console.log("favoriteee " + id);
      }
    });
    refreshFav();
  }

  function removeFavorite(id) {
    niz.forEach((i) => {
      if (i.id === id) {
        i.favorite = false;
        console.log("nijee favoriteee " + id);
      }
    });
    refreshFav();
  }

  function refreshFav() {
    let favProizvod = niz.filter((proizvod) => proizvod.favorite == true);
    setFav(favProizvod);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Games proizvodi={niz} addFavorite={addFavorite} />}
        />
        <Route
          path="/omiljeno"
          element={<Omiljeno proizvodi={fav} removeFavorite={removeFavorite} />}
        />
        <Route
          path="/novaigra"
          element={
            <DodajNovuIgricu
              // handleInput={handleInput}
              handleDodaj={handleDodaj}
              duzinaNiza={duzinaNiza}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
