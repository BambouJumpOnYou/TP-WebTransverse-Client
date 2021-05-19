import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AppartementDisplay from "./component/appartementDisplay/AppartementDisplay";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Project App</h2>
      <p>Offline use ok.</p>
      <p>Now we have to:</p>

      <ul>
        <li>Create the server.</li>
        <li>Check PWA installation.</li>
        <li>Develop the app.</li>
      </ul>

      <Switch>
        <Route path="/appartement">
          <AppartementDisplay />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
