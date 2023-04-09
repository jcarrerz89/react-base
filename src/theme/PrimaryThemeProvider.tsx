import React, {ReactNode} from 'react';
import {ThemeProvider} from "@mui/material";

import {createTheme} from '@mui/material/styles';

const PrimaryThemeProvider:React.FC<{children: ReactNode}> = ({children}) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#dc004e',
            },
            background: {
                paper: '#fff',
                default: '#BBB',
            },
        },

        typography: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 16,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
                fontSize: '2.5rem',
                fontWeight: 700,
                lineHeight: 1.2,
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: 1.2,
            },
            h3: {
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: 1.2,
            },
            body1: {
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.5,
            },
        },
        transitions: {
            duration: {
                shortest: 1,
                shorter: 1,
                short: 1,
                standard: 2,
                complex: 2,
                enteringScreen: 2,
                leavingScreen: 2,
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default PrimaryThemeProvider;
