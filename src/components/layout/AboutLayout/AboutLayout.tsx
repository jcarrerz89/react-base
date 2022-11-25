import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import Grid from "@mui/material/Grid";
import {FC} from "react";

const AboutLayout: FC<{children: React.ReactNode}> = (children) => {
    return (
        <>
            <Navbar/>

            <div className='cover'>
            </div>
            {children}

            <Grid container columns={12}>
                <Grid item spacing={6}>
                </Grid>
            </Grid>
            <Footer/>
        </>
    )
}

export default AboutLayout;