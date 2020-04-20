import React from 'react'
import './projects.css'
import MindcraftLogo from '../images/Mindcraft-Logo.png'
import WorkoutsRemixedLogo from '../images/WR-Logo.png'
import STYPLogo from '../images/STYP-small.png'
import SNYCRLogo from '../images/syncrLogo.png'
import { Link} from 'react-router-dom'


export default class Projects extends React.Component {
    constructor(){
        super()
        this.state={
            workoutsRemixed: false,
            snycr: false,
            mindcraft: false,
            styp: false
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
                <div class="content">
                <Link
                 to="/workoutsRemixed"
                >
                <div className="content-overlay"/>
                  <img
                    id='project-logo'
                    src={MindcraftLogo}
                    alt='Mindcraft Logo'
                  />
                  
                  <div className="content-details fadeIn-top">
                    <p id="overlay-text">React Native App centered around Mental Health</p>
                    <button>View Project</button>
                  </div>
                </Link>
                </div>
                  <div class="content">
                  <Link
                   to="/workoutsRemixed"
                  >
                  <div className="content-overlay"/>
                    <img
                      id='project-logo'
                      src={WorkoutsRemixedLogo}
                      alt='Workouts Remixed Logo'
                    />
                    
                    <div className="content-details fadeIn-top">
                      <p id="overlay-text">React Native Fitness App</p>
                      <button>View Project</button>
                    </div>
                  </Link>
                  </div>
                  <div class="content">
                  <Link to='/styp'>
                  <div className="content-overlay"/>
                    <img
                      id='project-logo'
                      src={STYPLogo}
                      alt='Shop Till You Pop Logo'
                    /><div className="content-details fadeIn-top">
                    <p id="overlay-text">React E-Commerce Website</p>
                    <button>View Project</button>
                  </div>
                </Link>
                </div>
                <div class="content">
                <Link to='/styp'>
                <div className="content-overlay"/>
                  <img
                    id='project-logo'
                    src={SNYCRLogo}
                    alt='Support NYC Restaurants Logo'
                  /><div className="content-details fadeIn-top">
                  <p id="overlay-text">Website built in Response to NYC Pause</p>
                  <button>View Project</button>
                </div>
              </Link>
              </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

