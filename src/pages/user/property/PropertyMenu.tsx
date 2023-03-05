import { Box, Toolbar, Tooltip, IconButton } from '@mui/material';
import React from 'react';
import AppSubTitle from '../../../components/common/Text/AppSubTitle';
import { Container } from '@mui/system';
import CreateProperty from './CreateProperty';

const PropertyMenu = () => {
    const create = () => {

    }
    return (
        <Container>
            <Toolbar sx={{justifyContent: 'space-evenly'}}>
                <Box sx={{ flexGrow: 1}}>
                    <AppSubTitle>Property</AppSubTitle>
                </Box>
                <Box sx={{ flexGrow: 1}}>
                    <CreateProperty />
                </Box>
            </Toolbar>
        </Container>
    )
}
export default PropertyMenu;
