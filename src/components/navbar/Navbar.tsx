import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/AcUnit';
import MenuPages from './Pages/MenuPages';
import MenuUser from './User/MenuUser';
import { makeStyles } from '@mui/material';
import { Box } from '@mui/system';
import Logo from '../common/Brand/Logo';

const pages = ['Search', 'About', 'Contact'];

const defaultStyle = {
    backgroundColor: 'transparent',
    fontColor: 'white',
    padding: '1rem 2rem'
}

const Navbar: React.FC<{ fixed: boolean, minimize: boolean }> = ({ fixed, minimize }) => {

    const [state, setState] = useState({
        collapse: false,
        style: defaultStyle
    });

    useEffect(() => {
        const toggle = () => {
            let scrollPosition = window.pageYOffset;

            console.log('toogle');
            if (!fixed) {
                scrollPosition < 100 ?
                    transparentMode() : whiteMode();
            }
        }

        window.addEventListener("scroll", toggle);

        return () => {
            window.removeEventListener("scroll", toggle);
        };
    });

    const transparentMode = () => {
        setState({
            collapse: false,
            style: defaultStyle
        });
    }

    const whiteMode = () => {
        setState({
            collapse: true,
            style: {
                backgroundColor: 'rgba(0, 0, 0, .7)',
                fontColor: 'black',
                padding: '0.1rem 2rem'
            }
        });
    }

    // toggle();

    return (
        <AppBar position="fixed" style={state.style}>
            <Container maxWidth="xl">
                <Toolbar sx={{ 'justify-content': 'space-between'}}>
                    <Logo />

                    {/* <MenuPages /> */}

                    <MenuUser />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;