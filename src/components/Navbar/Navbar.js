import React, { Component } from 'react';
import './Navbar.styles.css';


class NavBar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState( {clicked: !this.state.clicked})
    }

    
    render(){
        return (
            <div className='navbar-container'>
               <div className='logo'>
                    Derek Scharite
               </div> 
               <div className='menu-icon' onClick={this.handleClick}>
               <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className= {this.state.clicked ? 'nav-list active' : 'nav-list'}>
                   <li className='nav-list-item'>About me</li>
                   <li className='nav-list-item'>Resume</li>
                   <li className='nav-list-item'>Projects</li>
                   <li className='nav-list-item'>Contact</li>
               </ul>
            </div>
        )
    }
}

export default NavBar;