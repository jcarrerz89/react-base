import React from 'react';
import {styled} from '@mui/material/styles';
import {Paper} from '@mui/material';
import LinearProgressBar from "../common/loading/LinearProgressBar";
import Grid from "@mui/material/Grid";

const FooterContainer = styled('footer')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    bottom: 0,
    width: '100%',
}));

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Paper elevation={3}>
                <LinearProgressBar/>
                <Grid container paddingY={3} paddingX={5} justifyContent={'space-between'}>
                    <Grid item sm={12}>
                        <label style={{float: 'right'}}>© 2023 BlueBells. All rights reserved.</label>
                    </Grid>
                </Grid>
            </Paper>
        </FooterContainer>
    );
};

export default Footer;
