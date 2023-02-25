import './Footer.css'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import AppTitle from '../common/Text/AppTitle'

const FooterContainer = styled(Paper)(({theme}) => ({
    backgroundColor: '#05204A',
    padding: '3rem 3rem 1rem 3rem',
    color: '#FFF'
}));

const Footer = () => {
    return (
        <FooterContainer>
            <Container fixed>
                <Grid container spacing={6}>
                    <Grid item xs={4}>
                        <AppTitle>Blue Bells</AppTitle>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={3}>
                            <a href={'/about'}>
                                About
                            </a>
                            <a href={'/contact'}>
                                Contact
                            </a>
                        </Stack>
                    </Grid>

                    <Grid item xs={4}>
                        <Stack spacing={3}>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <small>Created by @AuraFactoy</small>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer>
    )
}

export default Footer;