import "fontsource-roboto";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import MainBar from "./Components/MainBar";
import Page from "./Components/Page";

const httpLink = new HttpLink({
  uri: "https://stage.gql.101internet.ru",
  fetch: fetch,
});

const customLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: "Basic MTAxaW50ZXI6dGVzdDEwMQ==",
    },
  };
});

const client = new ApolloClient({
  link: customLink.concat(httpLink),
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
