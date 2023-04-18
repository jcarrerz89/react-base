import {gql} from "@apollo/client";


export const UPDATE_PROFILE = gql(`
    mutation editProfile($request: ProfileInputType!) {
        updateProfile(request: $request) {
            id
            name
            surname
            dateOfBirth
            nationality
            occupation
            phoneNumber
            website
            image
            description
            createdAt
            updatedAt
            deletedAt
        }
    }
`);

export const GET_PROFILE = gql`
    query getProfile {
        getUserProfile {
            id
            name
            surname
            dateOfBirth
            nationality
            occupation
            phoneNumber
            website
            image
            description
            createdAt
            updatedAt
            deletedAt
        }
    }
`;