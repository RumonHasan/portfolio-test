import React, {useState} from 'react';
import { experienceLeft, experienceLeft2, experienceRight, experienceRight2 } from './ExpData';
import AOS from 'aos'; // aos animations 
import { useExpContext } from './ExpContext';

const Exp = () =>{
    // aos animations
    React.useEffect(()=>{
        AOS.init({
            duration:3000
        });
        AOS.refresh();
    },[]);

    // context
    const { openExpSubmenu } = useExpContext();

    // onMouseOver function handler 
    const handleSubContainer = (e) =>{
        const yearText = e.target.dataset.id;
        const locationTemp = e.target.getBoundingClientRect();
        const centerLoc = (locationTemp.right + locationTemp.left) / 2;
        const bottom = locationTemp.bottom + 7;
        openExpSubmenu(yearText, {centerLoc, bottom}); // passing on the coordinated and the text to the context function 
    }
    
    return(
        <>
            <section className="timeline" data-aos='fade-up-left'>
                <h1 className="exp-title">Experience</h1>
                <div className="container right">
                    {experienceLeft.map((rightContent)=>{
                        const { year, position, org, text} = rightContent;
                        return(
                            <div className='content' data-id="2017" key={year} onMouseOver={handleSubContainer} >   
                                <h1>{year}</h1>
                                <h2>{org}</h2>
                                <h3>{position}</h3>
                                <p className="description">{text}</p>
                            </div>
                        )
                    })}
                </div>
   
                <div className="container left">
                {experienceRight.map((rightContent)=>{
                        const { year, position, org, text} = rightContent;
                        return(
                            <div className='content' key={year} data-id='2018' onMouseOver={handleSubContainer}>   
                                <h1>{year}</h1>
                                <h2>{org}</h2>
                                <h3>{position}</h3>
                                <p className="description">{text}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="container right">
                    {experienceLeft2.map((rightContent)=>{
                        const { year, position, org, text} = rightContent;
                        return(
                            <div className='content' key={year} data-id="2019" onMouseOver={handleSubContainer}>   
                                <h1>{year}</h1>
                                <h2>{org}</h2>
                                <h3>{position}</h3>
                                <p className="description">{text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="container left">
                {experienceRight2.map((rightContent)=>{ 
                        const { year, position, org, text} = rightContent;
                        return(
                            <div className='content' key={year} data-id="2020" onMouseOver={handleSubContainer}>   
                                <h1>{year}</h1>
                                <h2>{org}</h2>
                                <h3>{position}</h3>
                                <p className="description">{text}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default Exp;