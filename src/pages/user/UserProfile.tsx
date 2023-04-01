import React from 'react';
import UserDashboardLayout from '../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout';
import UserDetails from "./profile/UserDetails";

const UserProfile: React.FC = () => {

    return (
        <UserDashboardLayout>
            <UserDetails></UserDetails>
        </UserDashboardLayout>
    );
}

export default UserProfile;