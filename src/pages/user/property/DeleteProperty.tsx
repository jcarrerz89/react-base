import {IPropertyType} from "../types/IPropertyType";
import React, {useState} from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {Button, Grid, IconButton, Tooltip} from "@mui/material";
import {DeleteForever} from "@mui/icons-material";
import {useMutation} from "@apollo/client";
import {DELETE_PROPERTY} from "../../../server/gql/property.gql";
import DialogActions from "@mui/material/DialogActions";

interface IDeleteProperty {
    property: IPropertyType,
    onDeleteProperty: (propertyid: number) => void
}

const DeleteProperty: React.FC<IDeleteProperty> = ({property, onDeleteProperty}) => {

    const [open, setOpen] = useState(false);

    const [deleteProperty] = useMutation(DELETE_PROPERTY, {
            onCompleted: (data) => {
                onDeleteProperty(data.deleteProperty.id);
                onClose();
            }
        }
    )

    const onOpen = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Tooltip title="Create a new property">
                <IconButton
                    sx={{my: 2, color: "Black", display: "block"}}
                    onClick={() => {
                        onOpen();
                    }}>
                    <DeleteForever/> Delete
                </IconButton>
            </Tooltip>
            <Dialog fullWidth open={open} onClose={() => {
                onClose();
            }}>
                <DialogTitle>Delete Property</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item sm={12}>
                            <p>Are you sure you want to delete this property?</p>
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
                        onClick={(event: React.UIEvent) => {
                            event.preventDefault();

                            deleteProperty({
                                variables: {
                                    propertyId: property.id
                                }
                            });
                        }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DeleteProperty;