import { LinearProgress, Paper, Toolbar} from "@mui/material";
import React from "react";
import Logo from "../common/Brand/Logo";
import MenuUser from "./User/MenuUser";

const WhiteNavbar = () => {
    return (
        <Paper elevation={3}>
            <Toolbar sx={{ "justify-content": "space-between" }}>
                <Logo />

                {/* <MenuPages /> */}

                <MenuUser />
            </Toolbar>
            <LinearProgress />
        </Paper>
    );
};

export default WhiteNavbar;
