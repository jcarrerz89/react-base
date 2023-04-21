import React from 'react';
import SectionContainer from "../../components/common/section/SectionContainer";
import SectionHeader from "../../components/common/section/SectionHeader";
import UserDashboardLayout from "../../components/layout/userDashboardLayout/UserDashboardLayout";
import { Typography } from '@mui/material';

const UserActivity = () => {
    return (
        <SectionContainer>
            <SectionHeader>
                <Typography variant="h2">Activity</Typography>
            </SectionHeader>
        </SectionContainer>
    );
}

export default UserActivity;