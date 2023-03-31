import {Navigate, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import UserInbox from "./pages/user/UserInbox";
import UserProfile from "./pages/user/UserProfile";
import UserProperty from "./pages/user/UserProperty";
import React, {useContext} from "react";
import {UserContext} from "./context/UserContextProvider";
import UserSettings from "./pages/user/UserSettings";

const ApplicationRoutes = () => {

    const userContext = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={userContext.user ? <UserProfile/> : <Navigate to="/"/>}/>
            <Route path="/profile/inbox" element={userContext.user ? <UserInbox/> : <Navigate to="/"/>}/>
            <Route path="/profile/properties"
                   element={userContext.user ? <UserProperty/> : <Navigate to="/"/>}/>
            <Route path="/profile/settings"
                   element={userContext.user ? <UserSettings/> : <Navigate to="/"/>}/>
        </Routes>
    )
}

export default ApplicationRoutes;