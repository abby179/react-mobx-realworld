import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('authStore')
@observer
export default class Login extends Component {
  handleEmailChange = (e) => this.props.authStore.setEmail(e.target.value)
  handlePasswordChange = (e) => this.props.authStore.setPassword(e.target.value)
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.authStore.login()
  }

  render() {
    const { values, inProgress } = this.props.authStore

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-center">Sign in</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={values.email}
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={values.password}
                  onChange={this.handlePasswordChange}
                />
              </div>
              <button type="submit" className="btn btn-primary pull-right" disabled={inProgress}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
