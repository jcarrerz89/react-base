import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
    mutation createRoom($request: RoomInput!, $propertyId: Float!) {
        createRoom(request: $request, property_id: $propertyId) {
            id
        }
    }
`;
