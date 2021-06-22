import React from "react"
import "./App.css"
import { Switch, Route } from "react-router-dom"
import AppartementDisplay from "./component/appartementDisplay/AppartementDisplay"
import ImmeubleDisplay from "./component/immeubleDisplay/ImmeubleDisplay"
import HomeDisplay from "./component/homeDisplay/HomeDisplay"
import VilleDisplay from "./component/villeDisplay/VilleDisplay"
import Navbar from "./component/utils/NavBar/NavBar"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Navbar />
      <div className={classes.toolbar} />
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
        <Route path="/villes">
          <VilleDisplay />
        </Route>
        <Route path="/immeubles">
          <ImmeubleDisplay />
        </Route>
        <Route path="/appartements">
          <AppartementDisplay />
        </Route>
        <Route path="/">
          <HomeDisplay />
        </Route>
      </Switch>
    </div>
  )
}

export default App
