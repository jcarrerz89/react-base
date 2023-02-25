import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import ApolloClient from './server/ApolloClient';
import { UserContextProvider } from './context/UserContextProvider';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/user/profile';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ApolloProvider client={ApolloClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Protected pages */}
            <Route path="/profile"  element={<Profile />} />
          </Routes>
        </ApolloProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
