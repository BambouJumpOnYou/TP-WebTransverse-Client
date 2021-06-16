import gql from "graphql-tag"

const GET_ALL_APPARTEMENTS = gql`
  query GET_ALL_APPARTEMENTS {
    villes {
      immeubles {
        appartements {
          numero
          nbPieces
        }
      }
    }
  }
`

export { GET_ALL_APPARTEMENTS }
