import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AppartementDisplay from "./component/appartementDisplay/AppartementDisplay";
import ImmeubleDisplay from "./component/immeubleDisplay/ImmeubleDisplay";
import HomeDisplay from "./component/homeDisplay/HomeDisplay";
import VilleDisplay from "./component/villeDisplay/VilleDisplay";
import Navbar from "./component/utils/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <img src={logo} className="App-logo" alt="logo" />
      <h2>Project App</h2>
      <p>Offline use ok.</p>
      <p>Now we have to:</p>

      <ul>
        <li>Create the server.</li>
        <li>Check PWA installation.</li>
        <li>Develop the app.</li>
      </ul> */}

      <Switch>
        <Route path="/home">
          <HomeDisplay />
        </Route>
        <Route path="/villes">
          <VilleDisplay />
        </Route>
        <Route path="/appartements">
          <AppartementDisplay />
        </Route>
        <Route path="/immeubles">
          <ImmeubleDisplay />
        </Route>
      </Switch>

      <Navbar />
    </div>
  );
}

export default App;
