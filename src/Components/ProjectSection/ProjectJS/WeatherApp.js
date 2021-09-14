import React from 'react';
import { useProjectGlobalContext } from '../../../ProjectContext';
import Loader from '../PreloadJS/PreloaderWeather';

const WeatherApp = () =>{
    const {loading, closeLoading } = useProjectGlobalContext();
    React.useEffect(()=>{
        const timeLoader = setInterval(()=>{
            closeLoading()
        }, 2500)
        return(()=>{
            clearInterval(timeLoader)
        })
    },[loading])

    // loading return states
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

export default WeatherApp;