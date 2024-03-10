import React from 'react'
import { getImageUrl } from '../../utils';

interface Props {
  imageSource: string;
  title: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
  id: number;
}

export default function ProjectCard(props: Props):JSX.Element {
  const {imageSource, title, description, skills, demo, source, id} = props;

  return (
    <div key={id}>
              <img src={getImageUrl(imageSource)} alt={`Image of ${title}`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>{skills.map((skill, id)=>
              <li key={id}>{skill}</li>
            )}
            </ul>
            <div>
              <a href={demo}>Demo</a>
              <a href={source}>Source</a>
            </div>
            </div>
  )
}
