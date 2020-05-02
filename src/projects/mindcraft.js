import React from 'react'
import mcSC from '../images/MC-Login-SC.png'

const Mindcraft = () => (
  <div>
    <div>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://github.com/v-mauna/Mindcraft'
      >
        <p id='project-title'>Mindcraft</p>
      </a>
      <p id='project-description'>
        Mindcraft is a mindfulness and skill-learning app focused on mental
        health for people in the tech industry. Users are able to take DBT
        quizzes that are centered around various skill sets and receive feedback
        on their responses. Users graduate to different levels based on their
        performance on these quizzes as well as through daily check-ins, and
        completing a certain amount of journal entries and meditations.
      </p>
      <p id='project-description'>
        Built with: ReactNative, ReactNavigation, Node.js, Express, Javascript,
        PostgreSQL, Redux, Heroku
      </p>
    </div>
    <div>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.github.com/v-mauna/mindcraft'
      >
        <img id='mobile-screenshot' src={mcSC} alt='Mindcraft Screenshot' />
      </a>
    </div>
  </div>
)

export default Mindcraft
