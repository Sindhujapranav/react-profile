import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header.js';
import AboutMe from './Component/AboutMe.js';
import Contact from './Component/Contact.js';
import Skills from './Component/Skills.js';
import Resume from './Component/Resume.js';
import Project from './Component/Projects.js';


const Mains = () => (
    <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/Aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Projects" component={Project} />

    </Switch>
)

export default Mains;
