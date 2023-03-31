import {useMutation} from "@apollo/client";
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
import React, {useEffect, useState} from "react";
import Characters from "../../../enum/char";
import AddCircleRoundedIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import {SAVE_PROPERTY} from "../../../server/Mutations/property.mutation";
import {IPropertyType} from "../types/IPropertyType";

interface ICreateProperty {
    property?: IPropertyType,
    onSaveProperty: (property: IPropertyType) => void
}

const CreateProperty: React.FC<ICreateProperty> = ({property, onSaveProperty}) => {
    const [open, setOpen] = useState(false);

    const [createProperty, {data, loading, error}] = useMutation(
        SAVE_PROPERTY,
        {
            onError: (error) => {
            },
            onCompleted: (data) => {
                const property: IPropertyType = {
                    id: data.saveProperty?.id,
                    alias: data.saveProperty?.alias,
                    country: data.saveProperty?.country,
                    district: data.saveProperty?.district,
                    city: data.saveProperty?.city,
                    suburb: data.saveProperty?.suburb,
                    street: data.saveProperty?.street,
                    number: data.saveProperty?.number,
                    flat: data.saveProperty?.flat,
                    coverPicture: data.saveProperty?.coverPicture,
                    pictures: data.saveProperty?.pictures,
                    rooms: [],
                    deletedAt: null
                }

                onSaveProperty(property);
            }
        }
    );

    const onOpen = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    const [propertyData, setPropertyData] = useState({
        id: 0,
        alias: String(Characters.EMPTY),
        country: String(Characters.EMPTY),
        district: String(Characters.EMPTY),
        city: String(Characters.EMPTY),
        suburb: String(Characters.EMPTY),
        street: String(Characters.EMPTY),
        number: Number(Characters.EMPTY),
        flat: String(Characters.EMPTY),
    });

    useEffect(() => {
        if (property) {
            setPropertyData({
                id: property.id,
                alias: property.alias,
                country: property.country,
                district: property.district,
                city: property.city,
                suburb: property.suburb,
                street: property.suburb,
                number: property.number,
                flat: property.flat,
            });
        }
    }, [property]);

    const icon = property ?
        <> <EditIcon/> Edit</> : <><AddCircleRoundedIcon/> </>

    return (
        <>
            <Tooltip title="Create a new property">
                <IconButton
                    onClick={() => {
                        onOpen();
                    }}
                    sx={{my: 2, color: "Black", display: "block"}}>
                    {icon}
                </IconButton>
            </Tooltip>

            <Dialog
                open={open}
                onClose={() => {
                    onClose();
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
                                        <Button type="reset" onClick={() => {
                                            onClose();
                                        }}>Cancel</Button>
                                    </Grid>
                                    <Grid xs={2} item>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        >
                                            {property ? 'Edit' : 'Create'}
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
