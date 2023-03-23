import { gql } from "@apollo/client";


export const CREATE_PROPERTY = gql`
    mutation createProperty($request: PropertyInput!) {
        createProperty(request: $request) {
            id,
            alias,
            country,
            district,
            city,
            suburb,
            street,
            number, 
            flat,
            cover_picture,
            pictures
        }
    }
`;

export const DELETE_PROPERTY = gql`
    mutation deleteProperty($propertyId: Float!) {
      deleteProperty(propertyId: $propertyId) {
        id,
        alias,
        deleted_at
      }
    }
`;