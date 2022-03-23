import React from "react";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import HomeContainer from './container/HomeContainer/HomeContainer';


const client = new ApolloClient({
  link: new HttpLink({
    // uri: "https://48p1r2roz4.sse.codesandbox.io",
    uri: "https://countries.trevorblades.com"
  }),
  cache: new InMemoryCache()
});

function App() {

  console.log(client)
  return (
    <ApolloProvider client={client}>
      <HomeContainer/>
    </ApolloProvider>
  );
}

export default App;
