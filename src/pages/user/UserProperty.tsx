import React from 'react';
import UserDashboardLayout from '../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout';
import PropertiesList from './property/PropertiesList';
import PropertyMenu from './property/PropertyMenu';

const UserProperty: React.FC = () => {

    return (
        <UserDashboardLayout>
            {/* <PropertyMenu /> */}

            <PropertiesList />
        </UserDashboardLayout>
    );
}

export default UserProperty;