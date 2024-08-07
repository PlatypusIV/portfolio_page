import React, {useState} from 'react';
import { getImageUrl } from '../../utils';

import style from './Navbar.module.scss';

export default function Navbar():JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={style.navbar}>
        <a href="/portfolio_page/" className={style.title}>Portfolio</a>
          <div className={style.menu}>
            <img src={isMenuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button" className={style.menuBtn} onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
            <ul className={`${style.menuItems} ${isMenuOpen && style.menuOpen}`} onClick={() => setIsMenuOpen(false)}>
              {/* <li>
                <a href="#about">Who am I?</a>
              </li > */}
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li >
                <a href="#projects">Projects</a>
              </li>
              <li >
                <a href="#contact">Contact</a>
              </li>
            </ul>
        </div>
    </nav>
  )
}
