import React from 'react';

import style from './Navbar.module.scss';

export default function Navbar():JSX.Element {
  return (
    <nav className={style.navbar}>
        <a href="/" className={style.title} >Back to the top</a>
          <div className={style.menu}>
            <ul className={style.menuItems}>
              <li className={style.menuItem}>
                <a href="#about" className={style.navAnchor}>About</a>
              </li >
              <li className={style.menuItem}>
                <a href="#experience" className={style.navAnchor}>Experience</a>
              </li>
              <li className={style.menuItem}>
                <a href="#projects" className={style.navAnchor}>Projects</a>
              </li>
              <li className={style.menuItem}>
                <a href="#contact" className={style.navAnchor}>Contact</a>
              </li>
            </ul>
        </div>
    </nav>
  )
}
