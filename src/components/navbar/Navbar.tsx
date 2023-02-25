import {useEffect, useState} from 'react';
import './Navbar.css';
import Grid from "@mui/material/Grid"
import Logo from '../common/Brand/Logo';
import {FC} from 'react';
import SessionOptions from '../user/UserNavbar';

const Navbar: FC = () => {

    const [backgroundColor, setBackgroundColor] = useState("transparent");
    const [fontColor, setFontColor] = useState("white");
    const [padding, setPadding] = useState('1rem 2rem');

    const style = {
        backgroundColor: backgroundColor,
        fontColor: fontColor,
        padding: padding,
    }

    const transparentMode = () => {
        setBackgroundColor('transparent');
        setFontColor('white');
        setPadding('1rem 2rem');
    };

    const whiteMode = () => {
        setBackgroundColor('rgba(0, 0, 0, .7)');
        setFontColor('black');
        setPadding('0.1rem 2rem');
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
            let scrollPosition = window.pageYOffset;

            if (scrollPosition < 100) {
                transparentMode();
            } else {
                whiteMode();
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
        <div className="search-bar-container" style={style}>
            <div className='navbar'>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Logo></Logo>
                    </Grid>
                    <Grid item xs={2} alignContent={'right'} rowGap={4}>
                        <SessionOptions></SessionOptions>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Navbar;