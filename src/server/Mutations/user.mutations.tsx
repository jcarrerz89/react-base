import { gql } from '@apollo/client';

export const SIGN_UP = gql`
        mutation signUp($email: String!) { 
            signUp(email: $email){
                email
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