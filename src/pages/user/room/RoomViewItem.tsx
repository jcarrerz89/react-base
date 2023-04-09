import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import SectionHeader from "../../../components/common/section/SectionHeader";
import AppSubTitle from "../../../components/common/text/AppSubTitle";
import SectionMenu from "../../../components/common/menu/SectionMenu";
import DialogActions from "@mui/material/DialogActions";
import {IRoomType} from "../types/IRoomType";
import DialogContent from "@mui/material/DialogContent";
import {ImageListItem, ImageListItemBar} from "@mui/material";
import Constants from "../../../enum/constants";
import Grid from "@mui/material/Grid";
import CreateRoomModal from "./CreateRoomModal";
import DeleteRoomModal from "./DeleteRoomModal";
import AppElementTitle from "../../../components/common/text/AppElementTitle";
import Button from "@mui/material/Button";
import ForwardIcon from '@mui/icons-material/Forward';
import {Announcement} from "@mui/icons-material";
import CreateAnnouncementModal from "../announcement/CreateAnnouncementModal";
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

    const onUpdateRoom = (updatedRoom: IRoomType) => {
        setRoomDetails(updatedRoom);
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