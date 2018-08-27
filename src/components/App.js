import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Navbar from './Navbar'
import Login from './Login'
import Register from './Register'
import Home from './Home'

@withRouter
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default App
