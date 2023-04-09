import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {Button, Grid} from "@mui/material";
import {useMutation} from "@apollo/client";
import {DELETE_ROOM} from "../../../server/gql/room.gql";
import {IRoomType} from "../types/IRoomType";
import DialogActions from "@mui/material/DialogActions";

interface IDeleteProperty {
    open: boolean,
    room: IRoomType,
    onDelete: (roomId: number) => void,
    onDismiss: () => void
}

const DeleteRoomModal: React.FC<IDeleteProperty> = ({open, room, onDelete, onDismiss}) => {

    const [deleteRoom] = useMutation(DELETE_ROOM, {
            onCompleted: (data) => {
                onDelete(data.deleteRoom.id);
                onDismiss();
            }
        }
    );

    return (
        <Dialog fullWidth open={open} onClose={onDismiss}>
            <DialogTitle>Delete room</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item sm={12}>
                        <p>Are you sure you want to delete this room?</p>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button type="reset" onClick={onDismiss}>Cancel</Button>
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
    );
}

export default DeleteRoomModal;