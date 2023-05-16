import React, {useState} from 'react';
import Box from "@mui/material/Box";
import UserDashboardLayout from '@components/layout/userDashboardLayout/UserDashboardLayout';
import UserDashboardMenu from "@components/menu/UserDashboardMenu";

const User = () => {
    const [view, setView] = useState('profile');

    const onSwitch = (view: string) => {
        setView(view);
    }

    function cases() {
        switch(view) {
            case 'activity': 
                return <></>
                break;
            case 'property': 
                return <></>
                break;
            case 'settings': 
                return <></>
                break;
            default: 
                return <></>
                break;
        }
    }

    return (
        <UserDashboardLayout>
            <Box sx={{display: "flex"}}>
                <UserDashboardMenu onSwitch={onSwitch}/>
                <Box id="dashboard-content" component="div" paddingX={5} sx={{overflow: 'auto'}}>
                    
                    {cases()}
                </Box>
            </Box>
        </UserDashboardLayout>
    );
}

export default User;