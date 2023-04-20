import React, {ReactNode} from 'react';
import {ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';
// @ts-ignore
import Monserrat from '../fonts/montserrat/Montserrat-VariableFont_wght.ttf';
import {Colors} from "./Colors";

const PrimaryThemeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const createLightTheme = () => createTheme({
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                    @font-face {
                        font-family: 'Monserrat';
                        font-style: normal;
                        font-display: swap;
                        font-weight: 400;
                        src: local('Monserrat'), local('Monserrat-Regular'), url(${Monserrat}) format('ttf');
                        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                    }
                `,
            },
            MuiDialog: {
                defaultProps: {
                    PaperProps: {
                        style: {
                            backgroundColor: Colors.BACKGROUND_CLEAR
                        }
                    },
                }
            },
            MuiDialogActions: {
                defaultProps: {
                    style: {
                        padding: '1.5rem'
                    }
                }
            },
            MuiMenu: {
                defaultProps: {
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    },
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    elevation: 1,
                    PaperProps: {
                        style: {
                            width: '15ch',
                            backgroundColor: Colors.BACKGROUND_CLEAR
                        }
                    },
                }
            },
            MuiButton: {
                defaultProps: {
                    style: {
                        paddingLeft: '1.2rem',
                        paddingRight: '1.2rem',
                        paddingTop: '.3rem',
                        paddingBottom: '.3rem',
                    },
                }
            },
            MuiAvatar: {
                defaultProps: {
                    style: {
                        margin: '0 auto'
                    }
                }
            }
        },
        shape: {
            borderRadius: 3,
        },
        palette: {
            mode: 'light',
            primary: {
                main: Colors.PRIMARY,
            },
            secondary: {
                main: Colors.QUATERNARY,
            },
            warning: {
                main: Colors.SECONDARY,
            },

            background: {
                paper: 'rgb(255, 255, 255, 0.7)',
                default: '#BBB',
            },
        },
        typography: {
            fontFamily: 'Monserrat, sans-serif',
            fontSize: 12,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
                fontSize: '2.5rem',
                fontWeight: 700,
                lineHeight: 1.2,
                textTransform: 'capitalize',
                color: Colors.SECONDARY_TEXT
            },
            h2: {
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: 1.2,
                textTransform: 'capitalize',
                color: Colors.SECONDARY_TEXT
            },
            h3: {
                fontSize: '1rem',
                fontWeight: 600,
                lineHeight: 1.2,
                textTransform: 'capitalize',
                color: Colors.TERTIARY_TEXT,
            },
            h4: {
                fontSize: '.9rem',
                color: Colors.TERTIARY_TEXT,
                fontWeight: 400
            },
            subtitle1: {
                fontSize: '1rem',
                fontWeight: 700,
                lineHeight: 1.2,
                textTransform: 'capitalize',
                color: '#CCC',
            },
            subtitle2: {
                fontSize: '.8rem',
                fontWeight: 600,
                lineHeight: 1,
                color: Colors.TERTIARY_TEXT
            },
            body1: {
                fontWeight: 400,
                lineHeight: 1,
            },
            button: {
                backgroundColor: "transparent",
                fontWeight: 400,
                lineHeight: 1,
            },

        },
        transitions: {
            duration: {
                shortest: 150,
                shorter: 200,
                short: 250,
                // most basic recommended timing
                standard: 300,
                // this is to be used in complex animations
                complex: 375,
                // recommended when something is entering screen
                enteringScreen: 225,
                // recommended when something is leaving screen
                leavingScreen: 195,
            },
            easing: {
                // This is the most common easing curve.
                easeInOut: 'cubic-bezier(1.4, 0, 0.2, 1)',
                // Objects enter the screen at full velocity from off-screen and
                // slowly decelerate to a resting point.
                easeOut: 'cubic-bezier(1.0, 0, 0.2, 1)',
                // Objects leave the screen at full velocity. They do not decelerate when off-screen.
                easeIn: 'cubic-bezier(1.4, 0, 1, 1)',
                // The sharp curve is used by objects that may return to the screen at any time.
                sharp: 'cubic-bezier(1.4, 0, 0.6, 1)',
            },
        },
    });

    const theme = createLightTheme();

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default PrimaryThemeProvider;
