import React, {useContext, useEffect} from 'react';
import {UserContext, UserType} from "./context/UserContextProvider";
import {useCookies} from "react-cookie";
import isEqual from "react-fast-compare";
import {useQuery} from "@apollo/client";
import {HELLO_USER} from "./server/Queries/user.queries";

const Init: React.FC<{children: React.ReactNode}> = ({children}) => {
    const userContext = useContext(UserContext);
    const [cookie] = useCookies(["jwt-auth-token"]);
    const skip = userContext.user !== null || isEqual(cookie, {});
    const {data, loading, error} = useQuery(HELLO_USER, {skip: skip});

    useEffect(() => {
        if (data && data.helloUser) {
            const user: UserType = {
                id: data.helloUser.id,
                username: data.helloUser.username,
                email: data.helloUser.email,
            };

            userContext.setUser(user);
        }
    }, [data]);

    if (error) {
        console.error(error);
    }

    if (loading) {
        return <>Loading....</>
    }

    return (
        <>
            {children}
        </>
    )
}

export default Init;
