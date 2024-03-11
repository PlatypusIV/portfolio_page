import React from 'react';
import style from "./Projects.module.scss";
import projects from "../../data/projects.json";
import ProjectCard from '../ProjectCard/ProjectCard';


export default function Projects():JSX.Element {
  return (
    <section id="projects" className={style.container}>
      <h2 className={style.title}>
        Projects
      </h2>
      <div className={style.projects}>
          {projects.map((project, id)=>{
            return <ProjectCard project={project} key={id}/>
          })}
        </div>
    </section>
  )
}
