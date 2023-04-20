import UserDashboardLayout from "../../components/layout/userDashboardLayout.tsx/UserDashboardLayout";
import SectionContainer from "../../components/common/section/SectionContainer";
import SectionHeader from "../../components/common/section/SectionHeader";

const UserSettings = () => {
    return <UserDashboardLayout>
        <SectionContainer>
            <SectionHeader>
                <h2>Settings</h2>
            </SectionHeader>
        </SectionContainer>
    </UserDashboardLayout>
}

export default UserSettings;