import { Alert, Button } from "@mui/material";
import React, { ReactPropTypes, useContext, useEffect } from "react";
import { UserType, UserContext } from "src/context/UserContextProvider";
import { useCookies } from 'react-cookie';

const LoggedUser: React.FC = () => {

    const userContext = React.useContext(UserContext);
    const [cookie, setCookie, removeCookie] = useCookies(['jwt-auth-token']);

    useEffect(() => {

    }, [userContext]);

    const logout = () => {
        userContext.setUser(null);
        removeCookie('jwt-auth-token', { path: '/', domain: 'localhost' });

        return (         
            <Alert severity="success">
                This is a success alert — <strong>check it out!</strong>
            </Alert>
        )
    }

    return (
        <UserContext.Consumer>
            { data => {
                return <div>
                    <label>{data?.user?.username}</label>
                    <Button variant="outlined" className="pull-right" onClick={() => {
                        logout();
                        }}>Logout
                    </Button>
                </div>
            }} 
        </UserContext.Consumer>
    )
}

export default LoggedUser;