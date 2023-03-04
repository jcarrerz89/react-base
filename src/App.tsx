import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import ApolloClient from './server/ApolloClient';
import { UserContextProvider } from './context/UserContextProvider';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/user/Profile';
import Property from './pages/user/Property';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ApolloProvider client={ApolloClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Protected pages */}
            <Route path="/profile"  element={<Profile />} />
            <Route path="/profile/properties"  element={<Property />} />
          </Routes>
        </ApolloProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
