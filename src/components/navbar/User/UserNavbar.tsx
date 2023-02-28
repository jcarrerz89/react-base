import { HELLO_USER } from "../../../server/Queries/user.queries";
import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import LoggedUser from "./logged_user/LoggedUser";
import UnloggedUser from "./unlogged_user/UnloggedUser";
import { UserContext, UserType } from "../../../context/UserContextProvider";
import { useCookies } from "react-cookie";

const isEqual = require("react-fast-compare");

// TODO: Optimize.
// This component is rendered more than the strictly necessary due to the effect 
// done by the higher component, which render based in the scroll change event. 
const UserNavbar: React.FC = () => {

    const userContext = useContext(UserContext);
    const [cookie] = useCookies(['jwt-auth-token']);

    const skip = userContext.user !== null || isEqual(cookie, {});
    const { data, loading, error } = useQuery(HELLO_USER, { skip: skip });

    useEffect(() => {
        if (data && data.helloUser) {
            const user: UserType = {
                id: data.helloUser.id,
                username: data.helloUser.username,
                email: data.helloUser.email
            }
    
            userContext.setUser(user);
        }
    }, [data]);

    if (loading) {
        return <label>Loading...</label>
    }
    
    if (userContext.user) {
        return <LoggedUser />;
    }

    return <UnloggedUser />;
}

export default UserNavbar;