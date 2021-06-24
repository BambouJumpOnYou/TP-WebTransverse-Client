import React, { useState } from "react"
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
import IconButton from "@material-ui/core/IconButton"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import "./NavBar.css"

const Navbar = () => {
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <>
      <IconButton
        onClick={handleDrawerOpen}
        style={{ backgroundColor: "white", marginTop: "1%" }}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="top"
        style={{ marginBottom: "2%" }}
        open={open}
      >
        <IconButton onClick={handleDrawerClose}>
          <KeyboardArrowUpIcon />
        </IconButton>
        <Divider />
        <List className="nav-bar">
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
    </>
  )
}

export default Navbar
