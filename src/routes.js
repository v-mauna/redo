import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './welcome/welcome'
import Navbar from './navbar/navbar'
import WhoAmI from './about/about'
import Projects from './projects/projects'
import Contact from './contact/contact'
class Routes extends Component {
  render () {
    return (
      <Router>
        <div />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact  path='/about' render={props=>< WhoAmI {...props}/>}/>
          <Route exact path='/portfolio' component={Projects}/>
          <Route exact path='/reachMe' component={Contact}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes
