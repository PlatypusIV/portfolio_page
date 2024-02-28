import React from 'react'
import { getImageUrl } from '../../utils'

export default function Hero():JSX.Element {
  return (<section>
    <div>
        <h1>Hello! I am Herbert!</h1>
        <p>I am a full stack software engineer/developer, with 4 years of experience.</p>
        <a href="mailto:hkymera2@gmail.com">Email you can reach me on.</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Image of me" />
  </section>)
}
