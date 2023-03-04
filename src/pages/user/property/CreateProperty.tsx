import { useMutation } from '@apollo/client';
import { Button, Dialog, DialogContent, DialogTitle, FormControl, FormGroup, IconButton, TextField, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import Characters from '../../../enum/char';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { CREATE_PROPERTY } from '../../../server/Mutations/property.mutation';

const CreateProperty: React.FC = () => {

    const [open, setOpen] = useState(false);

    const [createProperty, {data, loading, error}] = useMutation(CREATE_PROPERTY);

    const [alias, setAlias] = useState(Characters.EMPTY);
    const [propertyData, setPropertyData] = useState({
        alias: String(Characters.EMPTY),
        country: String(Characters.EMPTY),
        district: String(Characters.EMPTY),
        city: String(Characters.EMPTY),
        suburb: String(Characters.EMPTY),
        street: String(Characters.EMPTY),
        number: String(Characters.EMPTY),
        flat: String(Characters.EMPTY),
    });

    return (

        <>
            <Tooltip title="Create a new property">
                <IconButton
                    onClick={() => {
                        setOpen(true);
                    }}
                    sx={{ my: 2, color: 'Black', display: 'block' }}>
                    <AddCircleRoundedIcon />
                </IconButton>
            </Tooltip>

            <Dialog open={open} onClose={() => {
                setOpen(false);
            }}>
                <DialogTitle>Create property</DialogTitle>
                <DialogContent>
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        createProperty({
                            variables: {
                                request: propertyData
                            }
                        });
                    }}>
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    label="Alias"
                                    variant="outlined"
                                    value={propertyData.alias}
                                    type="text"
                                    onChange={e => {
                                        setPropertyData({
                                            ...propertyData,
                                            alias: e.target.value
                                        });
                                    }}/>
                            </FormControl>

                            <FormControl>
                                <TextField
                                    label="Contry"
                                    variant="outlined"
                                    value={propertyData.country}
                                    onChange={e => {
                                        setPropertyData({
                                            ...propertyData,
                                            country: e.target.value
                                        });
                                    }}/>
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="District"
                                    variant="outlined"
                                    value={propertyData.district}
                                    onChange={e => {
                                        setPropertyData({
                                            ...propertyData,
                                            district: e.target.value
                                        });
                                    }}/>
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="City"
                                    variant="outlined"
                                    value={propertyData.city}
                                    onChange={e => {
                                        setPropertyData({
                                            ...propertyData,
                                            city: e.target.value
                                        });
                                    }}/>
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Suburb"
                                    variant="outlined"
                                    value={propertyData.suburb}
                                    onChange={e => {
                                        setPropertyData({
                                            ...propertyData,
                                            suburb: e.target.value
                                        });
                                    }}/>
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Street"
                                    variant="outlined"
                                    value={propertyData.street}
                                    onChange={e => {
                                        setPropertyData({
                                            ...propertyData,
                                            street: e.target.value
                                        });
                                    }}/>
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Number"
                                    variant="outlined"
                                    value={propertyData.number}
                                    onChange={e => {
                                        setPropertyData({
                                            ...propertyData,
                                            number: e.target.value
                                        });
                                    }}/>
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Flat"
                                    variant="outlined"
                                    value={propertyData.flat}
                                    onChange={e => {
                                        setPropertyData({
                                            ...propertyData,
                                            flat: e.target.value
                                        });
                                    }}/>
                            </FormControl>

                            <FormControl>
                                <Button type="reset">Cancel</Button>
                                <Button type="submit" variant="contained">
                                    Create
                                </Button>
                            </FormControl>
                        </FormGroup>
                    </form>
                </DialogContent>
            </Dialog>
        </>

    );
}

export default CreateProperty;