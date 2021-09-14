import React from 'react';
import ExpStyle from './Exp.css';
import Exp from './Exp';
import { ExpProvider } from './ExpContext'; // primary context provider 

const ExpApp = () =>{
    return(
        <ExpProvider>
            <Exp/>
        </ExpProvider>
    )
}

export default ExpApp;