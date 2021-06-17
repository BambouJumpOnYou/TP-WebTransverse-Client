import React, { Component } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_ALL_IMMEUBLES } from "../../queries/immeubleQuery"
import { ImmeubleCard } from "../immeubleCard/ImmeubleCard"
import "./ImmeubleDisplay.css"

let tab = []
function DisplayImm() {
  const { loading, error, data } = useQuery(GET_ALL_IMMEUBLES)

  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tab = []
    console.log(data)
    data.villes.forEach((ville) => {
      ville.immeubles.forEach((imm) => {
        tab.push(
          <>
            <ImmeubleCard immeubles={imm} />
          </>
        )
      })
    })
    return tab
  }
}
class ImmeubleDisplay extends Component {
  render() {
    return (
      <div className="contentImmDisplay">
        <button className="buttonAdd">Ajouter une ville</button>
        <DisplayImm />
      </div>
    )
  }
}

export default ImmeubleDisplay
