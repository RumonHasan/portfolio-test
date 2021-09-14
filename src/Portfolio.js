import React from 'react';
import  PortfolioHome  from './PortfolioHome';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//project access 
import  CoronaProject  from './Components/ProjectSection/ProjectJS/CoronaProject';
import WomenRights from './Components/ProjectSection/ProjectJS/WomenRights';
import PorfolioFirst from './Components/ProjectSection/ProjectJS/PortfolioFirst';
import WeatherApp from './Components/ProjectSection/ProjectJS/WeatherApp';
// All stylesheet links 
import index from './index.css';
import Corona from './Components/ProjectSection/ProjectStyles/Corona.css'
import Porfolio from './Components/ProjectSection/ProjectStyles/Portfolio.css';
import projects from './Components/ProjectSection/projects.css';
import NavStyle from './Components/Navbar/NavStyle.css';
import weather from './Components/ProjectSection/ProjectStyles/weather.css';
import women from './Components/ProjectSection/ProjectStyles/women.css';
//custom cursor file
import Cursor from './Cursor';
// project context js provider 
import { ProjectProvider } from './ProjectContext';

// main Porfolio Routed Function 
const Portfolio = ()=>{
    return(  
    <ProjectProvider> {/* primary project routing and context */}
        <BrowserRouter>
            <Cursor/>
                <Switch>
                    <Route exact path='/'><PortfolioHome/></Route>
                    <Route exact path='/CoronaProject'><CoronaProject/></Route>
                    <Route exact path='/WomenRights'><WomenRights/></Route>
                    <Route exact path='/PortfolioFirst'><PorfolioFirst/></Route>
                    <Route exact path='/WeatherApp'><WeatherApp/></Route>
                    <Route path='*'><PortfolioHome/></Route>
                </Switch>
        </BrowserRouter>
    </ProjectProvider>
    );
}

export default Portfolio;