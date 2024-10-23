// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Temporary fallback data for when GraphQL is not available
const fallbackData = {
  posts: {
    nodes: [
      {
        id: '1',
        title: 'Sample Property',
        date: new Date().toISOString(),
        content: 'Price: $599,000\nBedrooms: 3\nBathrooms: 2\nSquare Feet: 2,100\n\nBeautiful modern house in a great location.',
        featuredImage: null
      },
      // Add more sample properties if needed
    ]
  }
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    // You could trigger some UI state here to show a fallback UI
  }
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://localhost:8889/graphql',
  credentials: 'omit'
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    }
  }
});

export default client;