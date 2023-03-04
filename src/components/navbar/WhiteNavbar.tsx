
import { AppBar, Container, makeStyles, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Logo from '../common/Brand/Logo';
import MenuPages from './Pages/MenuPages';
import MenuUser from './User/MenuUser';

const WhiteNavbar = () => {

    return (
        <Toolbar sx={{ 'justify-content': 'space-between'}}>
            <Logo />

            {/* <MenuPages /> */}

            <MenuUser />
        </Toolbar>
    )
}

export default WhiteNavbar;