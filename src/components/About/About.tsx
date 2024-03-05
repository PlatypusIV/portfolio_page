import React from 'react';
import { getImageUrl } from '../../utils';
import experience from "../../experience.json";
import ExperienceBox from '../ExperienceBox/ExperienceBox';
import style from './About.module.scss';


export default function About():JSX.Element {
  return (
    <section className={style.container} id="about">
        <h2 className={style.title}>About</h2>
        <div className={style.content}>
            <img src={getImageUrl('about/aboutImage.png')} alt="Me researching some esoteric technologies" className={style.aboutImage} />
            <ul>
              <ExperienceBox title={experience.frontend.title} content={experience.frontend.content} imageUri="about/cursorIcon.png"/>
              <ExperienceBox title={experience.fullstack.title} content={experience.fullstack.content} imageUri="about/uiIcon.png"/>
              <ExperienceBox title={experience.gamedev.title} content={experience.gamedev.content} imageUri="about/cursorIcon.png"/>
            </ul>
        </div>
    </section>
  )
}
