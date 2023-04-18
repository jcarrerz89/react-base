import React, {useState} from 'react';
import {IRoomType} from "../types/IRoomType";
import {Avatar, Typography} from "@mui/material";
import Constants from "../../../enum/constants";
import RoomModal from "./RoomModal";
import Grid from "@mui/material/Grid";

interface IRoomDetails {
    room: IRoomType,
    onDelete: (roomId: number) => void
}

const RoomViewItem: React.FC<IRoomDetails> = ({room, onDelete}) => {

    const [open, setOpen] = useState(false);
    const [roomDetails] = useState<IRoomType>(room);
    const onOpen = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false)
    }

    return <>
        <Grid container item sm={12} style={{cursor: 'pointer'}} onClick={() => {
            onOpen();
        }}>
            <Grid item component="div" sm={2}>
                <Avatar
                    style={{width: '3rem', height: '3rem'}}
                    src={`${room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format`}
                    srcSet={`${room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}
                />
            </Grid>

            <Grid container item sm={10} display="flex" alignItems="center">
                <Typography variant="h3">{roomDetails.alias}</Typography>
                <RoomModal room={room} open={open} onDismiss={onClose} onDelete={onDelete}/>
            </Grid>
        </Grid>

    </>
}

export default RoomViewItem;