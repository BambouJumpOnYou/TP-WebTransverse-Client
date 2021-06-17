import React, { Component } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_ALL_IMMEUBLES } from "../../queries/immeubleQuery"
import { AppartementCard } from "../appartementCard/AppartementCard"
import "./AppartementDisplay.css"

let tab = []
function DisplayApp() {
  const { loading, error, data } = useQuery(GET_ALL_IMMEUBLES)

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
              <AppartementCard appartements={app} />
            </>
          )
        })
      })
    })
    return tab
  }
}
class AppartementDisplay extends Component {
  render() {
    return (
      <div className="contentAppDisplay">
        <button className="buttonAdd">Ajouter une ville</button>
        <DisplayApp />
      </div>
    )
  }
}

export default AppartementDisplay
