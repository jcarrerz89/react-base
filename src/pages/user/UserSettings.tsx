import SectionContainer from "@components/common/section/SectionContainer";
import SectionHeader from "@components/common/section/SectionHeader";
import { Typography } from "@mui/material";

const UserSettings = () => {
    return (
        <SectionContainer>
            <SectionHeader>
                <Typography variant="h2">Settings</Typography>
            </SectionHeader>
        </SectionContainer>
    )
}

export default UserSettings;