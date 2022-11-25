import './HomeLayout.css';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import {FC} from "react";

const HomeLayout: FC<{children: React.ReactNode}> = (children) => {
    console.log(children);
    return (
        <>
            <Navbar />
            <div className={'cover'}>
            </div>

            {children.children}

            <Footer />
        </>
    )
}

export default HomeLayout;