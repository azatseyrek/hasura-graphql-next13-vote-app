'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache(),
});

export default function Providers({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
