import React from "react";
import {styled} from "@mui/material/styles";
import WhiteNavbar from "@components/navbar/WhiteNavbar";
import SmallFooter from "@components/footer/SmallFooter";
import BackgroundCover from "@assets/images/mountains.jpg";

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
                {children}
            <SmallFooter/>
        </UserDashboardContainer>
    );
};

export default UserDashboardLayout;
