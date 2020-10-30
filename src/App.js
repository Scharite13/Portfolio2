import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/About me/AboutMe';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <AboutMe/>
      <ProjectList/>
      <Contact/>
      
    </div>
  );
}

export default App;
