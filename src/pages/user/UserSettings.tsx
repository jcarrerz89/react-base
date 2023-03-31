import UserDashboardLayout from "../../components/layout/UserDashboardLayout.tsx/UserDashboardLayout";
import SectionContainer from "../../components/common/Section/SectionContainer";
import SectionHeader from "../../components/common/Section/SectionHeader";
import AppSubTitle from "../../components/common/Text/AppSubTitle";


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