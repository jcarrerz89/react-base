import React, {Profiler, useState} from 'react';
import Box from "@mui/material/Box";
import UserDashboardLayout from '@components/layout/userDashboardLayout/UserDashboardLayout';
import UserDashboardMenu from "@components/menu/UserDashboardMenu";
import UserProfile from './user/UserProfile';
import UserProperty from './user/UserProperty';
import UserActivity from './user/UserActivity';
import UserSettings from './user/UserSettings';

const User = () => {
    const [view, setView] = useState('profile');

    const onSwitch = (view: string) => {
        setView(view);
    }

    function cases() {
        switch(view) {
            case 'activity': 
                return <UserActivity />
                break;
            case 'property': 
                return <UserProperty />
                break;
            case 'settings': 
                return <UserSettings />
                break;
            
            default: 
                return <UserProfile />
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