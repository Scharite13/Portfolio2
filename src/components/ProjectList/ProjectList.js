import React, { Component } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Projects } from './ProjectArray';
import './ProjectList.styles.css';


class ProjectList extends Component  {
    render(){
        return(
            <div id="projects" className="project-container">
            {Projects.map((project,index)=>{
                return(
                <ProjectCard 
                key={index}
                image={project.image}
                title={project.title} 
                description={project.description}
                link={project.link}    
                />
            )})}
            </div>
        )
    }
}

    export default ProjectList;
         

