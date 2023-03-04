import { gql } from '@apollo/client';

export const GET_PROPERTIES_BY_USER = gql`
    query propertiesByUser {
        getPropertiesByUser {
            id,
            alias,
            city,
            district,
            suburb,
            street,
            number,
            flat
        }
    }
`;