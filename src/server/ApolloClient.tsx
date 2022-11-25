import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) => {
            alert(`graphql error ${message}`)
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({uri: 'http://localhost:4000/graphql'})
]);

const ApolloClientInstance = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});

export default ApolloClientInstance;