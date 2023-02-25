// import { HELLO_USER } from "@/server/Queries/user.queries";
import { HELLO_USER } from "../../server/Queries/user.queries";
import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import LoggedUser from "./logged_user/LoggedUser";
import UnloggedUser from "./unlogged_user/UnloggedUser";
import { UserContext, UserType } from "../../context/UserContextProvider";
import { useCookies } from "react-cookie";
import Box from "@mui/material/Box";

const UserNavbar: React.FC = () => {

    const userContext = useContext(UserContext);
    const [cookie] = useCookies(['jwt-auth-token']);

    const skip = userContext.user !== null || cookie !== null;
    const { data, loading, error } = useQuery(HELLO_USER, { skip: userContext.user !== null });

    useEffect(() => {
        console.log('useEffect')
    }, [userContext]);

    if (loading) {
        return <label>Loading...</label>
    }

    if (error) {
        return <UnloggedUser />;
    }

    if (data && data.helloUser) {
        const user: UserType = {
            id: data.helloUser.id,
            username: data.helloUser.username,
            email: data.helloUser.email
        }

        userContext.setUser(user);
    }


    return <LoggedUser />;
}

export default UserNavbar;