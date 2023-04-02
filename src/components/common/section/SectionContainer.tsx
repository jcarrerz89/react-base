import React, {ReactNode} from 'react';
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";

const SectionContainer:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Paper elevation={3}>
            <Grid container style={{padding: 10}} marginBottom={3}>
                {children}
            </Grid>
        </Paper>
    )
}

export default SectionContainer;