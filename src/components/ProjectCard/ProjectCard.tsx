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
  demo: string;
  source: string;
}

export default function ProjectCard(props: Props):JSX.Element {
  const {imageSource, title, description, skills, demo, source} = props.project;
  return (
    <div className={style.container}>
      <img src={getImageUrl(imageSource)} alt={`Image of ${title}`} className={style.image}/>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.skills}>{skills.map((skill, id)=>
        <li key={id}>{skill}</li>
      )}
      </ul>
      <div className={style.links}>
        <a href={demo}>Demo</a>
        <a href={source}>Source</a>
      </div>
    </div>
  )
}
