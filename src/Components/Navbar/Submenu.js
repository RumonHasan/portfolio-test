import React,{ useState, useEffect, useRef } from 'react';
import { useGlobalNavContext } from './NavbarContext';

const Submenu = () =>{
    const {isSubmenu, location, page:{page, description}} = useGlobalNavContext();
    const submenuContainer = useRef(null);
    const [readMore, setReadmore] = useState(false);
    useEffect(()=>{
        const submenu = submenuContainer.current;
        const {center, bottom} = location; // height and location of the menu items 
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
    }, [page, location, description]) // dependency list limited to the locationm page and description of the params 
    return(
        <aside className={`${isSubmenu ? 'submenu show': 'submenu'}`} ref={submenuContainer}>
            <section className="submenu-section">
                <h4>{page}</h4>
                {description.map((desc, index) =>{
                    const { details, image } = desc;
                    return (
                        <article className="submenu-article" key={index}>
                            <div className="submenu-first-division">
                                {page !== 'About' ? <p>{details}</p> : // read more button only applies for about page 
                                    <p>{readMore ? details : `${details.substring(0,200)}...`}
                                <button onClick={()=>setReadmore(!readMore)} className="readmore-btn">
                                    {readMore ? 'show less' : 'read more'}
                                </button></p>  
                                }                          
                            </div>
                            <div className="submenu-second-division">
                                <img src={image} alt={image} className="photo"></img>
                            </div>
                        </article>
                    )        
                })}
                
            </section>
        </aside>
    )
}

export default Submenu;
