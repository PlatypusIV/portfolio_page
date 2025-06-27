import React from 'react'
import { getImageUrl } from '../../utils';
import style from "./ProjectCard.module.scss";

interface Props {
    project: Project;
}

interface Project {
  imageSource: string;
  title: string;
  description: string;
  skills: string[];
  liveDemo?: string;
  github: string;
}

export default function ProjectCard(props: Props):JSX.Element {
  const {imageSource, title, description, skills, liveDemo, github} = props.project;
  return (
    <div className={style.container}>
      <img src={getImageUrl(imageSource)} alt={`Image of ${title}`} className={style.image}/>
      
      <div className={style.textContainer}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>

      <div className={style.skillsContainer}>
        <ul className={style.skills}>{skills.map((skill, id)=>
          <li key={id}>{skill}</li>
        )}
        </ul>
      </div>
      <div className={style.links}>
        {liveDemo && <a href={liveDemo}>Live demo</a>}
        {github && <a href={github}>Github</a>}
      </div>
    </div>
  )
}
