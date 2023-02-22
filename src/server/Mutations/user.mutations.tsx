import { gql } from '@apollo/client';

export const SIGN_UP = gql`
        mutation signUp($username: String!, $email: String!, $password: String!) { 
            signUp(username: $username, email: $email, password: $password){
                email
            } 
        }
    `;

export const LOGIN = gql`
        mutation login($request: LoginRequest!) {
            login(request: $request) {
                user { 
                    username
                }, 
                access_token
            }
        }
`;

export const REGISTER = gql`
        mutation register($email: String!) { 
            signUp(email: $email){
                email
            } 
        }
    `;