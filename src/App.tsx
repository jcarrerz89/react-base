import React from 'react';
import './App.css';
import {ApolloProvider} from "@apollo/client";
import ApolloClient from './server/ApolloClient';
import HomeLayout from './components/layout/HomeLayout/HomeLayout';

function App() {
  return (
      <ApolloProvider client={ApolloClient}>
          <HomeLayout>

          </HomeLayout>
      </ApolloProvider>
  );
}

export default App;
