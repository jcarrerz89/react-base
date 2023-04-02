import React, {useState} from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {Button, Grid, IconButton, Tooltip} from "@mui/material";
import {DeleteForever} from "@mui/icons-material";
import {useMutation} from "@apollo/client";
import {DELETE_ROOM} from "../../../server/Mutations/room.mutation";
import {IRoomType} from "../types/IRoomType";
import DialogActions from "@mui/material/DialogActions";

interface IDeleteProperty {
    room: IRoomType,
    onDeleteRoom: (propertyid: number) => void
}

const DeleteRoomModal: React.FC<IDeleteProperty> = ({room, onDeleteRoom}) => {

    const [open, setOpen] = useState(false);

    const [deleteRoom] = useMutation(DELETE_ROOM, {
            onCompleted: (data) => {
                onDeleteRoom(data.deleteRoom.id);
                onClose();
            }
        }
    );

    const onOpen = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Tooltip title="Delete room">
                <IconButton
                    sx={{my: 2, color: "Black", display: "block"}}
                    onClick={() => {
                        onOpen();
                    }}>
                    <DeleteForever/> Delete
                </IconButton>
            </Tooltip>
            <Dialog fullWidth open={open} onClose={() => {
                onClose();
            }}>
                <DialogTitle>Delete room</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item sm={12}>
                            <p>Are you sure you want to delete this room?</p>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="reset" onClick={() => {
                        onClose();
                    }}>Cancel</Button>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={(event: React.UIEvent) => {
                            event.preventDefault();

                            deleteRoom({
                                variables: {
                                    id: room.id
                                }
                            });
                        }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DeleteRoomModal;