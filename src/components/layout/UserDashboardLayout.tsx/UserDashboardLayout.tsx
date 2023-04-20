import React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import WhiteNavbar from "../../navbar/WhiteNavbar";
import SmallFooter from "../../footer/SmallFooter";
import UserMenu from "../../../pages/user/menu/UserMenu";
import BackgroundCover from "assets/images/mountains.jpg";

const UserDashboardContainer = styled('div')(() => ({
    width: '100hh',
    height: '100vh',
    backgroundImage: `url(${BackgroundCover})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no - repeat',
    backgroundSize: 'cover'
}));

const UserDashboardLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <UserDashboardContainer id={'test-id-name'}>
            <WhiteNavbar/>
            <Box sx={{display: "flex"}}>
                <UserMenu/>
                <Box id="dashboard-content" component="div" paddingX={5} sx={{overflow: 'auto'}}>
                    {children}
                </Box>
            </Box>
            <SmallFooter/>
        </UserDashboardContainer>
    );
};

export default UserDashboardLayout;
