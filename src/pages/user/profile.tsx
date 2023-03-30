import React from 'react';
import UserDashboardLayout from '../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout';
import UserInfo from "./profile/UserInfo";

const Profile: React.FC = () => {

    return (
        <UserDashboardLayout>
            <UserInfo></UserInfo>


        </UserDashboardLayout>
    );
}

export default Profile;