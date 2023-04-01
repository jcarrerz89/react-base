import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import WhiteNavbar from "../../navbar/WhiteNavbar";
import UserMenu from "pages/user/Menu/UserMenu";

const UserDashboardContainer = styled('div')(({}) => ({
    backgroundColor: "#FBFBFB",
    width: '100%',
    height:  '100%'
}));


const UserDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme = useTheme();

    return (
        <UserDashboardContainer>
            <WhiteNavbar />
            <Box sx={{ display: "flex" }}>
                <UserMenu />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                </Box>
            </Box>
        </UserDashboardContainer>
    );
};

export default UserDashboardLayout;
