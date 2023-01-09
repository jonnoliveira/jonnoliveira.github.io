import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './pages/Timeline';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <main>
        <NavBar />
        <Home />
        <About />
        <Timeline />
        <Portfolio />
        <Contact/>
      </main>
    )
  }
}
