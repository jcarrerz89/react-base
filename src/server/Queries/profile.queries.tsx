import {gql} from "@apollo/client";

export const GET_PROFILE = gql`
    query getProfile {
        getUserProfile {
            id
            name
            surname
            date_of_birth
            nationality
            image
            description
            created_at
            updated_at
            deleted_at
        }
    }
`;