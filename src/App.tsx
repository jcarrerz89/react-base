import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ApplicationRoutes from './ApplicationRoutes';
import {ApolloProvider} from "@apollo/client";
import ApolloClient from './server/ApolloClient';
import {UserContextProvider} from './context/UserContextProvider';
import './App.css';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import PrimaryThemeProvider from "./theme/PrimaryThemeProvider";
import LinearProgressBarContextProvider from "./context/LinearProgressBarContextProvider";

function App() {
    return (
        <ApolloProvider client={ApolloClient}>
            <LinearProgressBarContextProvider>
                <React.StrictMode>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <UserContextProvider>
                            <PrimaryThemeProvider>
                                <BrowserRouter>
                                    <ApplicationRoutes/>
                                </BrowserRouter>
                            </PrimaryThemeProvider>
                        </UserContextProvider>
                    </LocalizationProvider>
                </React.StrictMode>
            </LinearProgressBarContextProvider>
        </ApolloProvider>
    );
}

export default App;
