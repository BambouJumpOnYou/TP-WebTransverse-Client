import React, { useState } from "react"
import rm from "../../cross.png"
import "./AppartementCard.css"
import { DELETE_APPARTEMENT } from "../../mutations/appartementMutation"
import { useMutation } from "@apollo/react-hooks"

export const AppartementCard = (props) => {
  const [idApp] = useState(props.appartements._id)
  const [delApp] = useMutation(DELETE_APPARTEMENT)

  const handleDelete = () => {
    delApp({ variables: { _id: idApp } })
  }

  return (
    <div className={"card cardApp"}>
      <img
        src={rm}
        style={{ height: 25, width: 25, marginLeft: "auto", padding: "1%" }}
        alt="rm"
        onClick={handleDelete}
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
