import { Toolbar, Typography } from "@mui/material";

const Logo = () => {
    return <Toolbar>
        <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'revert-layer',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
            }}> Blue Bells
        </Typography>

        <Typography
            variant="h3"
            noWrap
            component="a"
            href=""
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'revert-layer',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
            }}>
            Blue Bells
        </Typography>
    </Toolbar>
}

export default Logo;