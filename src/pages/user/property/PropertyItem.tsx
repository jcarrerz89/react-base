import React from "react";
import { DeleteForever, KeyboardArrowUp } from "@mui/icons-material";
import { Collapse, Grid, IconButton, Paper } from "@mui/material";
import RoomListItem from "../room/RoomListItem";
import Constants from "enum/constants";
import AppSubTitle from "components/common/Text/AppSubTitle";
import {IPropertyType} from "../types/IPropertyType";

const PropertyItem: React.FC<{ property: IPropertyType }> = ({ property }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Grid item sm={12}>
            <Paper elevation={5}>
                <Grid container sx={{ "& > *": { borderBottom: "unset" } }} padding={2}>
                    <Grid item sm={11}>
                        <AppSubTitle>{property.alias}</AppSubTitle>
                    </Grid>
                    <Grid item sm={1}>
                        <IconButton aria-label="expand row" size="medium" onClick={() => setOpen(!open)} sx={{float: 'right'}}>
                            {open ? <KeyboardArrowUp /> : <KeyboardArrowUp />}
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item sm={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit key={property.id}>
                        <Grid container rowGap={2} padding={2} gap={10}>
                            <Grid item sm={6}>
                                <img
                                    style={{ width: "100%", borderRadius: 10 }}
                                    src={property.coverPicture || Constants.DEFAULT_PROPERTY_COVER_PICTURE}
                                />
                            </Grid>

                            <Grid item sm={5}>
                                <RoomListItem rooms={property.rooms} propertyId={property.id} />
                                <DeleteForever />
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default PropertyItem;
