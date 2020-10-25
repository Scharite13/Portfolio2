import React, { Component } from 'react';
import './ProjectCard.styles.css';


class ProjectCard extends Component{
    render(){
        return (
            <div className="card-container">
                <div className="project-image"></div>
                <h1 className="project-title">{this.props.title}</h1>
                <p className="project-description">{this.props.description}</p>
                <button className="project-link"></button>
            </div>
        )
    }
}

export default ProjectCard; 
