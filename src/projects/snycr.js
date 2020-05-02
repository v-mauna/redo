import React from 'react'
import snycrLogo from '../images/SNYCR-sc-Macbook Pro 2016.png'

const SNYCR = () => (
  <div>
    <div>
      <a target='_blank' rel='noreferrer noopener' href='https://www.snycr.com'>
        <p id='project-title'>SNYCR - Support New York City Restaurants</p>
      </a>
      <p id='project-description'>
        Support New York City Restaurants was built as a response to #NYCPause during the COVID-19 pandemic.
        As a former restaurant worker, I wanted to give restaurants an extra platform to share their information with 
        the public while providing a library of resources for effected workers and allowing those looking to donate 
        an option to search for their favorite spaces by name or browsing by neighborhood. 
      </p>
      <p id='project-description'>
        Built with: React, AWS - Cognito, DynamoDB, Lambda, API Gateway, S3.
      </p>
    </div>
    <div>
      <a target='_blank' rel='noreferrer noopener' href='https://www.snycr.com'>
        <img
          id='macbook-screenshot'
          src={snycrLogo}
          alt='Support NYC Restaurant Website Screenshot'
        />
      </a>
    </div>
  </div>
)

export default SNYCR
