import React from 'react';
import UserDashboardLayout from '../../components/layout/userDashboardLayout/UserDashboardLayout';
import UserDetails from "./profile/UserProfileDetails";

const UserProfile: React.FC = () => {

    return (
        <UserDashboardLayout>
            <UserDetails></UserDetails>
        </UserDashboardLayout>
    );
}

export default UserProfile;