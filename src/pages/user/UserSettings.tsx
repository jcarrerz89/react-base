import UserDashboardLayout from "../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout";
import SectionContainer from "../../components/common/section/SectionContainer";
import SectionHeader from "../../components/common/section/SectionHeader";
import AppSubTitle from "../../components/common/text/AppSubTitle";


const UserSettings = () => {
    return <UserDashboardLayout>
        <SectionContainer>
            <SectionHeader>
                <AppSubTitle>Settings</AppSubTitle>
            </SectionHeader>
        </SectionContainer>
    </UserDashboardLayout>
}

export default UserSettings;