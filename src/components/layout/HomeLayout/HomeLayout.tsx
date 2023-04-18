import './HomeLayout.css';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import {FC} from "react";

const HomeLayout: FC<{children: React.ReactNode}> = (children) => {
    return (
        <div className='home-layout'>
            <Navbar expandable={true}/>
            
            <div className={'cover'}>
            </div>

            {children.children}

            <Footer />
        </div>
    );
}

export default HomeLayout;