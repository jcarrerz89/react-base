import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import AppTitle from '../common/text/AppTitle'
import { Button } from '@mui/material'
import Logo from '../common/brand/Logo'

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
                    <Grid item md={4} xs={12}>
                        <Logo />
                    </Grid>
                    <Grid item md={4}>
                        <Stack spacing={3}>
                            <Button 
                                href="/about"
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                About
                            </Button>
                            <Button 
                                href="/contact"
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                Contact
                            </Button>
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