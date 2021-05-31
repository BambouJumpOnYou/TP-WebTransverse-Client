import gql from "graphql-tag";

const GET_VILLES_ASSERT = gql`
    query GET_VILLES_ASSERT{
        villeSchemaAssert
    }`

const GET_VILLE_ID = gql`
    query GET_VILLE_ID($id: ID!){
        ville(_id: $id){
            nom
            codePostal
        }
    }`

export { GET_VILLES_ASSERT, GET_VILLE_ID }
