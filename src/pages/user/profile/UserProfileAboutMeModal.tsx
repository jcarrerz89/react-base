import React, {useContext, useEffect, useState} from 'react';
import {Button, DialogTitle, FormGroup} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {useMutation} from "@apollo/client";
import {UPDATE_PROFILE} from "../../../server/gql/profile.gql";
import DialogActions from "@mui/material/DialogActions";
import {LinearProgressBarContext} from "../../../context/LinearProgressBarContextProvider";
import {IProfileType} from "../types/IProfileType";

interface IUserProfileModal {
    open: boolean,
    profile: IProfileType | null,
    onUpdateProfile: (profile: IProfileType) => void,
    onDismiss: () => void
}

type UserProfileAboutMeType = {
    occupation?: string,
    description?: string
}

const UserProfileAboutMeModal: React.FC<IUserProfileModal> = ({open, profile, onUpdateProfile, onDismiss}) => {

    const progressBar = useContext(LinearProgressBarContext);

    const [profileData, setProfileData] = useState<UserProfileAboutMeType>({} as UserProfileAboutMeType);

    useEffect(() => {
        if (profile) {
            setProfileData({
                occupation: profile.occupation,
                description: profile.description,
            })
        }
    }, [profile]);

    const [updateProfile] = useMutation(UPDATE_PROFILE, {
        onCompleted: (data) => {
            const updatedProfile: IProfileType = {
                id: data.updateProfile.id,
                occupation: data.updateProfile.occupation,
                description: data.updateProfile.description,
            }

            onUpdateProfile(updatedProfile);

            progressBar.hide();
        },
        onError: () => {
            progressBar.hide();
        }
    });

    return (
        <Dialog
            fullWidth
            open={open}
            onClose={onDismiss}
        >

            <form onSubmit={(e) => {
                e.preventDefault();
                progressBar.show();

                updateProfile({
                    variables: {
                        request: profileData
                    }
                });

                onDismiss();
            }}>
                <FormGroup>
                    <DialogTitle title='Edit profile'>Edit profile</DialogTitle>
                    <DialogContent>
                        <Grid container rowGap={2} paddingTop={1}>
                            <Grid item container sm={12}>
                                <Grid item sm={6}>

                                </Grid>
                                <Grid item container sm={6} rowGap={2}>
                                    <Grid item sm={12}>
                                        <TextField label="Occupation"
                                                   variant="outlined"
                                                   value={profileData.occupation}
                                                   type="text"
                                                   fullWidth
                                                   onChange={(e) => {
                                                       setProfileData({
                                                           ...profileData,
                                                           occupation: e.target.value
                                                       });
                                                   }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item sm={12}>
                                <TextField label="About me"
                                           variant="outlined"
                                           value={profileData.description}
                                           type="te"
                                           fullWidth
                                           onChange={(e) => {
                                               setProfileData({
                                                   ...profileData,
                                                   description: e.target.value
                                               });
                                           }}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button type="reset" onClick={onDismiss}>Cancel</Button>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Update
                        </Button>
                    </DialogActions>
                </FormGroup>
            </form>
        </Dialog>
    );
};

export default UserProfileAboutMeModal;
