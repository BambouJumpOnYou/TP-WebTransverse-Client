import React, { Component } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_ALL_VILLES } from "../../queries/villeQuery"
import { VilleCard } from "../villeCard/VilleCard"

let tab = []

// Your first graphql hooks
function DisplayAll() {
  const { loading, error, data } = useQuery(GET_ALL_VILLES)

  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tab = []
    console.log(data)
    data.villes.forEach((ville) => {
      ville.immeubles.forEach((imm) => {
        imm.appartements.forEach((app) => {
          tab.push(
            <>
              <VilleCard ville={ville} />
            </>
          )
        })
      })
    })
    return tab
  }
}

class VilleDisplay extends Component {
  render() {
    return (
      <>
        {/* <div>This is the home page.</div> */}
        <DisplayAll />
      </>
    )
  }
}

export default VilleDisplay
