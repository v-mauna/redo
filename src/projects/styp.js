import React from 'react'
import stypSC from '../images/stypSC-macbook.png'

const STYP = () => (
  <div>
    <a href='http://s-t-y-p.herokuapp.com'>
      <p id='project-title'> Shop Till You Pop</p>
    </a>
    <p id='project-description'>
      An e-commerce site designed to give users access to a variety of cereals
      and introduce them to some new ones along the way. Shop Till You Pop
      utlizes the technologies listed below to allow users or guests to create
      carts, continue shopping, edit their carts, and checkout. Shop Till You
      Pop also takes care of inventory management, ensuring that any price
      changes are represented in a user's cart until the time of purchase, and
      that no out-of-stock products are listed as available.
      <p id='project-description'>
        Built with: React, Redux, Node.js, PostgreSQL, Oauth
      </p>
    </p>
    <a href='http://s-t-y-p.herokuapp.com'>
      <img
        id='macbook-screenshot'
        alt='Shop Till You Pop Screenshot'
        src={stypSC}
      />
    </a>
  </div>
)

export default STYP
