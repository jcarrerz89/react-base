import DialogTitle from "@mui/material/DialogTitle";
import SectionHeader from "../../../components/common/section/SectionHeader";
import AppSubTitle from "../../../components/common/text/AppSubTitle";
import SectionMenu from "../../../components/common/menu/SectionMenu";
import CreateRoomModal from "./CreateRoomModal";
import DeleteRoomModal from "./DeleteRoomModal";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import AppElementTitle from "../../../components/common/text/AppElementTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CreateAnnouncementModal from "../announcement/CreateAnnouncementModal";
import Dialog from "@mui/material/Dialog";
import React, {useState} from "react";
import {IRoomType} from "../types/IRoomType";
import EditIcon from "@mui/icons-material/Edit";
import {DeleteForever} from "@mui/icons-material";
import SectionMenuItem from "../../../components/common/menu/SectionMenuItem";
import ForwardIcon from "@mui/icons-material/Forward";

interface IRoomModal {
    room: IRoomType,
    open: boolean,
    onDelete: (roomId: number) => void,
    onDismiss: () => void
}

const RoomModal:React.FC<IRoomModal> = ({room, open, onDismiss, onDelete}) => {
    const [roomDetails, setRoomDetails] = useState<IRoomType>(room);
    const [openEditRoomModal, setOpenEditRoomModal] = useState<boolean>(false);
    const [openDeleteRoomModal, setOpenDeleteRoomModal] = useState<boolean>(false);
    const [openAnnouncementModal, setOpenAnnouncementModal] = useState<boolean>(false);

    const onOpenEditRoomModal = () => {
        setOpenEditRoomModal(true);
    }
    const onCloseEditRoomModal = () => {
        setOpenEditRoomModal(false);
    }
    const onUpdateRoom = (updatedRoom: IRoomType) => {
        setRoomDetails(updatedRoom);
    }
    const onOpenDeleteRoomModal = () => {
        setOpenDeleteRoomModal(true);
    }
    const onCloseDeleteRoomModal = () => {
        setOpenDeleteRoomModal(false);
    }
    const onOpenAnnouncementModal = () => {
        setOpenAnnouncementModal(true);
    }
    const onCloseAnnouncementRoomModal = () => {
        setOpenAnnouncementModal(false);
    }

    return (
        <Dialog open={open} fullWidth onClose={onDismiss}>
            <DialogTitle>
                <SectionHeader>
                    <AppSubTitle>{roomDetails.alias}</AppSubTitle>
                    <SectionMenu>
                        <SectionMenuItem icon={<EditIcon/>} label={"Edit"} description={"Edit room"} callback={onOpenEditRoomModal} />
                        <SectionMenuItem icon={<DeleteForever/>} label={"Delete"} description={"Delete room"} callback={onOpenDeleteRoomModal} />
                    </SectionMenu>
                </SectionHeader>
            </DialogTitle>
            <DialogContent>
                <Grid container rowSpacing={3}>
                    <Grid item container sm={6}>
                        <Grid item sm={12}>
                            <AppElementTitle>㎡</AppElementTitle>
                        </Grid>
                        <Grid item sm={12}>
                            {roomDetails.m2}
                        </Grid>
                    </Grid>
                    <Grid item container sm={6}>
                        <Grid item sm={12}>
                            <AppElementTitle>Max occupants</AppElementTitle>
                        </Grid>
                        <Grid item sm={12}>
                            {roomDetails.maxOccupants}
                        </Grid>
                    </Grid>
                    <Grid item container sm={12}>
                        <Grid item sm={12}>
                            <AppElementTitle>Description</AppElementTitle>
                        </Grid>
                        <Grid item sm={12}>
                            {roomDetails.description}
                        </Grid>
                    </Grid>
                </Grid>
                <CreateRoomModal room={room} open={openEditRoomModal} propertyId={room.propertyId} onSaveRoom={onUpdateRoom} onDismiss={onCloseEditRoomModal}/>
                <DeleteRoomModal room={room} open={openDeleteRoomModal} onDelete={onDelete} onDismiss={onCloseDeleteRoomModal}/>
                <CreateAnnouncementModal open={openAnnouncementModal} room={room} onDismiss={onCloseAnnouncementRoomModal}/>
            </DialogContent>
            <DialogActions>
                <Button variant={"text"} onClick={onDismiss}>
                    Close
                </Button>
                <Button variant="contained" color="secondary" startIcon={<ForwardIcon/>} onClick={onOpenAnnouncementModal}>
                    Announce
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default RoomModal;