import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import HomeLayout from '../components/layout/HomeLayout/HomeLayout'

export default function Home() {
    return (
        <HomeLayout>
            <Container fixed>
                <head>
                    <title>Blue Bells</title>
                    <meta name="description" content="Blue Bells"/>
                    <link rel="icon" href="/favicon.ico"/>
                </head>
                <body>
                    <Grid>
                        <h2>What's new</h2>
                    </Grid>
                    <Grid>
                    </Grid>
                </body>
            </Container>
        </HomeLayout>
    )
}
