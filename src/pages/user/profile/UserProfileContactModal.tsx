import React, {useContext, useEffect, useState} from 'react';
import {Button, DialogTitle, FormGroup} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {IProfileType} from "../../../types/IProfileType";
import {useMutation} from "@apollo/client";
import {UPDATE_PROFILE} from "../../../server/gql/profile.gql";
import DialogActions from "@mui/material/DialogActions";
import {LinearProgressBarContext} from "../../../context/LinearProgressBarContextProvider";

interface IUserProfileModal {
    open: boolean,
    profile: IProfileType | null,
    onUpdateProfile: (profile: IProfileType) => void,
    onDismiss: () => void
}

type UserProfileContactType = {
    phoneNumber?: string,
    website?: string
}

const UserProfileContactModal: React.FC<IUserProfileModal> = ({open, profile, onUpdateProfile, onDismiss}) => {

    const progressBar = useContext(LinearProgressBarContext);

    const initState: UserProfileContactType = {
        phoneNumber: '',
        website: ''
    }
    const [profileData, setProfileData] = useState<UserProfileContactType>(initState);

    useEffect(() => {
        if (profile) {
            setProfileData({
                phoneNumber: profile.phoneNumber || '',
                website: profile.website || ''
            });
        }
    }, [profile]);

    const [updateProfile] = useMutation(UPDATE_PROFILE, {
        onCompleted: (data) => {
            const updatedProfile: IProfileType = {
                id: data.updateProfile.id,
                phoneNumber: data.updateProfile.phoneNumber,
                website: data.updateProfile.website,
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
                    <DialogTitle title='Edit profile'>Contact</DialogTitle>
                    <DialogContent>
                        <Grid container rowGap={2} paddingTop={1}>
                            <Grid item sm={12}>
                                <TextField label="Phone number"
                                           variant="outlined"
                                           value={profileData.phoneNumber}
                                           type="text"
                                           fullWidth
                                           onChange={(e) => {
                                               setProfileData({
                                                   ...profileData,
                                                   phoneNumber: e.target.value
                                               });
                                           }}
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField label="Website"
                                           variant="outlined"
                                           value={profileData.website}
                                           type="te"
                                           fullWidth
                                           onChange={(e) => {
                                               setProfileData({
                                                   ...profileData,
                                                   website: e.target.value
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

export default UserProfileContactModal;
