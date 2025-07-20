"use client";

import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import gqlClient from "./graphql-client";

export default function GraphQLProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={gqlClient}>{children}</ApolloProvider>;
}
