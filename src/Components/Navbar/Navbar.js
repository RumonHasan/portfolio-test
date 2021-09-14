import React from 'react';
import { useGlobalNavContext } from './NavbarContext.js';
import { FaBars } from 'react-icons/fa'

const Navbar = () =>{
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalNavContext();
    const displaySubmenu = (e) =>{
        const page = e.target.textContent;
        const temp = e.target.getBoundingClientRect(); // gets all the position coordinated of the element 
        const center = (temp.left + temp.right)/2;
        const bottom = temp.bottom + 7; // getting the bottom position of the menu element 
        openSubmenu(page, {center, bottom}); // passes on the bottom and center coordinates to the submenu function 
    }
    // handling closing submenu 
    const handleSubmenuClose = (e)=>{
        if(!e.target.classList.contains('link-text')){
            closeSubmenu();
        }
    }
    return (
        <nav className="nav" onMouseOver={handleSubmenuClose}>
            <div className="nav-center">
                <div className="nav-header">
                    <p className="temp-logo">LogoPlace</p>
                    <button className = "btn toggle-btn" onClick={openSidebar}>
                        <FaBars/>
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            <p className="link-text">About</p>
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            <p className="link-text">Experience</p>
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            <p className="link-text">Skills</p>
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            <p className="link-text">Projects</p>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;