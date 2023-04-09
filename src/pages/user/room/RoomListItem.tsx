import React, {useState} from "react";
import CreateRoomModal from "./CreateRoomModal";
import {IconButton, ImageList, ImageListItem, ImageListItemBar, Tooltip} from "@mui/material";
import Constants from "enum/constants";
import {IRoomType} from "../types/IRoomType";
import RoomViewItem from "./RoomViewItem";
import {IPropertyType} from "../types/IPropertyType";
import AddCircleRoundedIcon from "@mui/icons-material/Add";

const RoomListItem: React.FC<{ rooms: IRoomType[]; propertyId: number }> = ({ rooms, propertyId }) => {

    const [roomList, setRoomList] = useState<IRoomType[]>(rooms);
    const [openCreateRoomModal, setOpenCreateRoomModal] = useState(false);

    const onCreateRoom = (room: IRoomType) => {
        let rooms = roomList.concat(room);
        setRoomList(rooms);
    }

    const onCloseCreateRoomModal = () => {
        setOpenCreateRoomModal(false);
    }

    const onOpenCreateRoomModal = () => {
        setOpenCreateRoomModal(true);
    }

    const onDeleteRoom = (roomId: number) => {
        setRoomList(roomList.filter((room: IRoomType) => room.id !== roomId));
    }

    const addRoomIcon = roomList.length < 9 ?
        <Tooltip title="Create a new property">
            <ImageListItem>
                <IconButton
                    onClick={() => {
                        setOpenCreateRoomModal(true);
                    }}
                    sx={{my: 2, color: "Black", display: "block"}}
                >
                    <AddCircleRoundedIcon/>
                </IconButton>
            </ImageListItem>
        </Tooltip> : null;

    return (
        <>
            <ImageList variant="masonry" cols={2} gap={8}>
                {roomList.map((room, key) => (
                    <RoomViewItem room={room} onDelete={onDeleteRoom} key={key}/>
                ))}

                { addRoomIcon }
            </ImageList>
            <CreateRoomModal propertyId={propertyId} open={openCreateRoomModal} onSaveRoom={onCreateRoom} onDismiss={onCloseCreateRoomModal}/>
        </>
    );
};

export default RoomListItem;
