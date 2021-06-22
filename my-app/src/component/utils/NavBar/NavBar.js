import React, { Component } from "react"
import { Link } from "react-router-dom"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Drawer from "@material-ui/core/Drawer"
import HomeIcon from "@material-ui/icons/Home"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import ApartmentIcon from "@material-ui/icons/Apartment"
import HomeWorkIcon from "@material-ui/icons/HomeWork"
import "./NavBar.css"

class Navbar extends Component {
  render() {
    return (
      <Drawer variant="permanent" anchor="top" style={{ marginBottom: "2%" }}>
        <Divider />
        <List style={{ display: "flex", flexDirection: "row" }}>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem button component={Link} to="/villes">
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary={"Villes"} />
          </ListItem>
          <ListItem button component={Link} to="/immeubles">
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary={"Immeubles"} />
          </ListItem>
          <ListItem button component={Link} to="/appartements">
            <ListItemIcon>
              <HomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary={"Appartements"} />
          </ListItem>
        </List>
      </Drawer>

      // <nav>
      //   <ul className="nav-list">
      //     <li>
      //       <Link to="/">Home</Link>
      //     </li>
      //     <li>
      //       <Link to="/villes">Villes</Link>
      //     </li>
      //     <li>
      //       <Link to="/immeubles">Immeubles</Link>
      //     </li>
      //     <li>
      //       <Link to="/appartements">Appartements</Link>
      //     </li>
      //   </ul>
      // </nav>
    )
  }
}

export default Navbar
