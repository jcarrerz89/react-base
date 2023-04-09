import {gql} from "@apollo/client";


export const SAVE_PROPERTY = gql`
    mutation saveProperty($request: PropertyInput!) {
        saveProperty(request: $request) {
            id,
            alias,
            country,
            district,
            city,
            suburb,
            street,
            number, 
            flat,
            coverPicture,
            pictures
        }
    }
`;

export const DELETE_PROPERTY = gql`
    mutation deleteProperty($propertyId: Float!) {
        deleteProperty(propertyId: $propertyId) {
            id,
            alias,
            deletedAt
        }
    }
`;

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