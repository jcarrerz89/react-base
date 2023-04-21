import React, {useContext, useState} from "react";
import {Avatar, Grid, Skeleton, Typography} from "@mui/material";
import {UserContext} from "../../../context/UserContextProvider";
import {useQuery} from "@apollo/client";
import {GET_PROFILE} from "../../../server/gql/profile.gql";
import UserProfileContactModal from "./UserProfileContactModal";
import {IProfileType} from "../types/IProfileType";
import SectionMenu from "../../../components/common/menu/SectionMenu";
import SectionContainer from "../../../components/common/section/SectionContainer";
import SectionHeader from "../../../components/common/section/SectionHeader";
import SectionMenuItem from "../../../components/common/menu/SectionMenuItem";
import EditIcon from "@mui/icons-material/Edit";
import UserProfileAboutMeModal from "./UserProfileAboutMeModal";
import UserProfilePersonalModal from "./UserProfilePersonalModal";

const UserDatails: React.FC = () => {
    const [profile, setProfile] = useState<IProfileType | null>(null);
    const userContext = useContext(UserContext);

    const [openEditUserProfileContactModal, setOpenEditUserProfileContactModal] = useState<boolean>(false);
    const onOpenEditUserProfileContactModal = () => {
        setOpenEditUserProfileContactModal(true);
    }
    const onCloseEditUserProfileContactModal = () => {
        setOpenEditUserProfileContactModal(false);
    }

    const [openEditUserProfilePersonalModal, setOpenEditUserProfilePersonalModal] = useState<boolean>(false);
    const onOpenEditUserPersonalModal = () => {
        setOpenEditUserProfilePersonalModal(true);
    }
    const onCloseEditUserPersonalModal = () => {
        setOpenEditUserProfilePersonalModal(false);
    }

    const [openEditUserProfileAboutMeModal, setOpenEditUserProfileAboutMeModal] = useState<boolean>(false);
    const onOpenEditUserProfileAboutMeModal = () => {
        setOpenEditUserProfileAboutMeModal(true);
    }
    const onCloseEditUserProfileAboutMeModal = () => {
        setOpenEditUserProfileAboutMeModal(false);
    }

    useQuery(GET_PROFILE, {
        onCompleted: (data) => {
            if (data.getUserProfile) {
                const profile = {}
                Object.assign(profile, data.getUserProfile);
                setProfile(profile as IProfileType);
            }
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const onUpdateProfile = (updatedProfile: IProfileType) => {
        const object = {};
        Object.assign(object, profile);
        Object.assign(object, updatedProfile);
        setProfile(object as IProfileType);
    }

    const skeleton = <Skeleton variant="text" width={210} height={118}/>

    return (
        <Grid container columnGap={3}>
            <Grid item sm={5}>
                <SectionContainer>
                    <Grid item sm={12}>
                        {profile ?                         
                        <Avatar alt="avatar"
                                src="/static/images/avatar/1.jpg"
                                sx={{width: 180, height: 180, margin: '0 auto'}}/>  : skeleton }
                    </Grid>
                </SectionContainer>
            </Grid>
            <Grid item sm={6}>
                <SectionContainer>
                    <SectionHeader>
                        <Typography variant="h2">Contact</Typography>
                        <SectionMenu>
                            <SectionMenuItem icon={<EditIcon/>} label="Edit" description="Edit profile"
                                             callback={onOpenEditUserProfileContactModal}/>
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
                                {profile ? <Typography variant="body1">{profile.phoneNumber}</Typography> : skeleton}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Website</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {profile ? <Typography variant="body1">{profile.website}</Typography> : skeleton}
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
                                             callback={onOpenEditUserPersonalModal}/>
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
                    <UserProfileContactModal open={openEditUserProfileContactModal} profile={profile}
                                             onUpdateProfile={onUpdateProfile}
                                             onDismiss={onCloseEditUserProfileContactModal}/>
                </SectionContainer>
            </Grid>
            <Grid item sm={6}>
                <SectionContainer>
                    <SectionHeader>
                        <Typography variant="h2">About me</Typography>
                        <SectionMenu>
                            <SectionMenuItem icon={<EditIcon/>} label="Edit" description="Edit profile"
                                             callback={onOpenEditUserProfileAboutMeModal}/>
                        </SectionMenu>
                    </SectionHeader>
                    <Grid container rowGap={3}>
                        <Grid item container sm={12}>
                            <Grid item sm={6}>
                                <Typography variant="h4">Occupation</Typography>
                            </Grid>
                            <Grid item sm={6}>
                                {profile ? <Typography variant="body1">{profile.occupation}</Typography> : skeleton}
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
                </SectionContainer>
            </Grid>

            <UserProfileContactModal open={openEditUserProfileContactModal} profile={profile}
                                     onUpdateProfile={onUpdateProfile}
                                     onDismiss={onCloseEditUserProfileContactModal}/>
            <UserProfileAboutMeModal open={openEditUserProfileAboutMeModal} profile={profile}
                                     onUpdateProfile={onUpdateProfile}
                                     onDismiss={onCloseEditUserProfileAboutMeModal}/>
            <UserProfilePersonalModal open={openEditUserProfilePersonalModal} profile={profile}
                                      onUpdateProfile={onUpdateProfile}
                                      onDismiss={onCloseEditUserPersonalModal}/>
        </Grid>
    )
}

export default UserDatails;