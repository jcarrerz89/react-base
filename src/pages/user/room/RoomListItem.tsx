import React, {useState} from "react";
import CreateRoomModal from "./CreateRoomModal";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Constants from "enum/constants";
import {IRoomType} from "../types/IRoomType";
import RoomDetails from "./RoomDetails";
import {IPropertyType} from "../types/IPropertyType";

const RoomListItem: React.FC<{ rooms: IRoomType[]; propertyId: number }> = ({ rooms, propertyId }) => {

    const [roomList, setRoomList] = useState<IRoomType[]>(rooms);

    const onCreateRoom = (room: IRoomType) => {
        console.log('onCreateRoom');
        let rooms = roomList.concat(room);
        setRoomList(rooms);
    }

    const onEditRoom = (room: IRoomType) => {
        console.log(room);
    }

    const onDeleteRoom = (roomId: number) => {
        setRoomList(roomList.filter((room: IRoomType) => room.id !== roomId));
    }

    const addRoomComponent = roomList.length < 9 ?
        <CreateRoomModal propertyId={propertyId} onSaveRoom={onCreateRoom}/> : null;

    return (
        <>
            <ImageList variant="masonry" cols={2} gap={8}>
                {roomList.map((room, key) => (
                    <RoomDetails room={room} onDeleteRoom={onDeleteRoom} key={key}/>
                ))}
                { addRoomComponent }
            </ImageList>
        </>
    );
};

export default RoomListItem;
