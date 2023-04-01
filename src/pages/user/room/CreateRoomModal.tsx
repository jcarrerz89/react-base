import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormGroup,
    Grid,
    IconButton, ImageListItem,
    TextField,
    Tooltip,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import AddCircleRoundedIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import {CREATE_ROOM} from "server/Mutations/room.mutation";
import {useMutation} from "@apollo/client";
import {IRoomType} from "../types/IRoomType";
import Characters from "../../../enum/char";
import DialogActions from "@mui/material/DialogActions";

interface ICreateRoom {
    room?: IRoomType,
    propertyId: number,
    onSaveRoom: (room: IRoomType) => void
}

const CreateRoomModal: React.FC<ICreateRoom> = ({room, propertyId, onSaveRoom}) => {
    const [open, setOpen] = useState(false);
    const [roomData, setRoomData] = useState({
        id: Number(null),
        alias: String(Characters.EMPTY),
        m2: 1,
        maxOccupants: 1,
    });

    const onClose = () => {
        setOpen(false);
    }

    const onOpen = () => {
        setOpen(true);
    }

    const [createRoom, {data, loading, error}] = useMutation(CREATE_ROOM, {
        onCompleted: (data) => {
            if (data.createRoom) {
                let responseRoom: IRoomType = {
                    id: data.createRoom.id,
                    alias: data.createRoom.alias,
                    m2: data.createRoom.m2,
                    maxOccupants: data.createRoom.maxOccupants,
                    coverPicture: data.createRoom.coverPicture,
                    pictures: data.createRoom.pictures,
                    propertyId: data.createRoom.propertyId
                }
                onSaveRoom(responseRoom);
            }
        },
        onError: (error) => {
            console.error(error);
        }
    });

    useEffect(() => {
        if (room) {
            setRoomData({
                id: room.id,
                alias: room.alias,
                m2: room.m2,
                maxOccupants: room.maxOccupants,
            });
        }
    }, [room])

    const icon = room ?
        <><EditIcon /> Edit</> : <><AddCircleRoundedIcon/></>

    return (
        <>
            <Tooltip title="Create a new property">

                <ImageListItem>
                    <IconButton
                        onClick={() => {
                            onOpen();
                        }}
                        sx={{my: 2, color: "Black", display: "block"}}
                    >
                        {icon}
                    </IconButton>
                </ImageListItem>
            </Tooltip>
            <Dialog
                open={open}
                onClose={() => {
                    onClose();
                }}
            >
                <form
                    onSubmit={(event) => {
                        event.preventDefault();

                        createRoom({
                            variables: {
                                request: roomData,
                                propertyId: propertyId
                            },
                        });

                        onClose();
                    }}
                >
                    <FormGroup>
                        <DialogTitle>Add room</DialogTitle>
                        <DialogContent>

                            <Grid
                                container
                                spacing={2}
                                rowGap={2}
                                columnGap={1}
                                columnSpacing={1}
                                padding={2}
                                justifyContent={"space-between"}
                            >
                                {/* Images input container */}
                                <Grid xs={12} item columns={10}></Grid>

                                <Grid xs={12} item>
                                    <TextField
                                        label="Alias"
                                        variant="outlined"
                                        value={roomData.alias}
                                        type="text"
                                        fullWidth
                                        onChange={(e) => {
                                            setRoomData({
                                                ...roomData,
                                                alias: e.target.value,
                                            });
                                        }}
                                    />
                                </Grid>

                                <Grid xs={5} item>
                                    <TextField
                                        label="m2"
                                        variant="outlined"
                                        type="number"
                                        value={roomData.m2}
                                        inputProps={{min: 1}}
                                        onChange={(e) => {
                                            setRoomData({
                                                ...roomData,
                                                m2: Number(e.target.value),
                                            });
                                        }}
                                    />
                                </Grid>

                                <Grid xs={5} item>
                                    <TextField
                                        label="max occupants"
                                        variant="outlined"
                                        type="number"
                                        value={roomData.maxOccupants}
                                        inputProps={{min: 1}}
                                        onChange={(e) => {
                                            setRoomData({
                                                ...roomData,
                                                maxOccupants: Number(
                                                    e.target.value
                                                ),
                                            });
                                        }}
                                    />
                                </Grid>


                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button type="reset"
                                    onClick={() => {
                                        onClose();
                                    }}>
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained">
                                {room ? 'Save' : 'Create'}
                            </Button>
                        </DialogActions>
                    </FormGroup>
                </form>
            </Dialog>
        </>
    );
};

export default CreateRoomModal;
