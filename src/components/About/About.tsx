import React from 'react'
import { getImageUrl } from '../../utils'
import experience from "../../experience.json"
import ExperienceBox from '../ExperienceBox/ExperienceBox'

export default function About():JSX.Element {
  return (
    <section>
        <h2>About</h2>
        <div>
            <img src={getImageUrl('about/aboutImage.png')} alt="Me researching some esoteric technologies" />
            <ul>
                <li><img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" />
                <ExperienceBox title={experience.frontend.title} content={experience.frontend.content}/>
                </li>
                <li><img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" />
                <ExperienceBox title={experience.fullstack.title} content={experience.fullstack.content}/>
                </li>
                <li><img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" />
                <ExperienceBox title={experience.gamedev.title} content={experience.frontend.content}/>
                </li>
            </ul>
        </div>
    </section>
  )
}
