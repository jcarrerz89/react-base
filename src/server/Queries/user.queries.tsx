
import { gql } from '@apollo/client';

export const HELLO_USER = gql`
    query {
        helloUser {
            id,
            username,
            email
        }
    }
`;
