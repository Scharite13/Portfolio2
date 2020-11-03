import React, { Component } from 'react';
import './Navbar.styles.css';
import Pdf from "../../Resume/Resume.pdf";


class NavBar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState( {clicked: !this.state.clicked})
    }

    
    render(){
        return (
        <div className="parent">
            <div className='navbar-container'>
               <div className='logo'>
                    <a href="#hero">Derek Scharite</a>
               </div> 
               <div className='menu-icon' onClick={this.handleClick}>
               <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className= {this.state.clicked ? 'nav-list active' : 'nav-list'}>
                   <li className='nav-list-item'><a href="#hero">Home</a></li>
                   <li className='nav-list-item'><a href="#about-me">About me</a></li>
                   <li className='nav-list-item'><a href={Pdf} target="_black">Resume</a></li>
                   <li className='nav-list-item'><a href="#projects">Projects</a></li>
                   <li className='nav-list-item'><a href="#contact">Contact</a></li>
               </ul>
            </div>
        </div>
        )
    }
}

export default NavBar;