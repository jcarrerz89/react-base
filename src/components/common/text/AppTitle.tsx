import Typography from '@mui/material/Typography';
import { ReactElement, ReactNode } from 'react';

const AppTitle: React.FC<{children: string}> = ({children}) => {
    return <Typography
        variant="h1"
        noWrap
        component="h1"
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'cursive',
            fontWeight: 700,
            fontSize: 36,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}>
            {children}
    </Typography>
}

export default AppTitle;