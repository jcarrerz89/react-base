import React, {useContext, useState} from "react";
import {Grid, Container, Skeleton} from "@mui/material";
import {UserContext} from "../../../context/UserContextProvider";
import {useQuery} from "@apollo/client";
import {GET_PROFILE} from "../../../server/Queries/profile.queries";
import {styled} from "@mui/system";
import UserProfileModal from "./UserProfileModal";
import {IProfileType} from "../types/IProfileType";


const UserData: React.FC = () => {
    const [profile, setProfile] = useState<IProfileType | null>(null);
    const [edit, setEdit] = useState(false);
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

    const Title = styled('label')(() => ({
        color: '#515050',
        fontSize: 12
    }));

    const skeleton = <Skeleton variant="text" width={210} height={118}/>

    return (
        <Container>
            <Grid container rowGap={5}>

                <Grid item container sm={12}>
                    <Grid item sm={6}>
                        {profile ? <img src={profile.image}/> : skeleton}
                    </Grid>
                    <Grid item container sm={6} rowGap={5}>
                        <Grid item container sm={12}>
                            <Grid item sm={12}>
                                <Title>Username</Title>
                            </Grid>
                            <Grid item sm={12}>
                                {profile ? userContext.user?.username : skeleton}
                            </Grid>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={12}>
                                <Title>Email</Title>
                            </Grid>
                            <Grid item sm={12}>
                                {profile ? userContext.user?.email : skeleton}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <Title>Name</Title>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.name : skeleton}
                    </Grid>
                </Grid>
                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <Title>Surname</Title>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.surname : skeleton}
                    </Grid>
                </Grid>
                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <Title>Date of birth</Title>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.dateOfBirth : skeleton}
                    </Grid>
                </Grid>
                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <Title>Nationality</Title>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.nationality : skeleton}
                    </Grid>
                </Grid>
                <Grid item container sm={4}>
                    <Grid item sm={12}>
                        <Title>Updated at</Title>
                    </Grid>
                    <Grid item sm={12}>
                        {/*{profile ? profile.updatedAt : skeleton}*/}
                    </Grid>
                </Grid>
                <Grid item container sm={12}>
                    <Grid item sm={12}>
                        <Title>About me</Title>
                    </Grid>
                    <Grid item sm={12}>
                        {profile ? profile.description : skeleton}
                    </Grid>
                </Grid>
                <Grid
                    xs={12}
                    item
                    container
                    justifyContent={"space-between"}
                >
                    <Grid xs={2} item>
                    </Grid>
                    <Grid xs={2} item>
                        <UserProfileModal profile={profile} onUpdateProfile={onUpdateProfile}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserData;