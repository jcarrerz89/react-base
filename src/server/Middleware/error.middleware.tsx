import {onError} from '@apollo/client/link/error';

const ErrorMiddleware = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) => {
            alert(`graphql error ${message}`);
            console.log('error');
        });
    }
});

export default ErrorMiddleware;