import {gql} from "@apollo/client";

export const SAVE_ROOM = gql(`
    mutation saveRoom($request: RoomInput!, $propertyId: Float!) {
        saveRoom(request: $request, property_id: $propertyId) {
            id,
            alias, 
            coverPicture,
            m2,
            maxOccupants,
            pictures,
            propertyId
        }
    }
`);

export const DELETE_ROOM = gql(`
    mutation deleteRoom($id: Float!) {
        deleteRoom(id: $id) {
            id,
            alias, 
            coverPicture,
            m2,
            maxOccupants,
            pictures,
            propertyId,
        }
    }
`);