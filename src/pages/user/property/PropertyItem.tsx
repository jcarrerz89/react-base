import React, {useState} from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Collapse, Grid, IconButton } from "@mui/material";
import RoomListItem from "../room/RoomListItem";
import Constants from "enum/constants";
import AppSubTitle from "components/common/Text/AppSubTitle";
import {IPropertyType} from "../types/IPropertyType";
import DeleteProperty from "./DeleteProperty";
import SectionContainer from "../../../components/common/Section/SectionContainer";
import SectionHeader from "../../../components/common/Section/SectionHeader";
import SectionMenu from "../../../components/common/Menu/SectionMenu";
import CreateProperty from "./CreateProperty";

interface IPropertyItem {
    property: IPropertyType,
    onDeleteProperty: (propertyId: number) => void
}

const PropertyItem: React.FC<IPropertyItem> = ({ property, onDeleteProperty }) => {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState<IPropertyType>(property);

    const onUpdateProperty = (property: IPropertyType) => {
        console.log(property);
        setItem(property);
    }

    return (
        <SectionContainer>
            <SectionHeader>
                <AppSubTitle>{property.alias}</AppSubTitle>
                <IconButton aria-label="expand row" size="medium" onClick={() => setOpen(!open)} sx={{float: 'right'}}>
                    {open ? <KeyboardArrowUp /> : <KeyboardArrowUp />}
                </IconButton>
                <SectionMenu>
                    <CreateProperty property={item} onSaveProperty={onUpdateProperty} />
                    <DeleteProperty property={item} onDeleteProperty={onDeleteProperty} />
                </SectionMenu>
            </SectionHeader>
            <Grid item sm={12}>
                <Collapse in={open} timeout="auto" unmountOnExit key={property.id}>
                    <Grid container rowGap={2} padding={2} gap={10}>
                        <Grid item sm={6}>
                            <img
                                style={{ width: "100%", borderRadius: 10 }}
                                src={item.coverPicture || Constants.DEFAULT_PROPERTY_COVER_PICTURE}
                            />
                        </Grid>
                        <Grid item sm={5}>
                            <RoomListItem rooms={item.rooms} propertyId={item.id} />
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </SectionContainer>
    );
};

export default PropertyItem;
