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
import React, {useContext, useEffect, useState} from "react";
import Characters from "../../../enum/char";
import AddCircleRoundedIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import {SAVE_PROPERTY} from "../../../server/gql/property.gql";
import {IPropertyType} from "../types/IPropertyType";
import DialogActions from "@mui/material/DialogActions";
import {LinearProgressBarContext} from "../../../context/LinearProgressBarContextProvider";

interface ICreateProperty {
    property?: IPropertyType,
    onSaveProperty: (property: IPropertyType) => void
}

interface IPropertyData {
    id: null | number,
    alias: string,
    country: string,
    district: string,
    city: string,
    suburb: string,
    street: string,
    number: number,
    flat: string
}

const CreatePropertyModal: React.FC<ICreateProperty> = ({property, onSaveProperty}) => {
    const [open, setOpen] = useState(false);
    const progressBar = useContext(LinearProgressBarContext);

    const [createProperty, {data, loading, error}] = useMutation(
        SAVE_PROPERTY,
        {
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
                progressBar.hide();
            },
            onError: () => {
                progressBar.hide();
            }
        }
    );

    const onOpen = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    const [propertyData, setPropertyData] = useState<IPropertyData>({} as IPropertyData);

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
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        progressBar.show();

                        createProperty({
                            variables: {
                                request: propertyData,
                            },
                        });

                        onClose();
                    }}
                >
                    <FormGroup>
                        <DialogTitle>Create property</DialogTitle>
                        <DialogContent>
                            <Grid
                                container
                                spacing={2}
                                rowGap={2}
                                columnGap={1}
                                columnSpacing={1}
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
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button type="reset" onClick={() => {
                                onClose();
                            }}>Cancel</Button>
                            <Button
                                type="submit"
                                variant="contained"
                            >
                                {property ? 'Edit' : 'Create'}
                            </Button>
                        </DialogActions>
                    </FormGroup>
                </form>
            </Dialog>
        </>
    );
};

export default CreatePropertyModal;
