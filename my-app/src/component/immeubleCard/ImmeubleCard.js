import React, { useState } from "react"
import rm from "../../cross.png"
import { useQuery, useMutation } from "@apollo/react-hooks"
import {
  AJOUTER_APPARTEMENT_TO_IMMEUBLE,
  DELETE_IMMEUBLE,
} from "../../mutations/immeubleMutation"
import "./ImmeubleCard.css"
import "../utils/common.css"
import { GET_ALL_APPARTEMENTS } from "../../queries/appartementQuery"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"

let tabApp = []

function GenerateListImmeuble() {
  const { loading, error, data } = useQuery(GET_ALL_APPARTEMENTS)
  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tabApp = []
    data.appartements.forEach((app) => {
      tabApp.push(app)
    })
    return null
  }
}

export const ImmeubleCard = (props) => {
  const [open, setOpen] = useState(false)
  const [idImm, setIdImm] = useState(props.immeubles._id)
  const [idApp, setIdApp] = useState("")
  const [addApp] = useMutation(AJOUTER_APPARTEMENT_TO_IMMEUBLE)
  const [delImm] = useMutation(DELETE_IMMEUBLE)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addApp({ variables: { _id: idImm, idApp: idApp } })
    setIdApp("")
    handleClose()
  }

  const handleChangeAppartement = (event) => {
    setIdApp(event.target.value)
  }

  const handleDelete = () => {
    delImm({ variables: { _id: idImm } })
  }

  return (
    <div className={"card cardImm"}>
      <img
        src={rm}
        style={{ height: 25, width: 25, marginLeft: "auto", padding: "1%" }}
        alt="rm"
        onClick={handleDelete}
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
      <Button
        variant="contained"
        style={{ width: "50%", marginLeft: "auto", marginRight: "2%" }}
        onClick={handleClickOpen}
      >
        Ajouter un appartement à cet immeuble
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={onSubmit}>
          <DialogTitle id="form-dialog-title">
            Ajouter un appartement à cet immeuble
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="select-appartement-label">Appartement</InputLabel>
              <Select
                labelId="select-appartement-label"
                id="select-appartement"
                value={idApp}
                onChange={handleChangeAppartement}
              >
                {tabApp
                  ? tabApp.map((app) => {
                      return (
                        <MenuItem value={app._id}>
                          {app.numero} {app.nbPieces}
                        </MenuItem>
                      )
                    })
                  : null}
              </Select>
            </FormControl>
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
      <GenerateListImmeuble />
    </div>
  )
}
