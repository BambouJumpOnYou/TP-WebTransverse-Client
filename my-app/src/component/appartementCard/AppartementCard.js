import React from "react"

export const AppartementCard = (props) => {
  return (
    <div className={"ma_div"}>
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
