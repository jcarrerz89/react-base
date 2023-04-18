import React, {ReactNode} from 'react';
import Grid from "@mui/material/Grid";

interface ISectionHeader {
    children: ReactNode | ReactNode[]
}

const SectionHeader:React.FC<ISectionHeader> = ({children}) => {

    let title = null;
    let options = null;

    if (Array.isArray(children)) {
        title = children[0];
        options = children.slice(1, children.length);
    } else {
        title = children;
    }


    return <Grid container justifyContent={'space-between'} marginBottom={2}>
        <Grid item sm={8}>
            {title}
        </Grid>
        <Grid item sm={4}>
            {options}
        </Grid>
    </Grid>
}

export default SectionHeader;