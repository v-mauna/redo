import React from 'react'
import './about.css'

const WhoAmI = () => {
  return (
    <div>
    <div id='whoAmI'>
      <div id="aboutContainer">
       <div className ="typeWrite">A Little Bit About Me</div>
       </div>
      <div id='aboutText'>
        <h2>Pleasure to meet you.</h2>
        <p />
        <p>
          Hi! I'm Vanessa, a New York born and based full stack software
          engineer with a background in restaurant management.
          <p />
          Working in the restaurant industry for over a decade, I enjoyed the
          daily challenges that came along with managing teams of adults and
          crafting exceptional guest experiences. I learned that I loved the
          dynamic and collaborative nature of the work: filling in gaps and
          jumping into different roles when needed to support the functioning of
          my team, interacting with a variety of stakeholders and customer
          personalities,gracefully<span> (and stealthily) </span>{' '}
          troubleshooting problems, and learning how to do things faster, better
          and cleaner each day to continually improve my craft. My time in
          restaurants also enforced my passion for well thought out systems, and
          the satisfaction that comes from the marriage of form, function and
          aesthetics.
          <p />
          I transitioned into engineering because I knew I wanted to do
          something bigger while still feeding my desire to build, fix, and
          improve in a dynamic, creative, and collaborative setting. In the
          summer of 2019, I enrolled in the The Grace Hopper program, an
          intensive 17 week program centered on full stack JavaScript
          development.
          <p />
          As a recent graduate, I am extremely motivated and open to any and all
          opportunities.
          <p />
          If you are interested in working together, let's connect! You can
          reach me by choosing one of the options to your left.
        </p>
      </div>
    </div>
    </div>
  )
}

export default WhoAmI
