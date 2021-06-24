import React, { useState } from "react"
import rm from "../../cross.png"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { GET_ALL_IMMEUBLES } from "../../queries/immeubleQuery"
import {
  AJOUTER_IMMEUBLE_TO_VILLE,
  DELETE_VILLE,
} from "../../mutations/villeMutation"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import "./VilleCard.css"

let tabImmeuble = []

function GenerateListImmeuble() {
  const { loading, error, data } = useQuery(GET_ALL_IMMEUBLES)
  if (loading) return <span className="status-warning">LOADING</span>
  if (error) return <span className="status-error">{error.message}</span>
  if (data) {
    tabImmeuble = []
    data.immeubles.forEach((imm) => {
      tabImmeuble.push(imm)
    })
    return null
  }
}

export const VilleCard = (props) => {
  const [open, setOpen] = useState(false)
  const [idVille] = useState(props.ville._id)
  const [idImm, setIdImm] = useState("")
  const [addImm] = useMutation(AJOUTER_IMMEUBLE_TO_VILLE)
  const [delVille] = useMutation(DELETE_VILLE)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addImm({ variables: { _id: idVille, idImm: idImm } })
    setIdImm("")
    handleClose()
  }

  const handleChangeImmeuble = (event) => {
    setIdImm(event.target.value)
  }

  const handleDelete = () => {
    delVille({ variables: { _id: idVille } })
  }

  return (
    <div className={"card cardVille"}>
      <img
        src={rm}
        style={{ height: 25, width: 25, marginLeft: "auto", padding: "1%" }}
        alt="rm"
        onClick={handleDelete}
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
      <Button
        variant="contained"
        style={{ width: "50%", marginLeft: "auto", marginRight: "2%" }}
        onClick={handleClickOpen}
      >
        Ajouter un immeuble à cette ville
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={onSubmit}>
          <DialogTitle id="form-dialog-title">
            Ajouter un immeuble à cette ville
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="select-immeuble-label">Immeuble</InputLabel>
              <Select
                labelId="select-immeuble-label"
                id="select-immeuble"
                value={idImm}
                onChange={handleChangeImmeuble}
              >
                {tabImmeuble
                  ? tabImmeuble.map((imm) => {
                      return <MenuItem value={imm._id}>{imm.nom}</MenuItem>
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
