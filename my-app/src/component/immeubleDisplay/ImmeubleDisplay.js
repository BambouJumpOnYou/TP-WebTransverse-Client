import React, { useState } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { GET_ALL_IMMEUBLES } from "../../queries/immeubleQuery"
import { ImmeubleCard } from "../immeubleCard/ImmeubleCard"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import "./ImmeubleDisplay.css"
import { CREATION_IMMEUBLE } from "../../mutations/immeubleMutation"

let tab = []
function DisplayImm() {
  const { loading, error, data } = useQuery(GET_ALL_IMMEUBLES)

  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tab = []
    data.immeubles.forEach((imm) => {
      tab.push(<ImmeubleCard key={imm._id} immeubles={imm} />)
    })
    return tab
  }
}
const ImmeubleDisplay = () => {
  const [open, setOpen] = useState(false)
  const [nom, setNom] = useState("")
  const [adresse, setAdresse] = useState("")
  const [addImm] = useMutation(CREATION_IMMEUBLE)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addImm({
      variables: { nom: nom, adresse: adresse },
    })
    setNom("")
    setAdresse("")
    handleClose()
  }

  return (
    <div className="contentImmDisplay">
      <Button
        variant="contained"
        style={{ width: "11%", marginLeft: "auto", marginRight: "1%" }}
        onClick={handleClickOpen}
      >
        Ajouter un immeuble
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={onSubmit}>
          <DialogTitle id="form-dialog-title">Ajouter immeuble</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="nom"
              label="Nom : "
              type="text"
              fullWidth
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <TextField
              margin="dense"
              id="adresse"
              label="Adresse : "
              type="text"
              fullWidth
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
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
      <DisplayImm />
    </div>
  )
}

export default ImmeubleDisplay
