import './Navbar.css';
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/AcUnit';
import { Grow } from '@mui/material';
import SignIn from '../user/unlogged_user/SignIn';
import UserNavbar from '../user/UserNavbar';

const pages = ['Search', 'Communitty'];

const AppNavbar: React.FC = () => {

    const [state, setState] = useState({
        collapse: false,
        style: {
            backgroundColor: 'transparent',
            fontColor: 'white',
            padding: '1rem 2rem'
        }
    })

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

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
                            letterSpacing: '.3rem',
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
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        Blue Bells
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                {page}
                            </Button>
                        ))} */}
                        <UserNavbar />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}>

                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default AppNavbar;