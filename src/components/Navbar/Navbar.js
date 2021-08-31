import React from 'react'
import './navbar.css'
import {ReactComponent as GitIcon} from './img/git.svg'
import {ReactComponent as JsIcon} from './img/logojs.svg'
import {ReactComponent as LinkedInIcon} from './img/linkedin.svg'

const Navbar = () => {
  return (
    <nav>
      <div id='navigation'>
        <div className="nav-left-side">
          <JsIcon className='logo' />
          <h1>Portfolio</h1>
        </div>
        <div className="nav-menu-right-side">
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
          <a href="#timeline">Timeline</a>
          <a href="#about-me">About Me</a>
          <GitIcon />
          <LinkedInIcon />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
