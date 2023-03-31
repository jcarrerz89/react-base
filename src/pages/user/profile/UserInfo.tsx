import React, {useContext, useState} from "react";
import {Grid, Skeleton} from "@mui/material";
import {UserContext} from "../../../context/UserContextProvider";
import {useQuery} from "@apollo/client";
import {GET_PROFILE} from "../../../server/Queries/profile.queries";
import UserProfileModal from "./UserProfileModal";
import {IProfileType} from "../types/IProfileType";
import AppSubTitle from "../../../components/common/Text/AppSubTitle";
import SectionMenu from "../../../components/common/Menu/SectionMenu";
import AppElementTitle from "../../../components/common/Text/AppElementTitle";
import SectionContainer from "../../../components/common/Section/SectionContainer";
import SectionHeader from "../../../components/common/Section/SectionHeader";

const UserData: React.FC = () => {
    const [profile, setProfile] = useState<IProfileType | null>(null);
    const userContext = useContext(UserContext);
    const {data, loading, error} = useQuery(GET_PROFILE, {
        onCompleted: (data) => {
            const existingProfile: IProfileType = {
                id: data.getUserProfile.id,
                name: data.getUserProfile.name,
                surname: data.getUserProfile.surname,
                nationality: data.getUserProfile.nationality,
                dateOfBirth: data.getUserProfile.date_of_birth,
                image: data.getUserProfile.image,
                description: data.getUserProfile.description,
                createdAt: data.getUserProfile.created_at,
                updatedAt: data.getUserProfile.updated_at
            }

            setProfile(existingProfile);
        }
    });

    const onUpdateProfile = (profile: IProfileType) => {
        setProfile(profile);
    }

    const skeleton = <Skeleton variant="text" width={210} height={118}/>

    return (
        <SectionContainer>
            <SectionHeader>
                <AppSubTitle>Profile</AppSubTitle>
                <SectionMenu>
                    <UserProfileModal profile={profile} onUpdateProfile={onUpdateProfile}/>
                </SectionMenu>
            </SectionHeader>
            <Grid container rowGap={5}>
                <Grid item container sm={12}>
                    <Grid item sm={6}>
                        {profile ? <img src={profile.image}/> : skeleton}
                    </Grid>
                    <Grid item container sm={6} rowGap={5}>
                        <Grid item container sm={12}>
                            <Grid item sm={12}>
                                <AppElementTitle>Username</AppElementTitle>
                            </Grid>
                            <Grid item sm={12}>
                                {profile ? userContext.user?.username : skeleton}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={12}>
                                <AppElementTitle>Email</AppElementTitle>
                            </Grid>
                            <Grid item sm={12}>
                                {profile ? userContext.user?.email : skeleton}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <AppElementTitle>Name</AppElementTitle>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.name : skeleton}
                    </Grid>
                </Grid>
                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <AppElementTitle>Surname</AppElementTitle>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.surname : skeleton}
                    </Grid>
                </Grid>
                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <AppElementTitle>Date of birth</AppElementTitle>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.dateOfBirth : skeleton}
                    </Grid>
                </Grid>
                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <AppElementTitle>Nationality</AppElementTitle>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.nationality : skeleton}
                    </Grid>
                </Grid>
                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <AppElementTitle>Updated at</AppElementTitle>
                    </Grid>
                    <Grid item sm={12}>
                        {/*{profile ? profile.updatedAt : skeleton}*/}
                    </Grid>
                </Grid>
                <Grid item container sm={12}>
                    <Grid item sm={12}>
                        <AppElementTitle>About me</AppElementTitle>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.description : skeleton}
                    </Grid>
                </Grid>
            </Grid>
        </SectionContainer>
    )
}

export default UserData;