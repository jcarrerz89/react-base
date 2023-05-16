import React, {useState} from "react";
import Container from "@mui/material/Container"
import HomeLayout from "@components/layout/homeLayout/HomeLayout"

const Home: React.FC = () => {


    return (
        <HomeLayout>
            <Container fixed>
                <h3>What's new</h3>

            </Container>
        </HomeLayout>
    );
}

    export default Home;