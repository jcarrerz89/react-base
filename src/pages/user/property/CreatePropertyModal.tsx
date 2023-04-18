import {useMutation} from "@apollo/client";
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
import {SAVE_PROPERTY} from "../../../server/gql/property.gql";
import {IPropertyType} from "../types/IPropertyType";
import DialogActions from "@mui/material/DialogActions";
import {LinearProgressBarContext} from "../../../context/LinearProgressBarContextProvider";

interface ICreateProperty {
    open: boolean,
    property?: IPropertyType,
    onSaveProperty: (property: IPropertyType) => void,
    onDismiss: () => void
}

type IPropertyData = {
    id: null | number,
    alias?: string ,
    country?: string,
    district?: string,
    city: string,
    suburb: string,
    street: string,
    number: number,
    flat: string
}

const CreatePropertyModal: React.FC<ICreateProperty> = ({property, open, onSaveProperty, onDismiss}) => {
    const progressBar = useContext(LinearProgressBarContext);

    const [createProperty] = useMutation(
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

    return (
        <Dialog
            open={open}
            onClose={onDismiss}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    progressBar.show();

                    createProperty({
                        variables: {
                            request: propertyData,
                        },
                    });

                    onDismiss();
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
                                    label="Country"
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
                        <Button type="reset" onClick={onDismiss}>Cancel</Button>
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
    );
};

export default CreatePropertyModal;
