import React from 'react';
import SectionContainer from "../../components/common/section/SectionContainer";
import SectionHeader from "../../components/common/section/SectionHeader";
import UserDashboardLayout from "../../components/layout/userDashboardLayout.tsx/UserDashboardLayout";

const UserInbox = () => {
    return (
        <UserDashboardLayout>
            <SectionContainer>
                <SectionHeader>
                    <h2>Inbox</h2>
                </SectionHeader>
            </SectionContainer>
        </UserDashboardLayout>
    );
}

export default UserInbox;