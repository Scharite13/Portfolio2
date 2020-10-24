import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/About me/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <AboutMe/>
      
    </div>
  );
}

export default App;
