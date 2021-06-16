import React, { Component } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_ALL_IMMEUBLES } from "../../queries/immeubleQuery"
import { ImmeubleCard } from "../immeubleCard/ImmeubleCard"


let tab = []
function DisplayAll() {
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
              <ImmeubleCard immeubles={imm} />
            </>
          )
        })
      })
    })
    return tab
  }
}
class ImmeubleDisplay extends Component {
  render() {
    return (
      <>
        {/* <div>This is the home page.</div> */}
        <DisplayAll />
      </>
    )
  }
}

export default ImmeubleDisplay
