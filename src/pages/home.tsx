import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import AppSubTitle from '../components/common/Text/AppSubTitle'
import HomeLayout from '../components/layout/HomeLayout/HomeLayout'

const Home: React.FC = () => {
    return (
        <HomeLayout>
            <Container fixed>
                <head>
                    <title>Blue Bells</title>
                    <meta name="description" content="Blue Bells"/>
                    <link rel="icon" href="/favicon.ico"/>
                </head>
                <body>
                <AppSubTitle>What's new</AppSubTitle>

                <Grid>
                    </Grid>
                    <Grid>
                    </Grid>
                </body>
            </Container>
        </HomeLayout>
    )
}

export default Home;