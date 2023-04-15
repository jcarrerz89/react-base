import {gql} from '@apollo/client';

export const SIGN_UP = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) { 
        signUp(username: $username, email: $email, password: $password){
            user { 
                username
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
            }, 
            accessToken
        }
    }
`;

export const REGISTER = gql`
    mutation register($email: String!) {
        signUp(email: $email){
            user { 
                username
            }, 
            accessToken
        } 
    }
`;

export const EDIT_PROFILE = gql`
    mutation editProfile($input: UserInput!) {
        editProfile(input: $input) {
            id
            name
            surname
            dateOfBirth
            nationality
            profileImage
            description
        }
    }
`;

export const HELLO_USER = gql`
    query {
        helloUser {
            id,
            username,
            email
        }
    }
`;
