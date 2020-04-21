import React from 'react'
import './projects.css'
import MindcraftLogo from '../images/Mindcraft-Logo.png'
import WorkoutsRemixedLogo from '../images/WR-Logo.png'
import STYPLogo from '../images/STYP-small.png'
import SNYCRLogo from '../images/syncrLogo.png'
import STYP from './styp'
import SNYCR from './snycr'
import WorkoutsRemixed from './workoutsRemixed'
import Mindcraft from './mindcraft'

export default class Projects extends React.Component {
  constructor () {
    super()
    this.state = {
      workoutsRemixed: false,
      snycr: false,
      mindcraft: false,
      styp: false,
    }
  }

  render () {
    return (
      <div>
        <div id='projects'>
          <div id='projects-page-container'>
            <div className='projects-header'>Projects</div>
            <section id='projects-page-text-container'>
              <div id='projects-page-text'>
                <h4> Technical Projects</h4>
                <div id='projects-page-gallery'>
                  <div className='content'>
                    <a
                      href='#selected-project'
                      onClick={() =>
                        (this.setState({
                          styp: false,
                          workoutsRemixed: false,
                          snycr: false,
                          mindcraft: true,
                        }),document.getElementById('selected-project').style.display="flex")
                      }
                    >
                      <div className='content-overlay' />
                      <img
                        id='project-logo'
                        src={MindcraftLogo}
                        alt='Mindcraft Logo'
                      />

                      <div className='content-details fadeIn-right'>
                        <p id='overlay-text'>
                          React Native App centered around Mental Health
                        </p>
                        <button>View Project</button>
                      </div>
                    </a>
                  </div>
                  <div className='content'>
                    <a href="#selected-project"
                      onClick={() =>(
                        this.setState({
                          workoutsRemixed: true,
                          snycr: false,
                          styp: false,
                          mindcraft: false,
                        }),document.getElementById('selected-project').style.display="block")
                      }
                    >
                      <div className='content-overlay' />
                      <img
                        id='project-logo'
                        src={WorkoutsRemixedLogo}
                        alt='Workouts Remixed Logo'
                      />

                      <div className='content-details fadeIn-top'>
                        <p id='overlay-text'>React Native Fitness App</p>
                        <button>View Project</button>
                      </div>
                    </a>
                  </div>
                  <div className='content'>
                    <a
                      href='#selected-project'
                      onClick={() =>
                        (this.setState({
                          styp: true,
                          workoutsRemixed: false,
                          snycr: false,
                          mindcraft: false,
                        }),document.getElementById('selected-project').style.display="block")
                      }
                    >
                      <div className='content-overlay' />
                      <img
                        id='project-logo'
                        src={STYPLogo}
                        alt='Shop Till You Pop Logo'
                      />
                      <div className='content-details fadeIn-right'>
                        <p id='overlay-text'>E-Commerce Website</p>
                        <button>View Project</button>
                      </div>
                    </a>
                  </div>
                  <div className='content'>
                    <a href='#selected-project'  onClick={() =>(
                        this.setState({
                          workoutsRemixed: false,
                          snycr: true,
                          styp: false,
                          mindcraft: false,
                        }),document.getElementById('selected-project').style.display="block")
                      }>
                      <div className='content-overlay' />
                      <img
                        id='project-logo'
                        src={SNYCRLogo}
                        alt='Support NYC Restaurants Logo'
                      />
                      <div className='content-details fadeIn-top'>
                        <p id='overlay-text'>
                          Website built in Response to NYC Pause
                        </p>
                        <button>View Project</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section id='selected-project'>
            <div >
            {this.state.styp && <STYP />}
            {this.state.workoutsRemixed && <WorkoutsRemixed />}
            {this.state.mindcraft && <Mindcraft />}
            {this.state.snycr && <SNYCR />}
          </div></section>
          </div>
        </div>
       
      </div>
    )
  }
}
