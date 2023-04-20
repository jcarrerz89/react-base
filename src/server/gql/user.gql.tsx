import {gql} from '@apollo/client';

export const SIGN_UP = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) { 
        signUp(username: $username, email: $email, password: $password){
            user { 
                username
                options
            }, 
            accessToken
        } 
    }
`;

export const LOGIN = gql`
    mutation login($request: LoginDTO!) {
        login(request: $request) {
            user { 
                username
                options
            }, 
            accessToken
        }
    }
`;

export const HELLO_USER = gql`
    query {
        helloUser {
            id
            username
            email
        }
    }
`;
