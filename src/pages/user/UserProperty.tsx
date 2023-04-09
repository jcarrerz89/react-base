import React from 'react';
import UserDashboardLayout from '../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout';
import PropertiesList from './property/PropertiesList';

const UserProperty: React.FC = () => {

    return (
        <UserDashboardLayout>
            {/* <PropertyMenu /> */}

            <PropertiesList />
        </UserDashboardLayout>
    );
}

export default UserProperty;