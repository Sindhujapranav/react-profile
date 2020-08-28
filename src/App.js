import React, { Component } from 'react';
//import './App.css';
//import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Mains from './Main.js';
import Navigation from './Navigation.js';
import Header from './Header.js';
//import { Link } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Mains />
      </div>


    );
  }
}

export default App;
