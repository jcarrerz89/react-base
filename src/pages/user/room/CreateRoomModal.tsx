import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormGroup,
    Grid,
    TextField, Typography,
} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import {SAVE_ROOM} from "server/gql/room.gql";
import {useMutation} from "@apollo/client";
import {IRoomType} from "../types/IRoomType";
import DialogActions from "@mui/material/DialogActions";
import {LinearProgressBarContext} from "../../../context/LinearProgressBarContextProvider";

interface ICreateRoomModal {
    room?: IRoomType,
    propertyId: number,
    open: boolean,
    onSaveRoom: (room: IRoomType) => void,
    onDismiss: () => void
}

interface IRoomData {
    id: number | null,
    alias: string,
    m2: number,
    maxOccupants: number,
    description: string,
    propertyId: number
}

const CreateRoomModal: React.FC<ICreateRoomModal> = ({room, open, propertyId, onSaveRoom, onDismiss}) => {
    const progressBar = useContext(LinearProgressBarContext);
    const [roomData, setRoomData] = useState<IRoomData>({propertyId: propertyId, alias: '', m2: 1, maxOccupants: 1, description: ''} as IRoomData);

    const [saveRoom] = useMutation(SAVE_ROOM, {
        onCompleted: (data) => {
            if (data.saveRoom) {
                let responseRoom: IRoomType = {
                    id: data.saveRoom.id,
                    alias: data.saveRoom.alias,
                    m2: data.saveRoom.m2,
                    maxOccupants: data.saveRoom.maxOccupants,
                    coverPicture: data.saveRoom.coverPicture,
                    pictures: data.saveRoom.pictures,
                    description: data.saveRoom.description,
                    propertyId: data.saveRoom.propertyId
                }
                onSaveRoom(responseRoom);
            }
            progressBar.hide();
        },
        onError: () => {
            progressBar.hide();
        }
    });

    useEffect(() => {
        if (room) {
            setRoomData({
                id: Number(room.id),
                alias: room.alias,
                m2: Number(room.m2),
                maxOccupants: Number(room.maxOccupants),
                description: room.description,
                propertyId: Number(room.propertyId)
            });
        }
    }, [room])

    return (
        <Dialog
            open={open}
            onClose={onDismiss}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    progressBar.show();

                    saveRoom({
                        variables: {
                            request: roomData,
                            propertyId: propertyId
                        },
                    });

                    onDismiss();
                }}
            >
                <FormGroup>
                    <DialogTitle>
                        <Typography>Add room</Typography>
                    </DialogTitle>
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


                            <Grid item xs={12}>
                                <TextField
                                    label="Text Area"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={roomData.description}
                                    onChange={(e) => {
                                        setRoomData({
                                            ...roomData,
                                            description: e.target.value
                                        });
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button type="reset"
                                onClick={onDismiss}>
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
    );
};

export default CreateRoomModal;
