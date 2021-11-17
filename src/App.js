import "fontsource-roboto";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import MainBar from "./Components/MainBar";
import Page from "./Components/Page";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/gql",
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MainBar />
      <Page />
    </ApolloProvider>
  );
}

export default App;
