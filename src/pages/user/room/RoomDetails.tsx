import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import SectionHeader from "../../../components/common/Section/SectionHeader";
import AppSubTitle from "../../../components/common/Text/AppSubTitle";
import SectionMenu from "../../../components/common/Menu/SectionMenu";
import DialogActions from "@mui/material/DialogActions";
import {IRoomType} from "../types/IRoomType";
import DialogContent from "@mui/material/DialogContent";
import {ImageListItem, ImageListItemBar} from "@mui/material";
import Constants from "../../../enum/constants";
import Grid from "@mui/material/Grid";
import CreateRoomModal from "./CreateRoomModal";
import DeleteRoomModal from "./DeleteRoomModal";
import AppElementTitle from "../../../components/common/Text/AppElementTitle";
import Button from "@mui/material/Button";
import ForwardIcon from '@mui/icons-material/Forward';

interface IRoomDetails {
    room: IRoomType,
    onDeleteRoom: (roomId: number) => void
}
const RoomDetails:React.FC<IRoomDetails> = ({room, onDeleteRoom}) =>  {

    const [open, setOpen] = useState(false);
    const onOpen = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false)
    }

    const onUpdateRoom = (room: IRoomType) => {

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

            <ImageListItemBar title={room.alias} />
        </ImageListItem>

        <Dialog open={open} fullWidth onClose={() => {
            onClose();
        }}>
            <DialogTitle>
                <SectionHeader>
                    <AppSubTitle>{room.alias}</AppSubTitle>
                    <SectionMenu>
                        <CreateRoomModal room={room} propertyId={room.propertyId} onSaveRoom={onUpdateRoom} />
                        <DeleteRoomModal room={room} onDeleteRoom={onDeleteRoom} />
                    </SectionMenu>
                </SectionHeader>
            </DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item container sm={6}>
                        <Grid item sm={12}>
                            <AppElementTitle>㎡</AppElementTitle>
                        </Grid>
                        <Grid item sm={12}>
                            {room.m2}
                        </Grid>
                    </Grid>
                    <Grid item container sm={6}>
                        <Grid item sm={12}>
                            <AppElementTitle>Max occupants</AppElementTitle>
                        </Grid>
                        <Grid item sm={12}>
                            {room.maxOccupants}
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant={"text"} onClick={onClose}>
                    Close
                </Button>
                <Button variant="contained" color="secondary" startIcon={<ForwardIcon />}>
                    Announce
                </Button>
            </DialogActions>
        </Dialog>
    </>
}

export default RoomDetails;