import React, {useContext} from "react";
import {UserContext} from "@context/UserContextProvider";
import {Navigate, Routes, Route} from "react-router-dom";
import Home from "@pages/home";
import About from "@pages/about";
import Contact from "@pages/contact";
import UserPage from "@pages/user";

const ApplicationRoutes = () => {

    const userContext = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/me" element={userContext.user ? <UserPage/> : <Navigate to="/"/>}/>
        </Routes>
    )
}

export default ApplicationRoutes;