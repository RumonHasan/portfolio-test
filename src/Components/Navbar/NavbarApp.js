import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero.js';
import Navbar from './Navbar.js';
import { NavProvider } from './NavbarContext.js';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

const NavbarApp = () =>{
    return (
        <NavProvider>
            <Navbar/>
            <Sidebar/>
            <Hero/>
            <Submenu/>
        </NavProvider>
    );
}

export default NavbarApp;