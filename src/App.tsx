import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ApplicationRoutes from './ApplicationRoutes';
import {ApolloProvider} from "@apollo/client";
import ApolloClient from './server/ApolloClient';
import {UserContextProvider} from './context/UserContextProvider';
import './App.css';
import {LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
    return (
        <ApolloProvider client={ApolloClient}>

            <React.StrictMode>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <UserContextProvider>
                        <BrowserRouter>
                            <ApplicationRoutes/>
                        </BrowserRouter>
                    </UserContextProvider>
                </LocalizationProvider>
            </React.StrictMode>
        </ApolloProvider>
    );
}

export default App;
