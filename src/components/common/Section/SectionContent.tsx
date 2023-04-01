import React, {ReactNode} from 'react';
import Grid from "@mui/material/Grid";

const SectionContent:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Grid container>
            <Grid item sm={12}>
                {children}
            </Grid>
        </Grid>
    );
}

export default SectionContent;