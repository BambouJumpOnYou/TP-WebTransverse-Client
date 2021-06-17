import React, { Component } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_ALL_VILLES } from "../../queries/villeQuery"
import { VilleCard } from "../villeCard/VilleCard"
import "./VilleDisplay.css"

let tab = []

// Your first graphql hooks
function DisplayVille() {
  const { loading, error, data } = useQuery(GET_ALL_VILLES)

  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tab = []
    console.log(data)
    data.villes.forEach((ville) => {
      tab.push(
        <>
          <VilleCard ville={ville} />
        </>
      )
    })
    return tab
  }
}

class VilleDisplay extends Component {
  render() {
    return (
      <div className="contentVilleDisplay">
        <button className="buttonAdd">Ajouter une ville</button>
        <DisplayVille />
      </div>
    )
  }
}

export default VilleDisplay
