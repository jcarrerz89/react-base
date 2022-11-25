import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import {FC} from "react";

const ContentLayout: FC<{children: React.ReactNode}> = (children) => {
    return (
        <>
            <Navbar />
            <div className='cover'>
            </div>

            {children}

            <Footer />
        </>
    )
}

export default ContentLayout;