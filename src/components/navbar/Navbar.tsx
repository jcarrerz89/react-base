import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/AcUnit';
import Pages from './Pages/Pages';
import UserNavbar from './User/UserNavbar';

const pages = ['Search', 'About', 'Contact'];

const Navbar: React.FC = () => {

    const [state, setState] = useState({
        collapse: false,
        style: {
            backgroundColor: 'transparent',
            fontColor: 'white',
            padding: '1rem 2rem'
        }
    })

    const transparentMode = () => {
        setState({
            collapse: false,
            style: {
                backgroundColor: 'transparent',
                fontColor: 'white',
                padding: '1rem 2rem'
            }
        });
    };

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

    const darkMode = () => {

    }

    useEffect(() => {
        const toggle = () => {
            let scrollPosition = window.pageYOffset;

            if (scrollPosition < 100) {
                transparentMode();
            } else {
                whiteMode();
            }
        }

        window.addEventListener("scroll", toggle);

        return () => {
            window.removeEventListener("scroll", toggle);
        };
    });

    return (
        <AppBar position="fixed" style={state.style}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'cursive',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}> Blue Bells
                    </Typography>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'cursive',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        Blue Bells
                    </Typography>

                    <Pages />

                    <UserNavbar />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;