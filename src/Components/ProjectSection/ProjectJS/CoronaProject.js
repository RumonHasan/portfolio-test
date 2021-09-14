import React from 'react';
import { useProjectGlobalContext } from '../../../ProjectContext';
import { Link } from 'react-router-dom';
import Loader from '../PreloadJS/PreloaderCorona';

const CoronaProject = () =>{
    // loader state and function
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
            <Loader/>
        )
    }

    return(
        <React.Fragment>
         <section className="corona-project-details">
            <div className="corona-project-container">
                <Link to='/' className="project-btn">Go Back</Link>
            </div>
        </section>
        </React.Fragment>
    )

}
export default CoronaProject;