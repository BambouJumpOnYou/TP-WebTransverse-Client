import gql from "graphql-tag"

const CREATION_VILLE = gql`
  mutation CREATION_VILLE($nom: String!, $codePostal: Int!) {
    createVille(nom: $nom, codePostal: $codePostal)
  }
`

const AJOUTER_IMMEUBLE_TO_VILLE = gql`
  mutation AJOUTER_IMMEUBLE_TO_VILLE($_id: ID!, $idImm: ID!) {
    ajouterImmeubleIDToVille(_id: $_id, idImm: $idImm) {
      _id
      nom
      codePostal
      immeubles {
        nom
        adresse
      }
    }
  }
`

const DELETE_VILLE = gql`
  mutation DELETE_VILLE($_id: ID!) {
    deleteVille(_id: $_id)
  }
`

export { CREATION_VILLE, AJOUTER_IMMEUBLE_TO_VILLE, DELETE_VILLE }
