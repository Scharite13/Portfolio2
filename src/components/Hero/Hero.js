import React , { Component } from 'react';
import './Hero.styles.css';

class Hero extends Component {
    render(){
        return(
            <div id="hero" className="hero-image">
                
                    <h1 className="hero-text">Derek Scharite</h1>
                    <h2 className="hero-text">Front End Web Developer</h2>
                    <h3 className="hero-text">Problem Solver</h3>
                
            </div>
        )
    }
}

export default Hero;