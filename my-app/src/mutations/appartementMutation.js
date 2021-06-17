import gql from "graphql-tag"

const CREATION_APPARTEMENT = gql`
  mutation CREATION_APPARTEMENT($numero: Int!, $nbPieces: Int!) {
    createAppartement(numero: $numero, nbPieces: $nbPieces)
  }
`

const DELETE_APPARTEMENT = gql`
  mutation DELETE_APPARTEMENT($_id: ID!) {
    deleteAppartement(_id: $id)
  }
`

export { CREATION_APPARTEMENT, DELETE_APPARTEMENT }
