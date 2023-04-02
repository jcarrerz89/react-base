import React from 'react';
import SectionContainer from "../../components/common/section/SectionContainer";
import SectionHeader from "../../components/common/section/SectionHeader";
import AppSubTitle from "../../components/common/text/AppSubTitle";
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