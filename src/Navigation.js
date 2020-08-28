// eslint-disable-next-line
import React from 'react';
import './App.css';
import './Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {


        return (
            <nav>
                <h2 className="logo"> My Portfolio </h2>
                <ul>
                    <li><Link to="/AboutMe">About</Link></li>
                    <li> <Link to="/Skills">Skills</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Projects">Project</Link></li>

                </ul>
            </nav>
        )
    }
}

export default Navigation;
