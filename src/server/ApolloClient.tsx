import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) => {
            alert(`graphql error ${message}`)
        });
    }
});

const ApolloClientInstance = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
        errorLink,
        new HttpLink({uri: process.env.BB_BFF})
    ])
});

export default ApolloClientInstance;