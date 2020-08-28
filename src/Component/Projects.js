import React from 'react';
import './projects.css';


class Project extends React.Component {
    render() {
        return (
            <div className="projects">
                <div className="text">
                    <h5>Projects</h5>
                    <ul>
                        <h3>TIC-TAC-TOE</h3>
                        <h3>TO-DO-FORM</h3>
                        <h3>COUNTER APP</h3>
                        <h3>CRM</h3>
                        <h3>LOGIN FORM</h3>
                        <h3>PORTFOLIO</h3>

                    </ul>
                </div>
            </div>
        );
    };
};

export default Project;