import {Navigate, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Inbox from "./pages/user/Inbox";
import Profile from "./pages/user/Profile";
import Property from "./pages/user/Property";
import React, {useContext} from "react";
import {UserContext} from "./context/UserContextProvider";

const ApplicationRoutes = () => {

    const userContext = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={userContext.user ? <Profile/> : <Navigate to="/"/>}/>
            <Route path="/profile/inbox" element={userContext.user ? <Inbox/> : <Navigate to="/"/>}/>
            <Route path="/profile/properties"
                   element={userContext.user ? <Property/> : <Navigate to="/"/>}/>
        </Routes>
    )
}

export default ApplicationRoutes;