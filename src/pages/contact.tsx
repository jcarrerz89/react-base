import AboutLayout from '../components/layout/AboutLayout/AboutLayout';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Contact = () => {
    return (
        <AboutLayout>
            <Container fixed>
                <Grid container>
                    <Grid item xs={12}>
                        <div className="content">
                            <h2>Get in touch</h2>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AboutLayout>
    )
}

export default Contact;