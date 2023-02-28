import './AboutLayout.css';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import { FC } from "react";
import AppNavbar from '../../navbar/Navbar';

const AboutLayout: FC<{ children: React.ReactNode }> = (children) => {
    return (
        <div className='about-layout'>
            <Navbar fixed={false} minimize={false}/>

            <div className={'cover'}>
            </div>

            {children.children}

            <Footer />
        </div>
    );
}

export default AboutLayout;