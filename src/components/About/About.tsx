import React from 'react';
import { getImageUrl } from '../../utils';
import experience from "../../experience.json";
import ExperienceBox from '../ExperienceBox/ExperienceBox';
import style from './About.module.scss';


export default function About():JSX.Element {
  return (
    <section>
        <h2>About</h2>
        <div>
            <img src={getImageUrl('about/aboutImage.png')} alt="Me researching some esoteric technologies" />
            <ul>
                <li>
                <ExperienceBox title={experience.frontend.title} content={experience.frontend.content} imageUri="about/cursorIcon.png"/>
                </li>
                <li>
                <ExperienceBox title={experience.fullstack.title} content={experience.fullstack.content} imageUri="about/cursorIcon.png"/>
                </li>
                <li>
                <ExperienceBox title={experience.gamedev.title} content={experience.frontend.content} imageUri="about/cursorIcon.png"/>
                </li>
            </ul>
        </div>
    </section>
  )
}
