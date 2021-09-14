import React from 'react';
import ReactDOM from 'react-dom';
import lottie from 'lottie-web';

const Preloader = ()=>{
    const loaderContainer = React.useRef(null);
    
    React.useEffect(()=>{ // preloader animation
        lottie.loadAnimation({
            container: loaderContainer.current,
            loop:true,
            autoplay: true,
            animationData: require('../Preloaders/preload-main.json')
        })
    },[])

    return(
        <React.Fragment>
             <div className="preloader-animation" ref={loaderContainer}></div>
        </React.Fragment>
    )
}

export default Preloader;