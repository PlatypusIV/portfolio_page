import React from 'react';
import { getImageUrl } from '../../utils';
import style from './ExperienceBox.module.scss';

interface Props {
    title: string;
    content: string;
    imageUri: string;
    imageAlt?: string;
}

export default function ExperienceBox(props: Props):JSX.Element {
  const { title, content, imageUri, imageAlt } = props;
  return (
    <li className={style.experienceBox}>
        <img src={getImageUrl(imageUri)}  alt={imageAlt ? imageAlt :`${title}-icon`}/>
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
    </li>
  )
}
