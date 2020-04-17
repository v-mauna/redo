import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="header">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="navBar">
        <h3>Vanessa Mauna</h3>
          <ul id="topNav">
          <li><Link
            id="link"
            to="/"
          >

            Home
            
          </Link>{' '}
          </li>
            <li>
          <Link
            id="link"
            to="/about"
          >
            Who Am I?
            
          </Link>
          </li>
            <li>
          <Link
            id="link"
            to="/portfolio"
          >
            Portfolio
          </Link>{' '}
          </li>
            <li>
          
          <Link
            id="link"
            to="/reachMe"
          >
            Reach Out
          </Link>
          </li>
          </ul>
        
        </div>

        <div className="dropNav">
          <i className="fa fa-align-justify" id="dropbtn"></i>
          <div className="dropdown-content">
            <NavLink
              smooth
              to="/portfolio"
              activeClassName="min-screen"
              className="min-screen"
            >
              Portfolio
            </NavLink>
            <NavLink
              smooth
              to="/reachMe"
              activeClassName="min-screen"
              className="min-screen"
            >
              Contact
            </NavLink>
            <NavLink
              smooth
              to="/whoAmI"
              activeClassName="min-screen"
              className="min-screen"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
