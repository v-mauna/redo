import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div>
      <div id='contact'>
        <div id='page-container'>
          <div className='contact-page-header'>Connect with me today.</div>
          <section id='contact-page-text-container'>
            <div id='contact-page-text'>
              <h1 id='contact-text'>let's get in touch</h1>
              <div id='contact-box'>
                <p className='contactLink'>
                  <p>
                    <h3>e-mail</h3> Feel free to reach out to me if you have
                    any questions or comments about the services I offer. Also,
                    you could always just send me a friendly hello.{' '}
                  </p>
                  <a href='mailto:vmauna@aol.com' className='email'>
                    e-mail me
                  </a>
                </p>
              </div>
              <div id='contact-box'>
                <p className='contactLink'>
                <p><h3>linkedIn</h3>
                if you'd like to learn more about my professional history, please
                feel free to visit and browse through my linkedin profile and connect with me 
                there. </p>
                  <a
                    href='https://www.linkedin.com/in/v-mauna/'
                    className='linkedin'
                  >
                    Connect on LinkedIn
                  </a>
                </p>
              </div>
              <div id='contact-box'>
                <p className='contactLink'>
                <p><h3>github</h3>
                if you're curious about my technical projects, hop on over to github
                and take a look around through my past and present projects.
                 </p>
                  <a href='https://github.com/v-mauna' className='github'>
                    visit Github
                  </a>
                </p>
              </div>
            </div>

            <br />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact
