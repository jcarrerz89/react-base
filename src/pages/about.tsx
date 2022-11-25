import AboutLayout from '../components/layout/AboutLayout/AboutLayout';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const About = () => {
    return (
        <AboutLayout>
            <Container fixed>
                <Grid container>
                    <Grid item xs={12}>
                        <div className="content">
                            <h2>Why we built Blue Bells?</h2>
                            <div>
                                <p>Let's face it, who want to buy a house today?</p>

                                <p>Society changes and our life styles are changing with it.
                                    What was before the goal of a lifetime, for the previous generations,
                                    it's not there anymore. Not when the price of a property
                                    makes it so painful to afford, and not when it's so
                                    funny to travel and discover new places to live. We live in
                                    globilized world, in a digital era, and we should maximize
                                    the opportunieties that </p>

                                <p> However, it's not that easy to find the right place to live.
                                    It's a bit of a risk, isn't? </p>

                                <p> That's what Blue Bells is for. We build Blue Bells to make your
                                    experience of looking for a new home, something incredible easy.</p>

                                <p>Either if you like to travel only with a single bag, or you are bringing you own bed with you.
                                    Either if you are moving to a country and you're struggling
                                    with the language. either if you're looking for a long term agreament or a short one.
                                    There is always someone looking to share his place with the right person. </p>
                                <p>Let's find it.</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AboutLayout>
    )
}

export default About