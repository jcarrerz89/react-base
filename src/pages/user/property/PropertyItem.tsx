import React, {useState} from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import {Avatar, Collapse, Grid, IconButton, Typography} from "@mui/material";
import RoomListItem from "../room/RoomListItem";
import Constants from "enum/constants";
import {IPropertyType} from "../types/IPropertyType";
import DeleteProperty from "./DeleteProperty";
import SectionContainer from "../../../components/common/section/SectionContainer";
import SectionHeader from "../../../components/common/section/SectionHeader";
import SectionMenu from "../../../components/common/menu/SectionMenu";
import CreatePropertyModal from "./CreatePropertyModal";
import SectionMenuItem from "../../../components/common/menu/SectionMenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface IPropertyItem {
    property: IPropertyType,
    onDeleteProperty: (propertyId: number) => void
}

const PropertyItem: React.FC<IPropertyItem> = ({ property, onDeleteProperty }) => {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState<IPropertyType>(property);
    const [openEditPropertyModal, setOpenEditPropertyModal] = useState(false);
    const [openDeletePropertyModal, setOpenDeletePropertyModal] = useState(false);

    const onUpdateProperty = (property: IPropertyType) => {
        setItem(property);
    }

    const onOpenEditPropertyModal = () => {
        setOpenEditPropertyModal(true);
    }
    const onCloseEditPropertyModal = () => {
        setOpenEditPropertyModal(false);
    }
    const onOpenDeletePropertyModal = () => {
        setOpenDeletePropertyModal(true);
    }
    const onCloseDeletePropertyModal = () => {
        setOpenDeletePropertyModal(false);
    }

    return (
        <SectionContainer>
            <SectionHeader>
                <Typography variant="h2">{property.alias}</Typography>
                <IconButton aria-label="expand row" size="medium" onClick={() => setOpen(!open)} sx={{float: 'right'}}>
                    {open ? <KeyboardArrowUp /> : <KeyboardArrowUp />}
                </IconButton>
                <SectionMenu>
                    <SectionMenuItem icon={<EditIcon />} label={'edit'} description={'Edit property'} callback={onOpenEditPropertyModal} />
                    <SectionMenuItem icon={<DeleteForeverIcon />} label={'edit'} description={'Edit property'} callback={onOpenDeletePropertyModal} />
                </SectionMenu>
            </SectionHeader>
            <Grid item sm={12}>
                <Collapse in={open} timeout="auto" unmountOnExit key={property.id}>
                    <Grid container rowGap={2} padding={2} gap={5}>
                        <Grid item sm={4}>
                            <Avatar
                                alt="property-cover-picture"
                                style={{ width: '12rem', height: '12rem' }}
                                src={item.coverPicture || Constants.DEFAULT_PROPERTY_COVER_PICTURE}
                            />
                        </Grid>
                        <Grid item sm={7}>
                            <RoomListItem rooms={item.rooms} propertyId={item.id} />
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>

            {/* Property modals */}
            <CreatePropertyModal open={openEditPropertyModal} property={item} onSaveProperty={onUpdateProperty} onDismiss={onCloseEditPropertyModal}/>
            <DeleteProperty open={openDeletePropertyModal} property={item} onDelete={onDeleteProperty} onDismiss={onCloseDeletePropertyModal}/>
        </SectionContainer>
    );
};

export default PropertyItem;
