import React from "react"
import "./HomeCard.css"

export const HomeCard = (props) => {
  return (
    <div className={"card cardHome"}>
      {/* <img
        src={rm}
        style={{ height: 25, width: 25, marginLeft: "auto", padding: "1%" }}
        alt="rm"
      /> */}
      <br />
      <span>
        <b>Nom</b> : <span className={"texte"}>{props.ville.nom}</span>
      </span>
      <br />
      <span>
        <b>Code postal</b> :{" "}
        <span className={"texte"}>{props.ville.codePostal}</span>
      </span>
      <br />
      <span>
        <b>Nom immeuble</b> :{" "}
        <span className={"texte"}>{props.immeubles.nom}</span>
      </span>
      <br />
      <span>
        <b>Adresse immeuble</b> :{" "}
        <span className={"texte"}>{props.immeubles.adresse}</span>
      </span>
      <br />
      <span>
        <b>Appartement numero</b> :{" "}
        <span className={"texte"}>{props.appartements.numero}</span>
      </span>
      <br />
      <span>
        <b>Appartement nbPieces</b> :{" "}
        <span className={"texte"}>{props.appartements.nbPieces}</span>
      </span>
      <br />
      <br />
      <br />
    </div>
  )
}
