import gql from "graphql-tag"

const GET_VILLES_ASSERT = gql`
  query GET_VILLES_ASSERT {
    villeSchemaAssert
  }
`

const GET_VILLE_ID = gql`
  query GET_VILLE_ID($id: ID!) {
    ville(_id: $id) {
      nom
      codePostal
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

const GET_ALL_VILLES = gql`
  query GET_ALL_VILLES {
    villes{
      _id
      nom
      codePostal
      immeubles{
        nom
        adresse
        appartements{
          numero
          nbPieces
        }
      }
    }
  }
`

export { GET_VILLES_ASSERT, GET_VILLE_ID, GET_ALL_VILLES }
