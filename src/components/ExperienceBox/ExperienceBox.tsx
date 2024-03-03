import React from 'react'
import { getImageUrl } from '../../utils';

interface Props {
    title: string;
    content: string;
    imageUri: string;
    imageAlt?: string;
}

export default function ExperienceBox(props: Props):JSX.Element {
  const { title, content, imageUri, imageAlt } = props;
  return (
    <div>
        <img src={getImageUrl(imageUri)}  alt={imageAlt ? imageAlt : "CursorIcon"}/>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}
