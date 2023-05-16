import {onError} from '@apollo/client/link/error';

const ErrorMiddleware = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) => {
            // Integrate 
            console.log('error');
        });
    }
});

export default ErrorMiddleware;