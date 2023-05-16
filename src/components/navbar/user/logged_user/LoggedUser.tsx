import {Alert, Button, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import React, {useState} from "react";
import {useCookies} from 'react-cookie';
import {UserContext} from "@context/UserContextProvider";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const LoggedUser: React.FC = () => {

    const userContext = React.useContext(UserContext);
    const [cookie, setCookie, removeCookie] = useCookies(['jwt-auth-token']);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [openOnboarding, setOpenOnboarding] = useState(false);
    const onOpenOnboarding = () => {
        setOpenOnboarding(true);
    }

    const logout = () => {
        userContext.setUser(null);
        removeCookie('jwt-auth-token', {path: '/', domain: 'localhost'});

        return (
            <Alert severity="success">
                This is a success alert — <strong>check it out!</strong>
            </Alert>
        );
    }

    return (
        <UserContext.Consumer>
            {data => {
                return (
                    <Toolbar>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={onOpenOnboarding}>
                                Set up
                            </Button>
                            <Button
                                variant="text"
                                href="/me">
                                {data?.user?.username}
                            </Button>
                            <Button
                                variant="text" onClick={logout}>
                                <LogoutIcon/>
                            </Button>
                        </Box>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit">
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="logged-user-menu"
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
                                    display: {xs: 'block', md: 'none'},
                                }}>
                                <MenuItem>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={logout}>
                                    <LogoutIcon/>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                )
            }}
        </UserContext.Consumer>
    )
}

export default LoggedUser;