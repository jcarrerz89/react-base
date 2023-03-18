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
            <Toolbar>
                <Box sx={{ flexGrow: 1}}>
                    <AppSubTitle>Property</AppSubTitle>
                </Box>
            </Toolbar>
        </Container>
    )
}
export default PropertyMenu;
