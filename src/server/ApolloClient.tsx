import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from '@apollo/client/link/error';
import { ApolloLink } from "@apollo/client";
import { getCookie } from 'typescript-cookie'

// TODO: Refactor into a new class. 
const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) => {
            // alert(`graphql error ${message}`)
            console.error(`graphql error ${message}`);
        });
    }
});

// TODO: Refactor into a new class.
const authMiddleware = new ApolloLink((operation, forward) => {
  const authToken = getCookie('jwt-auth-token');

  if (authToken) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  }

  return forward(operation);
});


const ApolloClientInstance = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
        errorLink, 
        authMiddleware,
        new HttpLink({uri: process.env.REACT_APP_BFF})
    ])
});

export default ApolloClientInstance;