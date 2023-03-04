import AboutLayout from '../components/layout/AboutLayout/AboutLayout';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppSubTitle from '../components/common/Text/AppSubTitle';

const Contact = () => {
    return (
        <AboutLayout>
            <Container fixed>
                <Grid container>
                    <Grid item xs={12}>
                        <div className="content">
                            <AppSubTitle>Get in touch</AppSubTitle>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AboutLayout>
    )
}

export default Contact;