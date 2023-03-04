import { gql } from "@apollo/client";


export const CREATE_PROPERTY = gql`
    mutation createproperty($request: PropertyInput!) {
        createProperty(request: $request) {
            id,
            alias,
            country,
            district,
            city,
            suburb,
            street,
            number, 
            flat 
        }
    }
`;