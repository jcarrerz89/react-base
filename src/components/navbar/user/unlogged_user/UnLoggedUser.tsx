import React, {useState} from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import Box from "@mui/material/Box";
import {Toolbar, IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/PersonOutline';
import Button from "@mui/material/Button";

const UnLoggedUser = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [openSignUp, setOpenSignUp] = useState<boolean>(false);
    const [openSignIn, setOpenSignIn] = useState<boolean>(false);

    const onOpenSignUp = () => {
        setOpenSignUp(true);
    }
    const onCloseSignUp = () => {
        setOpenSignUp(false);
    }
    const onOpenSignIn = () => {
        setOpenSignIn(true);
    }
    const onCloseSignIn = () => {
        setOpenSignIn(false);
    }
    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (
        <Toolbar>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                <Button
                    variant="text"
                    className="pull-right"
                    sx={{my: 2, color: 'white', display: 'block'}}
                    onClick={onOpenSignIn}>
                    Sign in
                </Button>
                <Button
                    variant="text"
                    className="pull-right"
                    sx={{my: 2, color: 'white', display: 'block'}}
                    onClick={onOpenSignUp}>
                    Sign up
                </Button>

                <SignInModal open={openSignIn} onDismiss={onCloseSignIn} />
                <SignUpModal open={openSignUp} onDismiss={onCloseSignUp} />
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
                    id="unlogged-user-menu"
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
                    <MenuItem onClick={onOpenSignIn}>
                        Sing In
                    </MenuItem>
                    <MenuItem onClick={onOpenSignUp}>
                        Sing Up
                    </MenuItem>
                </Menu>
            </Box>
        </Toolbar>
    );
}

export default UnLoggedUser;