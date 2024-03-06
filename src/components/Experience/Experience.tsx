import React from 'react';
import style from "./Experience.module.scss";
import skills from '../../data/skillset.json';
import { getImageUrl } from '../../utils';
import history from '../../data/history.json';

export default function Experience():JSX.Element {
  return (
    <section className={style.container} id="experience">
        <h2 className={style.title}>Experience</h2>
        <div className={style.content}>
            <div className={style.skills}>
                {skills.map((skill, id)=>{
                    return (<div key={id} className={style.skill}>
                        <div>
                            <img src={getImageUrl(skill.imageSource)} alt={skill.title} className={style.skillImageContainer}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>)
                })}
            </div>
            <ul className={style.history}>
                {history.map((historyElement, id)=>{
                    return(<li key={id} className={style.historyElement}><img src={historyElement.imageSource} alt={`${historyElement.organisation} Logo`} />
                    <div className={style.historyElementDetails}>
                        <h3>{`${historyElement.role}, ${historyElement.organisation}`}</h3>
                        <p>{`${historyElement.startDate} - ${historyElement.endDate}`}</p>
                        <ul>{historyElement.experiences.map((experience, id)=> {
                            return (<li key={id}>{experience}</li>);
                        })}</ul>
                    </div>
                    </li>)
                })}
            </ul>
        </div>
    </section>
  )
}
