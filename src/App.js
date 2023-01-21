import './App.css';
// import './Main.css';
import Navbar from './components/Navbar';
import Games from './components/Games';
import Footer from './components/Footer';
// import './Main.css';

function App() {

  const niz = [
    { 
      id: 1, 
      naslov: "FIFA 23",
      opis: "FIFA 23 is a football video game published by Electronic Arts. It is the 30th installment in the FIFA series that is developed by EA Sports, and the final installment under the FIFA banner.", 
      kategorija: "Sport",
      cena: 80.25,
      slika: "https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png",
      kolicina: 0, 
    },
    { 
      id: 2, 
      naslov: "SIMS 4",
      opis: "The Sims 4 is a social simulation game developed by Maxis and published by Electronic Arts. It is the fourth major title in The Sims series, and is the sequel to The Sims 3 (2009).", 
      kategorija: "Zabava",
      cena: 90.99,
      slika: "https://assets-prd.ignimgs.com/2022/11/01/the-sims-4-1667312977731.jpg",
      kolicina: 0, 
    },
    { 
      id: 3, 
      naslov: "MINECRFT",
      opis: "Minecraft is a sandbox game developed by Mojang Studios. The game was created by Markus Notch Persson in the Java programming language. ", 
      kategorija: "Zabava",
      cena: 50.99,
      slika: "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
      kolicina: 0, 
    },
    { 
      id: 4, 
      naslov: "NBA 2K23",
      opis: "NBA 2K23 is a basketball video game developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). ", 
      kategorija: "Sport",
      cena: 99.99,
      slika: "https://assets.2k.com/1a6ngf98576c/aJr72dhZ0T5pPPOut92oZ/fd57ea3ee5e28452faa1f24d72d3f9a7/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-STD_EDITION-425x535.jpg",
      kolicina: 0, 
    },
  ];

  
  return (

    <div>
      <Navbar />
      <Games proizvodi={niz}/>
      <Footer />
    </div>
    
  );
}

export default App;
