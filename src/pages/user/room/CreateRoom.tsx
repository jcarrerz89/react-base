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
import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/Add";
import Characters from "enum/char";
import { CREATE_ROOM } from "server/Mutations/room.mutation";
import { useMutation } from "@apollo/client";

const CreateRoom: React.FC<{propertyId: number}> = ({propertyId}) => {
    const [open, setOpen] = useState(false);
    const [roomData, setRoomData] = useState({
        alias: "Master bedroom",
        m2: 1,
        max_occupants: 2,
        // alias: String(Characters.EMPTY),
        // m2: 1,
        // max_ocupants: 1,
    });

    const [createRoom, {data, loading, error}] = useMutation(CREATE_ROOM, {
        onCompleted: (data) => {
            console.log(data);
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
                        setOpen(true);
                    }}
                    sx={{ my: 2, color: "Black", display: "block" }}
                >
                    <AddCircleRoundedIcon />
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false);
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
                                        inputProps={{ min: 1}}
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
                                        inputProps={{ min: 1}}
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
                                        <Button type="reset">Cancel</Button>
                                    </Grid>
                                    <Grid xs={2} item>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        >
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
