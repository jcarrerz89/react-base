import { ApolloLink } from "@apollo/client";
import { useCookies } from 'react-cookie';

const AuthMiddleware = new ApolloLink((operation, forward) => {
    const [authToken] = useCookies(['jwt-auth-token']);

    console.log('[AuthMiddleware] token', authToken);
    console.log('[AuthMiddleware] OperationName', operation.operationName);

    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
    }

    return forward(operation);
  });

  export default AuthMiddleware;