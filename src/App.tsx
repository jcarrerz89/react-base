import React from 'react';
import './App.css';
import {ApolloProvider} from "@apollo/client";
import ApolloClient from './server/ApolloClient';
import HomeLayout from './components/layout/HomeLayout/HomeLayout';
import { UserContextProvider } from './context/UserContextProvider';

function App() {
  

  return (
      <UserContextProvider>
        <ApolloProvider client={ApolloClient}>
            <HomeLayout>

            </HomeLayout>
        </ApolloProvider>
      </UserContextProvider>
  );
}

export default App;
