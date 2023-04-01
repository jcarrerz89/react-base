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
            coverPicture,
            pictures,
            rooms {
                id,
                alias,
                maxOccupants,
                m2,
                coverPicture,
                pictures,
                propertyId
            }
        }
    }
`;