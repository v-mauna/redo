import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './welcome/welcome'
import Navbar from './navbar/navbar'
import WhoAmI from './about/about'

class Routes extends Component {
  render () {
    return (
      <Router>
        <div />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/about' exact render={props=>< WhoAmI {...props}/>}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes
