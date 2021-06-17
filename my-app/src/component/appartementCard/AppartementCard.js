import React from "react"
import rm from "../../cross.png"
import "./AppartementCard.css"
import "../utils/common.css"

export const AppartementCard = (props) => {
  return (
    <div className={"card cardApp"}>
      <img
        src={rm}
        style={{ height: 25, width: 25, marginLeft: "auto", padding: "1%" }}
        alt="rm"
      />
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
    </div>
  )
}
