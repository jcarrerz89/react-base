import React from 'react';
import UserDashboardLayout from '../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout';
import UserProfileForm from './profile/UserProfileForm';


const Profile: React.FC = () => {

    return (
        <UserDashboardLayout>
            <UserProfileForm></UserProfileForm>

        </UserDashboardLayout>
    );
}

export default Profile;