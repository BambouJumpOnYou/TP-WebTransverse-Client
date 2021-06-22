import gql from "graphql-tag"

const GET_ALL_APPARTEMENTS = gql`
  query GET_ALL_APPARTEMENTS {
    appartements {
      _id
      numero
      nbPieces
    }
  }
`

export { GET_ALL_APPARTEMENTS }
