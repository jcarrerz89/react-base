import React, {useContext} from "react";
import {UserContext} from "@context/UserContextProvider";
import {Navigate, Routes, Route} from "react-router-dom";
import Home from "@pages/home";

const ApplicationRoutes = () => {

    const userContext = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default ApplicationRoutes;