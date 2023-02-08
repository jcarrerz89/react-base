import {useEffect, useState} from 'react';
import './Navbar.css';
import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';
import SearchBar from '../searchBar/SearchBar';
import Logo from '../common/Brand/Logo';
import SignUp from '../user/SignUp';
import SignIn from '../user/SignIn';
import {FC} from 'react';

const Navbar: FC = () => {

    const [backgroundColor, setBackgroundColor] = useState("transparent");
    const [fontColor, setFontColor] = useState("white");
    const [padding, setPadding] = useState('1rem 2rem');

    const transparentMode = () => {
        setBackgroundColor('transparent');
        setFontColor('white');
        // onCollapse(false);
    };

    const whiteMode = () => {
        setBackgroundColor('white');
        setFontColor('black');
        // onCollapse(true);
    }

    const darkMode = () => {

    }
    
    const onCollapse = (collapse: boolean) => {
        
        if (collapse) {
            setPadding('1rem 1rem');
        } else {
            setPadding('1rem 2rem');
        }
    }


    useEffect(() => {
        const toggle = () => {
            let scrollPosition = window.pageYOffset
            if (scrollPosition < 100) {
                transparentMode()
            } else {
                whiteMode()
            }
        }

        function watchScroll() {
            window.addEventListener("scroll", toggle);
        }

        watchScroll();
        return () => {
            window.removeEventListener("scroll", toggle);
        };
    });

    return (
        <div className="search-bar-container">
            <div className='navbar'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Logo></Logo>
                    </Grid>
                    <Grid item xs={2} alignItems={"right"}>
                        <SignIn></SignIn>
                    </Grid>
                    <Grid item xs={2} alignContent={'right'} rowGap={4}>
                        <SignUp></SignUp>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Navbar