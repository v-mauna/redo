import React from 'react'
import wrSC from '../images/wrSC-iPhone.png'

const WorkoutsRemixed = () => (
  <div>
	  <a href='https://github.com/v-mauna/workoutsRemixed'> 
	  <p id="project-title">Workouts Remixed</p></a>
      <p id="project-description">
        Created and designed as part of a 3-day Hackathon Project, Workouts
        Remixed was made for those who desire to have more artistic liberties
        over their workouts. The app gives users access to pre-designed workout
        programs while also allowing them to design and store their own programs
        by accessing individual,targeted exercises as well as having the option
        to choose exercises or circuits from the pre-designed programs.
	  </p>
	  <p id="project-description"> Built with: ReactNative, ReactNavigation, Node.js,Express,Javascript</p>
     
	  <a href='https://github.com/v-mauna/workoutsRemixed'>
	
      <img
        id="mobile-screenshot"
        alt='Workouts Remixed Screenshot'
        src={wrSC}
      />
    </a>
    <div>
    </div>
  </div>
)

export default WorkoutsRemixed
