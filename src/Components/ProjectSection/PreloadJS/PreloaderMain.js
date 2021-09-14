import React from 'react';
import lottie from 'lottie-web';

const Preloader = ()=>{
    const loaderContainer = React.useRef(null);
    
    React.useEffect(()=>{ // preloader animation
        lottie.loadAnimation({
            container: loaderContainer.current,
            loop:true,
            autoplay: true,
            animationData: require('../Preloaders/main-preloader.json')
        })
    },[])

    return(
        <React.Fragment>
             <div className="preloader-animation-main" ref={loaderContainer}></div>
        </React.Fragment>
    )
}

export default Preloader;