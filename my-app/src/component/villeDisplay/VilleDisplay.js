import React, { useState } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { GET_ALL_VILLES } from "../../queries/villeQuery"
import { CREATION_VILLE } from "../../mutations/villeMutation"
import { VilleCard } from "../villeCard/VilleCard"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import "./VilleDisplay.css"

let tab = []

// Your first graphql hooks
function DisplayVille() {
  const { loading, error, data } = useQuery(GET_ALL_VILLES)
  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tab = []
    data.villes.forEach((ville) => {
      tab.push(<VilleCard key={ville._id} ville={ville} />)
    })
    return tab
  }
}

const VilleDisplay = () => {
  const [open, setOpen] = useState(false)
  const [nom, setNom] = useState("")
  const [codePostal, setCodePostal] = useState("")
  const [addVille] = useMutation(CREATION_VILLE)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addVille({ variables: { nom: nom, codePostal: parseInt(codePostal) } })
    setNom("")
    setCodePostal("")
    handleClose()
  }

  return (
    <div className="contentVilleDisplay">
      {/* <button className="buttonAdd"></button> */}
      <Button
        variant="contained"
        style={{ width: "10%", marginLeft: "auto", marginRight: "1%" }}
        onClick={handleClickOpen}
      >
        Ajouter une ville
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={onSubmit}>
          <DialogTitle id="form-dialog-title">Ajouter ville</DialogTitle>
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
              id="codepostal"
              label="Code postal : "
              type="number"
              fullWidth
              value={codePostal}
              onChange={(e) => setCodePostal(e.target.value)}
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
      <DisplayVille />
    </div>
  )
}

export default VilleDisplay
