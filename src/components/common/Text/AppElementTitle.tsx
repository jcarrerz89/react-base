import React from 'react';
import Typography from "@mui/material/Typography";

const AppElementTitle: React.FC<{ children: string }> = ({children}) => {
    return <Typography
        variant="h3"
        noWrap
        component="h3"
        sx={{
            mr: 2,
            display: {sx: 'flex', md: 'flex'},
            fontWeight: 700,
            fontSize: 12,
            color: '#525252',
            textDecoration: 'none',
        }}>
        {children}
    </Typography>
}

export default AppElementTitle;