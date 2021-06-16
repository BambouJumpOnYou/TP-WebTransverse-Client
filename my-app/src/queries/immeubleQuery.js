import gql from "graphql-tag"

const GET_ALL_IMMEUBLES = gql`
  query GET_ALL_IMMEUBLES {
    villes {
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

const GET_IMMEUBLES_BY_VILLE = gql`
  query GET_IMMEUBLES_BY_VILLE($id: ID!) {
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

export { GET_IMMEUBLES_BY_VILLE, GET_ALL_IMMEUBLES }
