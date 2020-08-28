import React from 'react';

import './Header.css';



const bgimage = {
    backgroundColor: "#9f810d",
    height: '40vh',

}

class Landing extends React.Component {

    render() {
        return (
            <div>
                <header style={bgimage}>
                    <h1>SINDHUJA GANESAN</h1>
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

                    </div>
                </header>

            </div>
        );
    };
};

export default Landing