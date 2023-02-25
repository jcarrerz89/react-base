import Typography from '@mui/material/Typography';
import { ReactElement, ReactNode } from 'react';

const AppTitle: React.FC<{text: string}> = (children) => {
    return <Typography
        variant="h1"
        noWrap
        component="h1"
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'cursive',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}>
            {children.text}
    </Typography>
}

export default AppTitle;