import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoggedOutView = (props) => {
  return (
    <div className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/" className="nav-link"><FontAwesomeIcon icon="home" />Home</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link"><FontAwesomeIcon icon="sign-in-alt" />Sign in</Link></li>
        <li className="nav-item"><Link to="/register" className="nav-link">Sign up</Link></li>
      </ul>
    </div>
  )
}

const LoggedInView = (props) => {
  return (
    <div className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/" className="nav-link"><FontAwesomeIcon icon="home" />Home</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link"><FontAwesomeIcon icon="edit" />New Post</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link"><FontAwesomeIcon icon="cog" />Settings</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link">Username</Link></li>
      </ul>
    </div>
  )
}

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand text-primary font-weight-bold">Conduit</Link>
          {/* <LoggedInView /> */}
          <LoggedOutView />
        </div>
      </nav>
    )
  }
}
