import React from 'react';
import SectionContainer from "../../components/common/Section/SectionContainer";
import SectionHeader from "../../components/common/Section/SectionHeader";
import AppSubTitle from "../../components/common/Text/AppSubTitle";
import UserDashboardLayout from "../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout";

const UserInbox = () => {
    return (
        <UserDashboardLayout>
            <SectionContainer>
                <SectionHeader>
                    <AppSubTitle>Inbox</AppSubTitle>
                </SectionHeader>
            </SectionContainer>
        </UserDashboardLayout>
    );
}

export default UserInbox;