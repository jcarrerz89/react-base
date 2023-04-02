import { Box, Toolbar, Tooltip, IconButton } from '@mui/material';
import React from 'react';
import AppSubTitle from '../../../components/common/text/AppSubTitle';
import { Container } from '@mui/system';
import CreatePropertyModal from './CreatePropertyModal';

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
