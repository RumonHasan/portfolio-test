import React from 'react';
import { useGlobalNavContext } from '../../Navbar/NavbarContext';
import { useProjectGlobalContext } from '../../../ProjectContext';
import PreloaderWomen from '../PreloadJS/PreloaderWomen';
import { Link } from 'react-router-dom';

const WomenProjectDetails = () =>{
    const { loading, closeLoading} = useProjectGlobalContext();

    React.useEffect(()=>{
        const timeLoader = setInterval(()=>{
            closeLoading();
        }, 2500)
        return(()=>{
            clearInterval(timeLoader);
        })
    },[loading])

    if(loading){
        return(
            <PreloaderWomen/>
        )
    }

    return(
        <React.Fragment>
         <section className="women-project-details">
            <Link to='/' className="project-btn">Go Back</Link>
        </section>
        </React.Fragment>
    )
}

export default WomenProjectDetails;