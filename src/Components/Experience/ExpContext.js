import React, { useContext, useState, useEffect} from 'react';

const ExpContext = React.createContext();// main react context 

export const ExpProvider = ({children})=>{
    const [isExpSubmenu, setIsExpSubmenu] = useState(false);

    // functions
    const openExpSubmenu = ()=>{
        setIsExpSubmenu(true);
    }
    const closeExpSubmenu = ()=>{
        setIsExpSubmenu(false);
    }

    return(
        <ExpContext.Provider value={{
            openExpSubmenu,
            closeExpSubmenu,
            isExpSubmenu
        }}>
            {children}
        </ExpContext.Provider>
    )
}

export const useExpContext = () =>{
    return (
        useContext(ExpContext)
    );
}