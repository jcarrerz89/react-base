import { gql } from '@apollo/client';

export const GET_PROPERTIES_BY_USER = gql`
    query propertiesByUser {
        getPropertiesByUser {
            id,
            alias,
            country,
            city,
            district,
            suburb,
            street,
            number,
            flat,
            cover_picture,
            pictures,
            rooms {
                id,
                alias,
                max_occupants,
                m2,
                cover_picture,
                pictures
            }
        }
    }
`;