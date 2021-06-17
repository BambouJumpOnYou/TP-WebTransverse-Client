import React from "react"
import rm from "../../cross.png"
import "./ImmeubleCard.css"
import "../utils/common.css"

export const ImmeubleCard = (props) => {
  return (
    <div className={"card cardImm"}>
      <img
        src={rm}
        style={{ height: 25, width: 25, marginLeft: "auto", padding: "1%" }}
        alt="rm"
      />
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
    </div>
  )
}
