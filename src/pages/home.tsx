import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import AppSubTitle from '../components/common/Text/AppSubTitle'
import HomeLayout from '../components/layout/HomeLayout/HomeLayout'

const Home: React.FC = () => {
    return (
        <HomeLayout>
            <Container fixed>
                <AppSubTitle>What's new</AppSubTitle>

                <Grid>
                </Grid>
                <Grid>
                </Grid>
            </Container>
        </HomeLayout>
    )
}

export default Home;