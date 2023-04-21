import {IPropertyType} from "../../../types/IPropertyType";
import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {Button, Grid} from "@mui/material";
import {useMutation} from "@apollo/client";
import {DELETE_PROPERTY} from "../../../server/gql/property.gql";
import DialogActions from "@mui/material/DialogActions";

interface IDeletePropertyModal {
    open: boolean
    property: IPropertyType,
    onDelete: (propertyId: number) => void,
    onDismiss: () => void
}

const DeleteProperty: React.FC<IDeletePropertyModal> = ({open, property, onDelete, onDismiss}) => {

    const [deleteProperty] = useMutation(DELETE_PROPERTY, {
            onCompleted: (data) => {
                onDelete(data.deleteProperty.id);
                onDismiss();
            }
        }
    )

    return (
        <Dialog fullWidth open={open} onClose={onDismiss}>
            <DialogTitle>Delete Property</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item sm={12}>
                        <p>Are you sure you want to delete this property?</p>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button type="reset" onClick={onDismiss}>Cancel</Button>
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
    );
}

export default DeleteProperty;