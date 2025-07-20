import { ApolloClient, InMemoryCache } from "@apollo/client";

const gqlClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined", // Disable SSR mode on the client side
  connectToDevTools: true, // Enable Apollo Client DevTools
});

export default gqlClient;
