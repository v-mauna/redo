import React from 'react'

import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='header'>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
      <div className='navBar'>
        <h3 id='name'>Vanessa Mauna</h3>
        <ul id='topNav'>
          <li>
            <Link id='link' to='/'>
              Home
            </Link>{' '}
          </li>
          <li>
            <Link id='link' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link id='link' to='/portfolio'>
              Portfolio
            </Link>{' '}
          </li>
          <li>
            <Link id='link' to='/reachMe'>
              Reach Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
