import React from 'react';
import style from "./Projects.module.scss";
import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';


export default function Projects():JSX.Element {
  return (
    <section id="projects">
      <h2>
        <div>
          {projects.map((project, id)=>{
            return 
          })}
        </div>
      </h2>
    </section>
  )
}
