import React, { Component } from 'react';
import './AboutMe.styles.css';

class AboutMe extends Component {
    render(){
        return (
            <div className="about-me-container">
                <div className="profile-image">
                    <img src="DerekProfile.png" alt="Profile" width="100px" height="100px" />
                </div>
                <p className="about-me">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nibh libero, 
                a porta turpis vestibulum luctus. Nullam tristique pharetra eros, ac efficitur dolor semper quis. 
                Etiam maximus mauris id malesuada vehicula. Curabitur tincidunt tempus facilisis.
                 Nunc vestibulum nibh neque. Donec vel ex interdum arcu varius molestie vitae id tortor. 
                 Sed faucibus molestie leo sit amet vulputate. Sed vitae magna sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </p>

            </div>
        )
    }
}

export default AboutMe;