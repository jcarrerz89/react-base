import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const UnloggedUser = () => {
    return (
        <div>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
}

export default UnloggedUser; 