import Typography from '@mui/material/Typography';

const AppSubTitle: React.FC<{children: string}> = ({children}) => {
    return <Typography
        variant="h3"
        noWrap
        component="h3"
        sx={{
            mr: 2,
            display: { sx: 'flex', md: 'flex' },
            fontFamily: 'revert',
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
        }}>
            {children}
    </Typography>
}

export default AppSubTitle;