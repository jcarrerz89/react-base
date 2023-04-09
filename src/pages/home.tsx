import Container from '@mui/material/Container'
import AppSubTitle from '../components/common/text/AppSubTitle'
import HomeLayout from '../components/layout/HomeLayout/HomeLayout'
import {useQuery} from "@apollo/client";
import {GET_LATEST_ANNOUNCEMENTS} from "../server/gql/announcement.gql";

const Home: React.FC = () => {

    const {data, loading, error} = useQuery(GET_LATEST_ANNOUNCEMENTS, {

    });

    return (
        <HomeLayout>
            <Container fixed>
                <AppSubTitle>What's new</AppSubTitle>

            </Container>
        </HomeLayout>
    );
}

export default Home;