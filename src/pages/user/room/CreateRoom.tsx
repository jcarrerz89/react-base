import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormGroup,
    Grid,
    IconButton,
    TextField,
    Tooltip,
} from "@mui/material";
import React, {useState} from "react";
import AddCircleRoundedIcon from "@mui/icons-material/Add";
import {CREATE_ROOM} from "server/Mutations/room.mutation";
import {useMutation} from "@apollo/client";
import {IRoomType} from "../types/IRoomType";

interface ICreateRoom {
    propertyId: number,
    onCreateRoom: (room: IRoomType) => void
}

const CreateRoom: React.FC<ICreateRoom> = ({propertyId, onCreateRoom}) => {
    const [open, setOpen] = useState(false);
    const [roomData, setRoomData] = useState({
        alias: "Master bedroom",
        m2: 1,
        max_occupants: 2,
        // alias: String(Characters.EMPTY),
        // m2: 1,
        // max_ocupants: 1,
    });

    const onClose = () => {
        setOpen(false);
    }

    const onOpen = () => {
        setOpen(true);
    }

    const [createRoom, {data, loading, error}] = useMutation(CREATE_ROOM, {
        onCompleted: (data) => {
            console.log(data);
            let room: IRoomType = {
                id: data.createRoom?.id,
                alias: data.createRoom?.alias,
                m2: data.createRoom?.m2,
                maxOccupants: data.createRoom?.max_occupants,
                coverPicture: data.createRoom?.cover_picture,
                pictures: data.createRoom?.pictures
            }
            onCreateRoom(room);
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return (
        <>
            <Tooltip title="Create a new property">
                <IconButton
                    onClick={() => {
                        onOpen();
                    }}
                    sx={{my: 2, color: "Black", display: "block"}}
                >
                    <AddCircleRoundedIcon/>
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={() => {
                    onClose();
                }}
            >
                <DialogTitle>Add room</DialogTitle>
                <DialogContent>
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
                                        value={roomData.max_occupants}
                                        inputProps={{min: 1}}
                                        onChange={(e) => {
                                            setRoomData({
                                                ...roomData,
                                                max_occupants: Number(
                                                    e.target.value
                                                ),
                                            });
                                        }}
                                    />
                                </Grid>

                                <Grid
                                    xs={12}
                                    item
                                    container
                                    justifyContent={"space-between"}
                                >
                                    <Grid xs={2} item>
                                        <Button type="reset"
                                            onClick={() => {
                                                onClose();
                                            }}>
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid xs={2} item>
                                        <Button
                                            type="submit"
                                            variant="contained">
                                            Create
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CreateRoom;
