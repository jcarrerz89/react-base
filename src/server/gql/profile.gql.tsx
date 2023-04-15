import {gql} from "@apollo/client";


export const UPDATE_PROFILE = gql(`
    mutation editProfile($request: ProfileInputType!) {
        updateProfile(request: $request) {
            name, 
            surname,
            dateOfBirth,
            nationality,
            description,
            image
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
            image
            description
            createdAt
            updatedAt
            deletedAt
        }
    }
`;