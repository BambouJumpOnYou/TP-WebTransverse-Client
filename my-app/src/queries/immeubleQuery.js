import gql from "graphql-tag"

const GET_IMMEUBLES_BY_VILLE = gql`
  query GET_VILLE_ID($id: ID!) {
    ville(_id: $id) {
      immeubles {
        nom
        adresse
        appartements {
          numero
          nbPieces
        }
      }
    }
  }
`

export { GET_IMMEUBLES_BY_VILLE }
