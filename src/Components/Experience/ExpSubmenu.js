import React from 'react';
import { useExpContext } from './ExpContext';

const ExpSubmenu = ()=>{
    const { isExpSubmenu } = useExpContext();// primary useExpContext function in order to activate on hover mode 
    const expSubmenuContainer = React.useRef(null);
    return(
        <React.Fragment>
            <aside className={`${isExpSubmenu ? 'exp-submenu show': 'exp-submenu'}`} ref={expSubmenuContainer}>
                
            </aside>
        </React.Fragment>
    )
}

export default ExpSubmenu;