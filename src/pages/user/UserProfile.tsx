import React from 'react';
import UserDashboardLayout from '../../components/layout/userDashboardLayout.tsx/UserDashboardLayout';
import UserDetails from "./profile/UserProfileDetails";

const UserProfile: React.FC = () => {

    return (
        <UserDashboardLayout>
            <UserDetails></UserDetails>
        </UserDashboardLayout>
    );
}

export default UserProfile;