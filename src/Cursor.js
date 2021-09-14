import React from 'react';

const CustomCursor = () =>{

    const mainCursor = React.useRef(null);
    React.useEffect(()=>{
        document.addEventListener('mousemove', (event)=>{
            const {clientX, clientY} = event; // event location based on X and Y Coords

            // assigning the X and the Y coords of the Pointer
            const mouseX = clientX;
            const mouseY = clientY;

            mainCursor.current.style.transform = `translate3d(${mouseX - 
            mainCursor.current.clientWidth / 2}px, ${mouseY - 
            mainCursor.current.clientHeight / 2}px, 0)`;
        })
        return () =>{};
    }, [])
    return (
        <div className='main-cursor' ref={mainCursor}>
        </div>
    )
}

export default CustomCursor;