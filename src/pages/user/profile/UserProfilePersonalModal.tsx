import React, {useContext, useEffect, useState} from 'react';
import Characters from "../../../enum/char";
import {Button, DialogTitle, FormGroup} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {DatePicker} from "@mui/x-date-pickers";
import {IProfileType} from "../types/IProfileType";
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

type UserProfilePersonalType = {
    name?: string,
    surname?: string,
    dateOfBirth?: string,
    nationality?: string
}

const UserProfileContactModal: React.FC<IUserProfileModal> = ({open, profile, onUpdateProfile, onDismiss}) => {

    const progressBar = useContext(LinearProgressBarContext);

    const [profileData, setProfileData] = useState({} as UserProfilePersonalType);

    useEffect(() => {
        if (profile) {
            setProfileData({
                name: profile.name,
                surname: profile.surname,
                dateOfBirth: profile.dateOfBirth,
                nationality: profile.nationality,
            })
        }
    }, [profile]);

    const [updateProfile] = useMutation(UPDATE_PROFILE, {
        onCompleted: (data) => {
            const updatedProfile: IProfileType = {
                id: data.updateProfile.id,
                name: data.updateProfile.name,
                surname: data.updateProfile.surname,
                dateOfBirth: data.updateProfile.dateOfBirth,
                nationality: data.updateProfile.nationality,
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
                                        <TextField label="Name"
                                                   variant="outlined"
                                                   value={profileData.name}
                                                   type="text"
                                                   fullWidth
                                                   onChange={(e) => {
                                                       setProfileData({
                                                           ...profileData,
                                                           name: e.target.value
                                                       });
                                                   }}
                                        />
                                    </Grid>
                                    <Grid item sm={12}>
                                        <TextField label="Surname"
                                                   variant="outlined"
                                                   value={profileData.surname}
                                                   type="text"
                                                   fullWidth
                                                   onChange={(e) => {
                                                       setProfileData({
                                                           ...profileData,
                                                           surname: e.target.value
                                                       });
                                                   }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item sm={6}>
                                <DatePicker/>
                            </Grid>
                            <Grid item sm={6}>
                                <TextField label="Nationality"
                                           variant="outlined"
                                           value={profileData.nationality}
                                           type="text"
                                           fullWidth
                                           onChange={(e) => {
                                               setProfileData({
                                                   ...profileData,
                                                   nationality: e.target.value
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
