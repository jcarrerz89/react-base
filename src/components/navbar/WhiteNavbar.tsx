import {Paper, Toolbar} from "@mui/material";
import React from "react";
import Logo from "../common/brand/Logo";
import MenuUser from "./user/MenuUser";

const WhiteNavbar = () => {
    return (
        <Paper elevation={0} style={{marginBottom: 20}}>
            <Toolbar sx={{ "justify-content": "space-between" }}>
                <Logo />

                {/* <MenuPages /> */}

                <MenuUser />
            </Toolbar>
        </Paper>
    );
};

export default WhiteNavbar;
