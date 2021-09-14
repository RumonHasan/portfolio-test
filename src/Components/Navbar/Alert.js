import React, {useEffect} from 'react';

const Alert = ({type, msg, removeAlert})=>{
    useEffect(()=>{
        const alertTime = setInterval(()=>{
            removeAlert()
        }, 1700);
        return(()=>{
            clearInterval(alertTime);
        })
    },[removeAlert])
    return (
        <React.Fragment>
            <p className={`alert alert-${type}`}>{msg}</p>
        </React.Fragment>
    )
}
export default Alert;
