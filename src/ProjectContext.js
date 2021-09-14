import React, { useContext, useState} from 'react';
// primary project context api 
const ProjectContext = React.createContext();// primary project context 

export const ProjectProvider = ({children}) =>{
    // loading functions 
    const [loading, setIsLoading] = useState(true);

    const closeLoading = ()=>{
        setIsLoading(false);
    }
    const resetLoading = () =>{
        setIsLoading(true);
    }

    // about section hooks 

    return (
        <ProjectContext.Provider value={{
            loading,
            closeLoading,
            resetLoading
       }}>
            {children}
        </ProjectContext.Provider>
    )
}

// primary global project context state
export const useProjectGlobalContext = () =>{
    return useContext(ProjectContext);
}