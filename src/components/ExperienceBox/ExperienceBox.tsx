import React from 'react'

interface Prompts {
    title: string;
    content: string;
}

export default function ExperienceBox(prompts: Prompts):JSX.Element {
  return (
    <div>
        <h3>{prompts.title}</h3>
        <p>{prompts.content}</p>
    </div>
  )
}
