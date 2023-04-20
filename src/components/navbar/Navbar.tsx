import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuUser from './user/MenuUser';
import Logo from '../common/brand/Logo';

const defaultBackgroundColor = 'transparent';
const altBackgroundColor = 'rgba(0, 0, 0, .7)';

const defaultFontColor = 'white';

const defaultPadding = '.5rem 1rem';

type State = {
    backgroundColor?: string,
    fontColor?: string,
    padding?: string
}

const Navbar: React.FC<{ expandable: boolean }> = ({ expandable }) => {

    const defaultState: State = {
        backgroundColor: defaultBackgroundColor,
        fontColor: defaultFontColor,
        padding: defaultPadding
    }

    const [state, setState] = useState<State>(defaultState);

    useEffect(() => {
        const toggle = () => {
            let scrollPosition = window.pageYOffset;

            scrollPosition < 300 ?
                transparentMode() : whiteMode();
        }

        window.addEventListener("scroll", toggle);

        return () => {
            window.removeEventListener("scroll", toggle);
        };
    });

    const transparentMode = () => {
        setState({
            ...state,
            backgroundColor: defaultBackgroundColor,
        });
    }

    const whiteMode = () => {
        setState({
            ...state,
            backgroundColor: altBackgroundColor,
        });
    }

    return (
        <AppBar position="fixed" style={{backgroundColor: state.backgroundColor, color: state.fontColor, padding: state.padding, boxShadow: 'none'}}>
            <Container maxWidth="xl">
                <Toolbar sx={{ 'justify-content': 'space-between'}}>
                    <Logo />

                    {/* <MenuPages /> */}

                    <MenuUser />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;