import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./headers/headers";
import Accueil from "./Accueil/accueil";
import Lieu from "./Lieu/Lieu";
import Formulaire from "./formulaire/formulaire";
import Programme from "./programme/Programme";
function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Accueil></Accueil>
      <Lieu></Lieu>
      <Formulaire></Formulaire>
      <Programme></Programme>
    </div>
  );
}

export default App;
