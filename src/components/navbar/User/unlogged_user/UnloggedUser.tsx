import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Box from "@mui/material/Box";
import { Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/PersonOutline';


const UnloggedUser = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const onSignIn = () => {
        console.log(onSignIn);
        return <SignIn />
    }

    const onSignUp = () => {
        return <SignUp />
    }

    return (
        <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <SignIn></SignIn>
                <SignUp></SignUp>
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
                        display: { xs: 'block', md: 'none' },
                    }}>
                    <MenuItem onClick={onSignIn}>
                        Sing In
                    </MenuItem>
                    <MenuItem onClick={onSignUp}>
                        Sing Up
                    </MenuItem>
                </Menu>
            </Box>
        </Toolbar>
    );
}

export default UnloggedUser; 