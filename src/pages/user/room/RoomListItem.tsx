import React, {useState} from "react";
import CreateRoom from "./CreateRoom";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Constants from "enum/constants";
import {IRoomType} from "../types/IRoomType";

const RoomListItem: React.FC<{ rooms: IRoomType[]; propertyId: number }> = ({ rooms, propertyId }) => {

    const [roomList, setRoomList] = useState<IRoomType[]>(rooms);

    const onCreateRoom = (room: IRoomType) => {
        let rooms = roomList.concat(room);
        setRoomList(rooms);
    }

    const onEditRoom = (room: IRoomType) => {
        console.log(room);
    }

    const addRoomComponent = roomList.length < 9 ?
        <CreateRoom propertyId={propertyId} onCreateRoom={onCreateRoom}/> : null;

    return (
        <>
            <ImageList variant="masonry" cols={3} gap={8}>
                {roomList.map((room) => (
                    <ImageListItem key={room.id} onClick={() => {
                        onEditRoom(room);
                    }} style={{cursor: 'pointer'}}>
                        <img
                            src={`${room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format`}
                            srcSet={`${room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}
                            loading="lazy"
                        />

                        <ImageListItemBar title={room.alias} />
                    </ImageListItem>
                ))}

                { addRoomComponent }
            </ImageList>

        </>
    );
};

export default RoomListItem;
