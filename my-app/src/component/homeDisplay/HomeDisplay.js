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
    console.log(data)
    data.villes.forEach((ville) => {
      ville.immeubles.forEach((imm) => {
        imm.appartements.forEach((app) => {
          console.log("Ville ")
          console.log(ville)
          console.log("Imm ")
          console.log(imm)
          console.log("App ")
          console.log(app)
          tab.push(
            <>
              <HomeCard ville={ville} immeubles={imm} appartements={app} />
            </>
          )
        })
      })
    })
    return tab
  }
}

class HomeDisplay extends Component {
  render() {
    return (
      <>
        {/* <div>This is the home page.</div> */}
        <DisplayAll />
      </>
    )
  }
}

export default HomeDisplay
