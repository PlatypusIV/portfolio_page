import React from 'react';
// import { getImageUrl } from '../../utils';
import experience from "../../data/experience.json";
import ExperienceBox from '../ExperienceBox/ExperienceBox';
import style from './About.module.scss';


export default function About():JSX.Element {
  return (
    <section className={style.container} id="about">
        <h2 className={style.title}>About</h2>
        <div className={style.content}>
            {/* <img src={getImageUrl('about/aboutImage.png')} alt="Me researching some esoteric technologies" className={style.aboutImage} /> */ /*need to find an image with me typing away on a computer */} 
            <ul>
              <ExperienceBox title={experience.frontend.title} content={experience.frontend.content} imageUri="about/navigationIcon.png"/>
              <ExperienceBox title={experience.fullstack.title} content={experience.fullstack.content} imageUri="about/serverIcon.png"/>
              <ExperienceBox title={experience.gamedev.title} content={experience.gamedev.content} imageUri="about/gameControllerIcon.png"/>
            </ul>
        </div>
    </section>
  )
}
