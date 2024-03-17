import React from 'react'
import { getImageUrl } from '../../utils';
import style from './Hero.module.scss';


export default function Hero():JSX.Element {
  return (<section className={style.container}>
    <div className={style.content}>
        <h1>Hello! I am Herbert!</h1>
        <p>I am a full stack software engineer/developer, with 4 years of experience.</p>
        <a href="mailto:hkymera2@gmail.com">Contact email</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")}
      alt="Image of me" 
      className={style.heroImage}
      />
    <div className={style.topBlur}></div>
    <div className={style.bottomBlur}></div>
  </section>)
}
