import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

client.query({
  query: gql`
  query Assert{
    villeSchemaAssert
  } 
  `
})
.then(result => console.log("Reponse from graphql:", result));

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
