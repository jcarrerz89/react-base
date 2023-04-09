import React, {useState} from 'react';
import {IRoomType} from "../types/IRoomType";
import {ImageListItem, ImageListItemBar} from "@mui/material";
import Constants from "../../../enum/constants";
import RoomModal from "./RoomModal";

interface IRoomDetails {
    room: IRoomType,
    onDelete: (roomId: number) => void
}
const RoomViewItem:React.FC<IRoomDetails> = ({room, onDelete}) =>  {

    const [open, setOpen] = useState(false);
    const [roomDetails, setRoomDetails] = useState<IRoomType>(room);
    const onOpen = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false)
    }

    return <>
        <ImageListItem key={room.id} onClick={() => {
            onOpen();
        }} style={{cursor: 'pointer'}}>
            <img
                src={`${room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format`}
                srcSet={`${room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}
                loading="lazy"
            />

            <ImageListItemBar title={roomDetails.alias} />
        </ImageListItem>
        <RoomModal room={room} open={open} onDismiss={onClose} onDelete={onDelete}/>

    </>
}

export default RoomViewItem;