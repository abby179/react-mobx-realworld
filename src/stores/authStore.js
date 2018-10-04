import { observable, action } from 'mobx'
import agent from '../agent'
import commonStore from './commonStore'

class AuthStore {
  @observable inProgress = false
  @observable error = undefined

  @observable values = {
    username: '',
    email: '',
    password: ''
  }

  @action setEmail(email) {
    this.values.email = email
  }

  @action setPassword(password) {
    this.values.password = password
  }

  @action login() {
    this.inProgress = true
    this.error = undefined
    return agent.Auth.login(this.values.email, this.values.password)
      .then(({user}) => commonStore.setToken(user.token))
      .catch(action((err) => {throw err}))
      .finally(action(() => {this.inProgress = false}))
  }
}

export default new AuthStore()