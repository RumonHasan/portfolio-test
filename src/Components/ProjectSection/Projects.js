import React, { useContext, useRef} from 'react';
import { useProjectGlobalContext } from '../../ProjectContext';
// project cover images 
import CoronaPic from './ProjectImages/coronaPic.png';
import WomenPic from './ProjectImages/women-birdcage.png';
import PortfolioFirst from './ProjectImages/portfolio-first.png';
import WeatherApp from './ProjectImages/weather-app.png';
import course from './ProjectImages/schedule.png';
import comingSoon from './ProjectImages/coming.png';

import AOS from 'aos';
import { Link } from 'react-router-dom';


const Projects = ()=>{
    // Acessing Aos animations after every rerender
    React.useEffect(()=>{
        AOS.init({
            duration:2000
        });
        AOS.refresh();
    }, []);

    // project loading reset
    const { resetLoading } = useProjectGlobalContext();
    const LoadingOn = () =>{
        resetLoading();
    }

    return(
    <section className='projects'>
        <div className="project-grid">
            <article className="project-container portfolio-first" data-aos='fade-up-left'>
            <img src={PortfolioFirst} alt={PortfolioFirst} className='project-photo portfolio-first'></img>
            <p className="project-text portfolio-first">Portfolio Version 1.0</p>
            <Link to='/PortfolioFirst' className='project-btn portfolio-first' onClick={()=>LoadingOn()}>Details!</Link>
            </article>

            <article className='project-container weather-project' data-aos='fade-up-right'>
                <img src={WeatherApp} alt={WeatherApp} className='project-photo weather'></img>
                <p className="project-text weather">Weather App</p>
                <Link to='/WeatherApp' className="project-btn weather" onClick={()=>LoadingOn()}>Details!</Link>
            </article>


            <article className="project-container corona-project" data-aos='fade-up-right'>
                <img src={CoronaPic} alt={CoronaPic} className="project-photo corona"></img>
                <p className="project-text corona">Corona Tracker</p>
                <Link to='/CoronaProject' className='project-btn corona' onClick={()=>LoadingOn()}>Details!</Link>
            </article>

            <article className='project-container women-project' data-aos='fade-up-right'>
                <img src={WomenPic} alt={WomenPic} className='project-photo women'></img>
                <p className="project-text women">Women-Rights</p>
                <Link to='/WomenRights' className="project-btn women" onClick={()=>LoadingOn()}>Details!</Link>
            </article>


            <article className='project-container course-project' data-aos='fade-up-right'>
                <img src={course} alt={course} className='project-photo course'></img>
                <p className="project-text course">Course Schedule</p>
                <Link to='/WomenRights' className="project-btn course" onClick={()=>LoadingOn()}>Details!</Link>
            </article>

            <article className='project-container' data-aos='fade-up-right'>
                <img src={comingSoon} alt='' className='project-photo coming'></img>
                <Link to='' className="project-btn" onClick={()=>LoadingOn()}>Details!</Link>
            </article>
            </div>
    </section>

                    
    );
}
export default Projects;