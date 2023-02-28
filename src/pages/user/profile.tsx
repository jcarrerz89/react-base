import React from 'react';
import UserDashboardLayout from '../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout';
import Navbar from '../../components/navbar/Navbar';

const Profile: React.FC = () => {

    return (
        <UserDashboardLayout>
            <Navbar fixed={true} minimize={true}/>


        </UserDashboardLayout>
    );
}

export default Profile;