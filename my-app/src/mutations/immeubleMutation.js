import gql from "graphql-tag"

const CREATION_IMMEUBLE = gql`
  mutation CREATION_IMMEUBLE($nom: String!, $adresse: String!) {
    createImmeuble(nom: $nom, adresse: $adresse)
  }
`

const AJOUTER_APPARTEMENT_TO_IMMEUBLE = gql`
  mutation AJOUTER_IMMEUBLE_TO_VILLE($_id: ID!, $idApp: ID!) {
    ajouterAppartementIDToImmeuble(_id: $_id, idApp: $idApp) {
      _id
      nom
      adresse
      appartements {
        numero
        nbPieces
      }
    }
  }
`

const DELETE_IMMEUBLE = gql`
  mutation DELETE_IMMEUBLE($_id: ID!) {
    deleteImmeuble(_id: $_id)
  }
`

export { CREATION_IMMEUBLE, AJOUTER_APPARTEMENT_TO_IMMEUBLE, DELETE_IMMEUBLE }
