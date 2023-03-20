import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ApplicationRoutes from './ApplicationRoutes';
import {ApolloProvider} from "@apollo/client";
import ApolloClient from './server/ApolloClient';
import {UserContextProvider} from './context/UserContextProvider';
import './App.css';
import Init from "./Init";

function App() {
    return (
        <ApolloProvider client={ApolloClient}>
            <React.StrictMode>
                <UserContextProvider>
                    <BrowserRouter>
                        <ApplicationRoutes/>
                    </BrowserRouter>
                </UserContextProvider>
            </React.StrictMode>
        </ApolloProvider>
    );
}

export default App;
