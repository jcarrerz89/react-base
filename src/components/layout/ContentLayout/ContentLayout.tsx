import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import React from "react";

const ContentLayout: React.FC<{children: React.ReactNode}> = (children) => {
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