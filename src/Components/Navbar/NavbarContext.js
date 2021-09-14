import React, { useState, useContext, useEffect } from 'react';
import Data from './data'

const NavContext = React.createContext(); // creating NavContext 

export const NavProvider = ({children})=>{
    // states for for the opening and closing of the side bar and the submenu 
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSubmenu, setIsSubmenu] = useState(false);

    const [location,setLocation] = useState({});
    const [page, setPage] = useState({page: '', description:[]}); // usestate for getting the page and setpage from the data

    // sidebar functions 
    const openSidebar = () =>{
        setIsSidebar(true);

    }
    const closeSidebar = () =>{
        setIsSidebar(false);
    }
    // submenu functions
    const openSubmenu = (pageText, coordinates) =>{ // pagetext from the menu items
        const page = Data.find((desc) => desc.page === pageText); // finding the appropriate data section accordance to the hovered menu 
        setPage(page); // passing on the page containing the menu item details 
        setLocation(coordinates); // passign on the coordinates 
        setIsSubmenu(true);
    }
    const closeSubmenu = () =>{
        setIsSubmenu(false);
    }

    // loading states
    const [loading, setLoading] = useState(false);
    const closeLoading = ()=>{
        setLoading(false);
    }

    // contact form opening and closing 
    const [isContactForm, setContactForm] = useState(false);
    const closeContactForm = ()=>{
        setContactForm(false);
    }
    const openContactForm = ()=>{
        setContactForm(true);
    }

    return(
        <NavContext.Provider value={{isSidebar, 
            isSubmenu, 
            openSidebar, 
            closeSidebar, 
            openSubmenu, 
            closeSubmenu,
            closeLoading,
            closeContactForm,
            openContactForm,
            isContactForm,
            loading,
            location,
            page}}>
                {children}
        </NavContext.Provider>
    );
}

export const useGlobalNavContext = () =>{
    return useContext(NavContext);// returning the useGlobalNavContext as a global context 
}



