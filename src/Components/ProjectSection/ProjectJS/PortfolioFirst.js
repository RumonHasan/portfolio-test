import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../PreloadJS/PreloaderPortfolioFirst';
import { useProjectGlobalContext } from '../../../ProjectContext';

const Portfolio = () =>{
    const { loading, closeLoading } = useProjectGlobalContext();
    
    React.useEffect(() => {
        const timeLoader = setInterval(()=>{
            closeLoading()
        }, 2500)
        return () => {
            clearInterval(timeLoader)
        }
    }, [loading])

    if(loading){
        return(
            <Loader/>
        )
    }
    

    return(
        <React.Fragment>

        </React.Fragment>
    )
}

export default Portfolio;