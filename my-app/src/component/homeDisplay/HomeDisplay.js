import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_VILLE_ID } from "../../queries/villeQuery"

// Your first graphql hooks
function CheckConfig() {
  const { loading, error, data, networkStatus } = useQuery(GET_VILLE_ID, {variables: {id: '60a572d5f35096205030e5d5'}});

  if (loading) return <span className="status-warning">LOADING</span>;
  if (error) return <span className="status-error">{error.message}</span>;
  if(data){
    console.log(data)
  }
  return <span className="status-ok">OK</span>;
}

class HomeDisplay extends Component {
  render() {
    return (
      <>
        <div>This is the home page.</div>
        <p>
          GraphQL status: <CheckConfig />
        </p>
      </>
    );
  }
}

export default HomeDisplay;
