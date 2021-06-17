import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/villes">Villes</Link>
          </li>
          <li>
            <Link to="/immeubles">Immeubles</Link>
          </li>
          <li>
            <Link to="/appartements">Appartements</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
