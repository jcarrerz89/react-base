import {gql} from "@apollo/client";

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