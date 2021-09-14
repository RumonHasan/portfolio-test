import React from 'react';
import ReactDOM from 'react-dom';
import NavbarApp from './Components/Navbar/NavbarApp.js';
import { useGlobalNavContext } from './Components/Navbar/NavbarContext.js';
import ProjectApp from './Components/ProjectSection/ProjectApp';
import { useProjectGlobalContext } from './ProjectContext';
import MainLoader from './Components/ProjectSection/PreloadJS/PreloaderMain';
import AOS from 'aos';
import ExpApp from './Components/Experience/ExpApp.js';

const PortfolioApp = () =>{
    // Main page loading animation 
    const { loading, closeLoading } = useProjectGlobalContext();

    React.useEffect(()=>{ // main loading useEffect
        const mainLoader = setInterval(()=>{
            closeLoading();
        },2500);
        return(()=>{
            clearInterval(mainLoader);
        })
    },[loading])

    if(loading){
        return(
            <MainLoader/>
        )
    }

    return(
    <main>
        <NavbarApp/>
        <ProjectApp/>
        <ExpApp/> 
    </main>
    );
};

export default PortfolioApp;