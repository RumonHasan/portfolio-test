import React from 'react';
import { FaTimes } from 'react-icons/fa';
import data from './data';
import { useGlobalNavContext } from './NavbarContext'; // main navcontext 

const Sidebar = () =>{
    const { isSidebar, closeSidebar } = useGlobalNavContext();
    return (
        <div className={`${isSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper' }`}>
            <aside className="sidebar">
                <button className="sidebarClose-btn" onClick={closeSidebar}><FaTimes/></button>
            </aside>
        </div>
    )

}

export default Sidebar;