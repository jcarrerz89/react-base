import {IPropertyType} from "../types/IPropertyType";
import React, {useState} from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {Button, Grid, IconButton, Tooltip} from "@mui/material";
import {DeleteForever} from "@mui/icons-material";
import {useMutation} from "@apollo/client";
import {DELETE_PROPERTY} from "../../../server/Mutations/property.mutation";

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
                    onClick={() => {
                        onOpen();
                    }}
                    sx={{my: 2, color: "Black", display: "block"}}
                >
                    <DeleteForever/>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>

        </>
    );
}

export default DeleteProperty;