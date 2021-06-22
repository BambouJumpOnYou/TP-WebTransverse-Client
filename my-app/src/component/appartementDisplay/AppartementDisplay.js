import React, { useState } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { GET_ALL_APPARTEMENTS } from "../../queries/appartementQuery"
import { CREATION_APPARTEMENT } from "../../mutations/appartementMutation"
import { AppartementCard } from "../appartementCard/AppartementCard"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"

import "./AppartementDisplay.css"

let tab = []
function DisplayApp() {
  const { loading, error, data } = useQuery(GET_ALL_APPARTEMENTS)

  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tab = []
    console.log(data)
    data.appartements.forEach((app) => {
      tab.push(<AppartementCard appartements={app} />)
    })
    return tab
  }
}
const AppartementDisplay = () => {
  const [open, setOpen] = useState(false)
  const [numero, setNumero] = useState("")
  const [nbPieces, setNbPieces] = useState("")
  const [addApp] = useMutation(CREATION_APPARTEMENT)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addApp({
      variables: { numero: parseInt(numero), nbPieces: parseInt(nbPieces) },
    })
    setNumero("")
    setNbPieces("")
    handleClose()
  }

  return (
    <div className="contentAppDisplay">
      <Button
        variant="contained"
        style={{ width: "13%", marginLeft: "auto", marginRight: "1%" }}
        onClick={handleClickOpen}
      >
        Ajouter un appartement
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={onSubmit}>
          <DialogTitle id="form-dialog-title">Ajouter appartement</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="numero"
              label="Numero : "
              type="number"
              fullWidth
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <TextField
              margin="dense"
              id="nbPieces"
              label="Nombre de pièces : "
              type="number"
              fullWidth
              value={nbPieces}
              onChange={(e) => setNbPieces(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="primary">
              Annuler
            </Button>
            <Button type="submit" color="primary">
              Ajouter
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <DisplayApp />
    </div>
  )
}

export default AppartementDisplay
