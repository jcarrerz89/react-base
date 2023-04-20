import Container from '@mui/material/Container'
import HomeLayout from '../components/layout/homeLayout/HomeLayout'
import {GET_LATEST_ANNOUNCEMENTS} from "../server/gql/announcement.gql";
import {useQuery} from "@apollo/client";
import React, {useState} from "react";
import {IAnnouncementType} from "./user/types/IAnnouncementType";
import Constants from "../enum/constants";
import {ImageListItem, ImageListItemBar} from "@mui/material";
import Grid from "@mui/material/Grid";

const Home: React.FC = () => {

    const [announcements, setAnnouncements] = useState<IAnnouncementType[]>([]);

    useQuery(GET_LATEST_ANNOUNCEMENTS, {
        variables: {
            take: 5
        },
        onCompleted: (data) => {
            if (data.getLatestAnnouncements) {
                // const announcements = data.getLatestAnnouncements.map((announcement: any) => {
                //     // let announcementType: IAnnouncementType = {
                //     //     id: announcement.id,
                //     //     availableAt: announcement.availableAt,
                //     //     room: announcement.room
                //     // }
                //     //
                //     // return announcementType;
                // });

                setAnnouncements(data.getLatestAnnouncements);
            }
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return (
        <HomeLayout>
            <Container fixed>
                <h3>What's new</h3>

                <Grid container columnGap={2} paddingTop={5} paddingBottom={5}>
                    {announcements.map((announcement: IAnnouncementType) => {
                        return <Grid item lg={3} md={3} sm={3} container key={announcement.id}>
                            <Grid item lg={12} md={12} sm={12}>
                                <ImageListItem key={announcement.id} style={{cursor: 'pointer'}}>
                                    <img
                                        src={`${announcement.room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format`}
                                        srcSet={`${announcement.room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={announcement.room.coverPicture || Constants.DEFAULT_ROOM_COVER_PICTURE}
                                        loading="lazy"
                                    />

                                    <ImageListItemBar title={announcement.room.alias}/>
                                </ImageListItem>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12}>
                                {announcement.description}
                            </Grid>
                            <Grid item sm={12}>
                                <h3>Available at:</h3>
                            </Grid>
                            <Grid item sm={12}>
                                {/*{announcement.availableAt}*/}
                            </Grid>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </HomeLayout>
    );
}

    export default Home;