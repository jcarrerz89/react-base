import { Alert, Button } from "@mui/material";
import React, { ReactPropTypes, useContext, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { UserContext } from "../../../context/UserContextProvider";
import Box from "@mui/material/Box";

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
                return <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <label>{data?.user?.username}</label>
                    <Button variant="outlined" className="pull-right" onClick={() => {
                        logout();
                        }}>Logout
                    </Button>
                </Box>
            }} 
        </UserContext.Consumer>
    )
}

export default LoggedUser;