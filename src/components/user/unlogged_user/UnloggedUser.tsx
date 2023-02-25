import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Box from "@mui/material/Box";

const UnloggedUser = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </Box>
    );
}

export default UnloggedUser; 