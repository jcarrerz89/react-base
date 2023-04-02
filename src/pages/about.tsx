import AboutLayout from '../components/layout/AboutLayout/AboutLayout';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppSubTitle from '../components/common/text/AppSubTitle';
import AppTextBlock from '../components/common/text/AppTextBlock';

const About = () => {
    return (
        <AboutLayout>
            <Container fixed>
                <Grid container>
                    <Grid item xs={12}>
                        <div className="content">
                            <AppSubTitle>Why we built Blue Bells?</AppSubTitle>
                                <AppTextBlock>Let's face it, who want to buy a house today?</AppTextBlock>

                                <AppTextBlock>Society changes and our life styles cheanges along with it, and what used to be
                                    the goal of a lifete on previous generations, it is not anymore. 
                                    
                                    Price when up. When whant's to assume a 30 years mortage today? 
                                    Not when is so funny to travel and to move around, and work in remote! 
                                </AppTextBlock>
                                <AppTextBlock>
                                    We live in globilized world, in a digital era, and we should maximize
                                    the opportunieties that's bringing to us. </AppTextBlock>

                                <AppTextBlock> And yet, find a place to stay for long terms is not an easy thing. Is not 
                                    about finding accommodation, is find a new place to call home. That's what 
                                    Blue Bells is for. 
                                </AppTextBlock>

                                <AppTextBlock> We build Blue Bells to make your
                                    experience of looking for a new home, something incredible easy.</AppTextBlock>

                                <AppTextBlock>Either if you visitng a city for a few months and with a single bag, 
                                    or you are bringing you own bed with you and moving houses around. 
                                    Either if you are moving to a country and you're struggling
                                    to speak the language, there is always someone looking to share his 
                                    place with the right person. </AppTextBlock>

                                <AppTextBlock>Let's find it!</AppTextBlock>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AboutLayout>
    )
}

export default About