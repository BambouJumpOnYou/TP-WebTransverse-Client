import React, { Component } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_ALL_VILLES } from "../../queries/villeQuery"
import { HomeCard } from "../homeCard/HomeCard"

let tab = []

// Your first graphql hooks
function DisplayAll() {
  const { loading, error, data } = useQuery(GET_ALL_VILLES)

  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tab = []
    let i = 0
    data.villes.forEach((ville) => {
      ville.immeubles.forEach((imm) => {
        imm.appartements.forEach((app) => {
          tab.push(
            <HomeCard
              key={i}
              ville={ville}
              immeubles={imm}
              appartements={app}
            />
          )
          i++
        })
      })
    })
    return tab
  }
}

class HomeDisplay extends Component {
  render() {
    return <DisplayAll />
  }
}

export default HomeDisplay
