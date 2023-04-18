import React, {ReactNode} from 'react';
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";

const SectionContainer:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Paper elevation={1} >
            <Grid container style={{paddingTop: 10, paddingLeft: 20, paddingRight: 10, paddingBottom: 20}} marginBottom={3}>
                {children}
            </Grid>
        </Paper>
    )
}

export default SectionContainer;