import React from "react"

export const ImmeubleCard = (props) => {
  return (
    <div className={"ma_div"}>
      <span>
        <b>Nom immeuble</b> : {" "}
        <span className={"texte"}>{props.immeubles.nom}</span>
      </span>
      <br />
      <span>
        <b>Adresse immeuble</b> : {" "}
        <span className={"texte"}>{props.immeubles.adresse}</span>
      </span>
      <br />
    </div>
  )
}
