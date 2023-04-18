import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import React from "react";
import {styled} from "@mui/material/styles";

const ContentLayoutContainer = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}));

const ContentLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <ContentLayoutContainer>
            <Navbar expandable={false}/>

            <div className='cover'/>

            {children}

            <Footer/>
        </ContentLayoutContainer>
    )
}

export default ContentLayout;