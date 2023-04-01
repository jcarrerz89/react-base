import React, {useState} from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {Button, Grid, IconButton, Tooltip} from "@mui/material";
import {DeleteForever} from "@mui/icons-material";
import {useMutation} from "@apollo/client";
import {DELETE_ROOM} from "../../../server/Mutations/room.mutation";
import {IRoomType} from "../types/IRoomType";

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
                        <Grid
                            xs={12}
                            item
                            container
                            justifyContent={"space-between"}>
                            <Grid xs={2} item>
                                <Button type="reset" onClick={() => {
                                    onClose();
                                }}>Cancel</Button>
                            </Grid>
                            <Grid xs={2} item>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default DeleteRoomModal;