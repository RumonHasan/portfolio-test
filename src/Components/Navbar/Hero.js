import React, { useState, useMemo, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import bgImage from './NavbarImages/hero2.jpg';
import { useGlobalNavContext } from './NavbarContext';
import GreetingLang from './langData';
import ContactForm from './ContactForm';

const Hero = () =>{
    const { closeSubmenu, openContactForm } = useGlobalNavContext();
    return(
        <section className="hero" onMouseOver={closeSubmenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1><RandomGreet/>,<br/> 
                    I am Rumon Hasan</h1>
                <p>Aspiring front end developer currently a Junior at Temple University,
                Japan Campus majoring in Economics and Computer Science.</p>
                <button className="btn msg-btn" onClick={openContactForm}>Say Hello!</button>
                <ContactForm/>
                </article>
            </div>
        </section>
    );
}
// react memo enables us to prevent additional rerenders caused by the global context 
export const RandomGreet = React.memo(()=>{ 
    const [index, setIndex] = React.useState(0);
    let greet = GreetingLang[index];
    let greetLength = GreetingLang.length;
    //resetting index
    useEffect(()=>{
        let lastIndex = GreetingLang.length - 1;
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, GreetingLang]);

    // randomly changing the languages every two seconds 
    useEffect(()=>{
        let langChanger = setInterval(()=>{
            setIndex(index + 1)
        }, 2000);
        return ()=>{
            clearInterval(langChanger)
        }
    },[index])

    return(
        <span className="greeting">{greet}</span>
    )
})

export default Hero;