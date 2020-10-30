import React, { Component } from 'react';
import './Contact.styles.css';

class Contact extends Component{
    render(){
        return(
            <div>
                <h2 className="contact">Contact</h2>
                <div className="contact-list">
                    <div><a href="mailto:DerekScharite@gmail.com"><i className="far fa-envelope contact-link"></i></a></div>
                    <div><a href="www.linkedin.com/in/derek-scharite-b664a0199"><i className="fab fa-linkedin contact-link"></i></a></div>
                    <div><a href="https://twitter.com/DScharite"><i className="fab fa-twitter contact-link"></i></a></div>
                    <div><a href="https://github.com/Scharite13"><i className="fab fa-github contact-link"></i></a></div>
                </div>
            </div>
        )
    }
}

export default Contact;