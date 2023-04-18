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
                            <p>Let's face it, who want to buy a house today?</p>

                            <p>Society changes and our life styles changes along with it, and what used to be
                                the goal of a lifetime of the previous generations, it is not anymore.

                                Price when up. When want's to assume a 30 years mortgage today?
                                Not when is so funny to travel and to move around, and work in remote!
                            </p>
                            <p>
                                We live in globalised world, in a digital era, and we should maximize
                                the opportunities that's bringing to us. </p>

                            <p> And yet, find a place to stay for long terms is not an easy thing. Is not
                                about finding accommodation, is find a new place to call home. That's what
                                Blue Bells is for.
                            </p>

                            <p> We build Blue Bells to make your
                                experience of looking for a new home, something incredible easy.</p>

                            <p>Either if you visiting a city for a few months and with a single bag,
                                or you are bringing you own bed with you and moving houses around.
                                Either if you are moving to a country and you're struggling
                                to speak the language, there is always someone looking to share his
                                place with the right person. </p>

                            <p>Let's find it!</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AboutLayout>
    )
}

export default About