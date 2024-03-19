import React from "react";

import style from "./Experience.module.scss";
import skills from "../../data/skillset.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export default function Experience (): JSX.Element{
  return (
    <section className={style.container} id="experience">
      <h2 className={style.title}>Skills & Experience</h2>
      <div className={style.content}>
        <div className={style.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={style.skill}>
                <img src={getImageUrl(skill.imageSource)} alt={skill.title} className={style.skillImage}/>
                <p className={style.skillTitle}>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={style.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={style.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSource)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={style.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id} className={style.historyListElement}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
     <div className={style.topBlur}></div>
    </section>
  );
};