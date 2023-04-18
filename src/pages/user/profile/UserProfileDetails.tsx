import React, {useContext, useState} from "react";
import {Avatar, Grid, Skeleton, Typography} from "@mui/material";
import {UserContext} from "../../../context/UserContextProvider";
import {useQuery} from "@apollo/client";
import {GET_PROFILE} from "../../../server/gql/profile.gql";
import UserProfileModal from "./UserProfileModal";
import {IProfileType} from "../types/IProfileType";
import SectionMenu from "../../../components/common/menu/SectionMenu";
import SectionContainer from "../../../components/common/section/SectionContainer";
import SectionHeader from "../../../components/common/section/SectionHeader";
import Characters from "../../../enum/char";
import SectionMenuItem from "../../../components/common/menu/SectionMenuItem";
import EditIcon from "@mui/icons-material/Edit";

const UserDatails: React.FC = () => {
    const initProfile: IProfileType = {
        id: 0,
        name: String(Characters.EMPTY),
        surname: String(Characters.EMPTY),
        nationality: String(Characters.EMPTY),
        dateOfBirth: String(Characters.EMPTY),
        image: String(Characters.EMPTY),
        description: String(Characters.EMPTY),
        createdAt: new Date(),
        updatedAt: new Date()
    }
    const [profile, setProfile] = useState<IProfileType | null>(initProfile);
    const [openEditUserProfileModal, setOpenEditUserProfileModal] = useState<boolean>(false);
    const userContext = useContext(UserContext);

    const onOpenEditUserProfileModal = () => {
        setOpenEditUserProfileModal(true);
    }
    const onCloseEditUserProfileModal = () => {
        setOpenEditUserProfileModal(false);
    }

    useQuery(GET_PROFILE, {
        onCompleted: (data) => {
            if (data.getUserProfile) {
                const existingProfile: IProfileType = {
                    id: data.getUserProfile.id,
                    name: data.getUserProfile.name,
                    surname: data.getUserProfile.surname,
                    nationality: data.getUserProfile.nationality,
                    dateOfBirth: data.getUserProfile.dateOfBirth,
                    image: data.getUserProfile.image,
                    description: data.getUserProfile.description,
                    createdAt: data.getUserProfile.createdAt,
                    updatedAt: data.getUserProfile.updatedAt
                }
                setProfile(existingProfile);
            }
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const onUpdateProfile = (profile: IProfileType) => {
        setProfile(profile);
    }

    const skeleton = <Skeleton variant="text" width={210} height={118}/>

    return (
        <Grid container columnGap={3}>
            <Grid item sm={5}>
                <SectionContainer>
                    <Grid item sm={12}>
                        {profile ? <img src={profile.image}/> : skeleton}
                        <Avatar alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{width: 180, height: 180, margin: '0 auto'}}/>
                    </Grid>
                </SectionContainer>
            </Grid>
            <Grid item sm={6}>
                <SectionContainer>
                    <SectionHeader>
                        <Typography variant="h2">Contact</Typography>
                        <SectionMenu>
                            <SectionMenuItem icon={<EditIcon/>} label="Edit" description="Edit profile"
                                             callback={onOpenEditUserProfileModal}/>
                        </SectionMenu>
                    </SectionHeader>
                    <Grid container rowGap={3}>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Username</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {profile ?
                                    <Typography variant="body1">{userContext.user?.username}</Typography> : skeleton}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Email</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {profile ?
                                    <Typography variant="body1">{userContext.user?.email}</Typography> : skeleton}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Phone number</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {/*{profile ? <Typography variant="body1">{userContext.user?.email}</Typography> : skeleton}*/}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Website</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {/*{profile ? <Typography variant="body1">{userContext.user?.email}</Typography> : skeleton}*/}
                            </Grid>
                        </Grid>
                    </Grid>
                </SectionContainer>
            </Grid>
            <Grid item sm={5}>
                <SectionContainer>
                    <SectionHeader>
                        <Typography variant="h2">Personal details</Typography>
                        <SectionMenu>
                            <SectionMenuItem icon={<EditIcon/>} label="Edit" description="Edit profile"
                                             callback={onOpenEditUserProfileModal}/>
                        </SectionMenu>
                    </SectionHeader>
                    <Grid container rowGap={3}>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Name</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {profile ? <Typography variant="body1">{profile.name}</Typography> : skeleton}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Surname</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {profile ? <Typography variant="body1">{profile.surname}</Typography> : skeleton}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Date of birth</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {profile ? <Typography variant="body1">{profile.dateOfBirth}</Typography> : skeleton}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Nationality</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {profile ? <Typography variant="body1">{profile.nationality}</Typography> : skeleton}
                            </Grid>
                        </Grid>
                    </Grid>
                    <UserProfileModal open={openEditUserProfileModal} profile={profile}
                                      onUpdateProfile={onUpdateProfile}
                                      onDismiss={onCloseEditUserProfileModal}/>
                </SectionContainer>
            </Grid>
            <Grid item sm={6}>
                <SectionContainer>
                    <SectionHeader>
                        <Typography variant="h2">About me</Typography>
                        <SectionMenu>
                            <SectionMenuItem icon={<EditIcon/>} label="Edit" description="Edit profile"
                                             callback={onOpenEditUserProfileModal}/>
                        </SectionMenu>
                    </SectionHeader>
                    <Grid container rowGap={3}>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Occupation</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {/*{profile ? <Typography variant="body1">{profile.name}</Typography> : skeleton}*/}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={12}>
                                <Typography variant="h4">About me</Typography>
                            </Grid>
                            <Grid item sm={12}>
                                {profile ? <Typography variant="body1">{profile.description}</Typography> : skeleton}
                            </Grid>
                        </Grid>
                    </Grid>
                    <UserProfileModal open={openEditUserProfileModal} profile={profile}
                                      onUpdateProfile={onUpdateProfile}
                                      onDismiss={onCloseEditUserProfileModal}/>
                </SectionContainer>
            </Grid>
        </Grid>
    )
}

export default UserDatails;