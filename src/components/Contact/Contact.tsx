import React from 'react';
import style from './Contact.module.scss';
import { getImageUrl } from '../../utils';

export default function Contact():JSX.Element {
  return (
    <footer id="contact" className={style.container}>
        <div className={style.text}>
            <h2>Contact</h2>
            <p>Feel free to get in touch!</p>
        </div>
        <ul className={style.links}>
            <li>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:herbertkenumera@gmail.com">herbertkenumera@gmail.com</a>
            </li>
            <li>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/herbert-ken-ümera">linkedin.com/herbert-ken-ümera</a>
            </li>
            <li>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/PlatypusIV">github.com/PlatypusIV</a>
            </li>
        </ul>
    </footer>
  )
}
