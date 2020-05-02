import React from 'react'
import Sunset from '../images/IMG_0062.jpeg'
import './about.css'

const WhoAmI = () => {
  return (
    <div>
      <div id='about'>
        <div id='about-page-container'>
          <div className=
          'about-page-header'>
            a little bit about me
          </div>
          <section id='about-page-text-container'>
            <img src={Sunset} alt='Williamsburg Sunset' />
            <p id='about-page-text'>
              <h3>a few fun facts</h3>
              <br />
              I'm a Brooklyn Native, I wanted to be an engineer, architect and
              pilot as a kid, I learned to cook young and pursued being a chef
              in my 20s, I learned Italian working in a kitchen with all Italian
              grandmothers, I love Italy, its food, its wine, and its people, I
              still cook, I like to build things, I never met a carb I didn't
              like, I love being in New York as much as I love being away from
              it, I love cleanliness, function, and good aesthetics.
              <br />
            </p>
          </section>
          <section id='professional-points'>
            <h1>professional points</h1>
            <p id='professional-points-text'>
              I love building something that connects with people, be it on a
              plate or on a screen.I love putting teams together, watching how
              their dynamics come together and seeing the resulting product. I
              like the puzzles that come up while working and debugging them to
              make things work and to make things better. I enjoy getting to do
              different things and learning about different roles, their
              responsibilities and the accompanying perspective.
            </p>
          </section>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default WhoAmI
