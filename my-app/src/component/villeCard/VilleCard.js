import React from "react"
import rm from "../../cross.png"
import "./VilleCard.css"
import "../utils/common.css"

export const VilleCard = (props) => {
  return (
    <div className={"card cardVille"}>
      <img
        src={rm}
        style={{ height: 25, width: 25, marginLeft: "auto", padding: "1%" }}
        alt="rm"
      />
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
    </div>
  )
}
