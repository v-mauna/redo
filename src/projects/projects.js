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
            <div className='projects-page-header'>Projects</div>
            <section id='projects-page-text-container'>
              <div id='projects-page-text'>
              <h1>user-minded developer</h1>
                <p id="projects-text">A decade in hospitality taught me the importance of putting the guest first and thinking about what their needs are, and
                how to satisfy those needs. I believe the same is important when building a website or an application - we should consider what the user needs, wants,
                and what we can do to deliver both and more while still building something that has a visual appeal, interface, and architecture. </p>
                <div id='projects-page-gallery'>

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
                      <div id='img-container'>
                      <img
                        id='project-logo'
                        src={MindcraftLogo}
                        alt='Mindcraft Logo'
                      />
                      <div id='img-overlay'>
                      <p id='img-overlay-text'>View Project</p>
                   
                    </div>
                    </div>
                    </a>

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
                      <div id='img-container'>
                      <img
                        id='project-logo'
                        src={WorkoutsRemixedLogo}
                        alt='Workouts Remixed Logo'
                      />
                      <div id='img-overlay'>
                      <p id='img-overlay-text'>View Project</p>
                    </div>
                    </div>
                    </a>
                  </div>
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
                      <div id='img-container'>
                      <img
                        id='project-logo'
                        src={STYPLogo}
                        alt='Shop Till You Pop Logo'
                      />
                      <div id='img-overlay'>
                      <p id='img-overlay-text'>View Project</p>
                    </div>
                    </div>
                    </a>
                  
                    <a href='#selected-project'  onClick={() =>(
                        this.setState({
                          workoutsRemixed: false,
                          snycr: true,
                          styp: false,
                          mindcraft: false,
                        }),document.getElementById('selected-project').style.display="block")
                      }>
                      <div id='img-container'>
                      <img
                        id='project-logo'
                        src={SNYCRLogo}
                        alt='Support NYC Restaurants Logo'
                      />
                      <div id='img-overlay'>
                      <p id='img-overlay-text'>View Project</p>
                      </div>
                      </div>
                    </a>
                  
                </div>
              </div>
            </section>
            <section id='selected-project'>
            {this.state.styp && <STYP />}
            {this.state.workoutsRemixed && <WorkoutsRemixed />}
            {this.state.mindcraft && <Mindcraft />}
            {this.state.snycr && <SNYCR />}
</section>
          </div>
        </div>
       
      </div>
    )
  }
}
