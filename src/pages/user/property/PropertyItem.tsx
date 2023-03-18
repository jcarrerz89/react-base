import React from "react";
import { DeleteForever, KeyboardArrowUp } from "@mui/icons-material";
import { Collapse, Grid, TableCell, TableRow, IconButton, Paper } from "@mui/material";
import RoomListItem from "../room/RoomListItem";
import Constants from "enum/constants";
import AppSubTitle from "components/common/Text/AppSubTitle";
import { styled } from "@mui/material/styles";
import { borderRadius } from "@mui/system";

export interface PropertyItem {
    id: number;
    alias: string;
    country: string;
    district: string;
    city: string;
    suburb: string;
    street: string;
    number: string;
    flat: string;
    cover_picture: string;
    pictures: string[];
    rooms: IRoomType[];
}

export interface IRoomType {
    id: number;
    alias: string;
    m2: number;
    maxOccuppants: number;
    coverPicture: string;
    pictures: string[];
}

const PropertyHeader = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    border: "1px solid #CCC",
    borderRadius: "10px",
}));

const PropertyItem: React.FC<{ property: PropertyItem }> = ({ property }) => {
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
                                    src={property.cover_picture || Constants.DEFAULT_PROPERTY_COVER_PICTURE}
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
