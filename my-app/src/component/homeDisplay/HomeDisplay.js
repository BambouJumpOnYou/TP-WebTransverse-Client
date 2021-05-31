import React, { Component } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_VILLE_ID } from "../../queries/villeQuery"

let tab = []

// Your first graphql hooks
function CheckConfig() {
  const { loading, error, data, networkStatus } = useQuery(GET_VILLE_ID, {
    variables: { id: "60a572d5f35096205030e5d5" },
  })

  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    data.ville.immeubles.map((imm) => {
      imm.appartements.map((app) => {
        tab.push(
          <>
            <br />
            <br />
            <br />
            <span>Nom : {data.ville.nom}</span>
            <br />
            <span>Code postal : {data.ville.codePostal}</span>
            <br />
            <span>Nom immeuble : {imm.nom}</span>
            <br />
            <span>Adresse immeuble: {imm.adresse}</span>
            <br />
            <span>Appartement numero : {app.numero}</span>
            <br />
            <span>Appartement nbPieces : {app.nbPieces}</span>
            <br />
            <br />
            <br />
          </>
        )
      })
    })
    return tab
  }
  return <span className="status-ok">OK</span>
}

class HomeDisplay extends Component {
  render() {
    return (
      <>
        <div>This is the home page.</div>
        <p>
          GraphQL status: <CheckConfig />
        </p>
      </>
    )
  }
}

export default HomeDisplay
