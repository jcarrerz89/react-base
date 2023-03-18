import { useMutation } from "@apollo/client";
import {
    Alert,
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup,
    Grid,
    IconButton,
    TextField,
    Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import Characters from "../../../enum/char";
import AddCircleRoundedIcon from "@mui/icons-material/Add";
import { CREATE_PROPERTY } from "../../../server/Mutations/property.mutation";
import { render } from "react-dom";

const CreateProperty: React.FC = () => {
    const [open, setOpen] = useState(false);

    const [createProperty, { data, loading, error }] = useMutation(
        CREATE_PROPERTY,
        {
            onError: (error) => {},
        }
    );

    const [alias, setAlias] = useState(Characters.EMPTY);
    const [propertyData, setPropertyData] = useState({
        alias: "Bridgewater appartment",
        country: "New Zealand",
        district: "Auckland",
        city: "Auckland",
        suburb: "Parnell",
        street: "Bridgewater rd",
        number: 12,
        flat: "3",
        // alias: String(Characters.EMPTY),
        // country: String(Characters.EMPTY),
        // district: String(Characters.EMPTY),
        // city: String(Characters.EMPTY),
        // suburb: String(Characters.EMPTY),
        // street: String(Characters.EMPTY),
        // number: String(Characters.EMPTY),
        // flat: String(Characters.EMPTY),
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
                <DialogTitle>Create property</DialogTitle>
                <DialogContent>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();

                            createProperty({
                                variables: {
                                    request: propertyData,
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
                                <Grid xs={12} item columns={10}></Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        label="Alias"
                                        variant="outlined"
                                        value={propertyData.alias}
                                        type="text"
                                        fullWidth
                                        onChange={(e) => {
                                            setPropertyData({
                                                ...propertyData,
                                                alias: e.target.value,
                                            });
                                        }}
                                    />
                                </Grid>
                                <Grid xs={6} item>
                                    <TextField
                                        label="Contry"
                                        variant="outlined"
                                        value={propertyData.country}
                                        fullWidth
                                        onChange={(e) => {
                                            setPropertyData({
                                                ...propertyData,
                                                country: e.target.value,
                                            });
                                        }}
                                    />
                                </Grid>
                                <Grid xs={5} item>
                                    <TextField
                                        label="District"
                                        variant="outlined"
                                        value={propertyData.district}
                                        fullWidth
                                        onChange={(e) => {
                                            setPropertyData({
                                                ...propertyData,
                                                district: e.target.value,
                                            });
                                        }}
                                    />
                                </Grid>
                                <Grid xs={6} item>
                                    <TextField
                                        label="City"
                                        variant="outlined"
                                        value={propertyData.city}
                                        fullWidth
                                        onChange={(e) => {
                                            setPropertyData({
                                                ...propertyData,
                                                city: e.target.value,
                                            });
                                        }}
                                    />
                                </Grid>
                                <Grid xs={5} item>
                                    <TextField
                                        label="Suburb"
                                        variant="outlined"
                                        value={propertyData.suburb}
                                        fullWidth
                                        onChange={(e) => {
                                            setPropertyData({
                                                ...propertyData,
                                                suburb: e.target.value,
                                            });
                                        }}
                                    />
                                </Grid>
                                <Grid xs={5} item>
                                    <TextField
                                        label="Street"
                                        variant="outlined"
                                        value={propertyData.street}
                                        fullWidth
                                        onChange={(e) => {
                                            setPropertyData({
                                                ...propertyData,
                                                street: e.target.value,
                                            });
                                        }}
                                    />
                                </Grid>
                                <Grid xs={3} item>
                                    <TextField
                                        label="Number"
                                        variant="outlined"
                                        type="number"
                                        value={propertyData.number}
                                        onChange={(e) => {
                                            setPropertyData({
                                                ...propertyData,
                                                number: Number(e.target.value),
                                            });
                                        }}
                                    />
                                </Grid>
                                <Grid xs={3} item>
                                    <TextField
                                        label="Flat"
                                        variant="outlined"
                                        value={propertyData.flat}
                                        fullWidth
                                        onChange={(e) => {
                                            setPropertyData({
                                                ...propertyData,
                                                flat: e.target.value,
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

export default CreateProperty;
