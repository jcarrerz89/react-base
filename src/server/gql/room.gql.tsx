import {gql} from "@apollo/client";

export const SAVE_ROOM = gql(`
    mutation saveRoom($request: RoomInputType!) {
        saveRoom(request: $request) {
            id,
            alias, 
            coverPicture,
            m2,
            maxOccupants,
            description,
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
            description,
            pictures,
            propertyId,
        }
    }
`);