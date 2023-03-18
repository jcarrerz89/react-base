import React, { useState } from "react";
import CreateRoom from "./CreateRoom";
import { IRoomType } from "../property/PropertyItem";
import { url } from "inspector";
import { Grid, ImageList, ImageListItem, ImageListItemBar, Paper } from "@mui/material";
import Constants from "enum/constants";

const RoomListItem: React.FC<{ rooms: IRoomType[]; propertyId: number }> = ({ rooms, propertyId }) => {
    return (
        <>
            <ImageList variant="masonry" cols={3} gap={8}>
                {rooms.map((room) => (
                    <ImageListItem key={room.id}>
                        <img
                            src={`${room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format`}
                            srcSet={`${room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}
                            loading="lazy"
                        />

                        <ImageListItemBar title={room.alias} >
                            </ImageListItemBar>
                    </ImageListItem>
                ))}
            </ImageList>

            <CreateRoom propertyId={propertyId} />
        </>
    );
};

export default RoomListItem;
