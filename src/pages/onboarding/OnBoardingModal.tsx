import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import {Avatar, Typography} from "@mui/material";
import RoomImage from "../../assets/images/room.png";
import FlatmateImage from "../../assets/images/flatmate.png";

interface IOnBoardingModal {
    open: boolean,
    onDismiss: () => void
}

const OnBoardingModal: React.FC<IOnBoardingModal> = ({open, onDismiss}) => {

    return (
        <Dialog open={open} onClose={onDismiss} fullWidth>
            <DialogContent>
                <Grid container>
                    <Grid item sm={6} style={{textAlign: 'center'}}>
                        <Avatar src={FlatmateImage} style={{width: 200, height: 200, margin: '0 auto 1rem'}}/>
                        <Typography variant="h3">I look for a room</Typography>
                    </Grid>
                    <Grid item sm={6} style={{textAlign: 'center'}}>
                        <Avatar src={RoomImage}  style={{width: 200, height: 200, margin: '0 auto 1rem'}}/>
                        <Typography variant="h3" >I have a room to rent</Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

export default OnBoardingModal;